import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Certification } from 'src/app/core/models/certification.model';
import { CertificationService } from 'src/app/core/services/certification.service';

@Component({
  selector: 'app-manager-certification-list',
  templateUrl: './certification-list.component.html',
  styleUrls: ['./certification-list.component.scss']
})
export class ManagerCertificationListComponent implements OnInit {
  certifications: Certification[] = [];
  filteredCertifications: Certification[] = [];
  isLoading = false;
  error: string | null = null;
  
  // Filtres
  searchTerm = '';
  showOnlyPassed = false;
  
  constructor(
    private certificationService: CertificationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadCertifications();
  }

  loadCertifications(): void {
    this.isLoading = true;
    this.error = null;

    this.certificationService.getCertifications().subscribe({
      next: (data) => {
        this.certifications = data;
        this.applyFilters();
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Erreur lors du chargement des certifications. Veuillez réessayer plus tard.';
        this.isLoading = false;
        console.error('Erreur lors du chargement des certifications:', err);
      }
    });
  }

  applyFilters(): void {
    let filtered = [...this.certifications];
    
    // Filtrer par réussite
    if (this.showOnlyPassed) {
      filtered = filtered.filter(cert => cert.score >= 70);
    }
    
    // Filtrer par terme de recherche
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(cert => 
        cert.user.userName.toLowerCase().includes(term) ||
        cert.user.email.toLowerCase().includes(term) ||
        cert.session.title.toLowerCase().includes(term) ||
        cert.session.formation.title.toLowerCase().includes(term) ||
        cert.description.toLowerCase().includes(term)
      );
    }
    
    this.filteredCertifications = filtered;
  }

  getPassStatus(score: number): string {
    return score >= 70 ? 'Réussi' : 'Échoué';
  }

  getScoreClass(score: number): string {
    if (score >= 90) return 'text-green-700 bg-green-100';
    if (score >= 70) return 'text-green-600 bg-green-50';
    if (score >= 50) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  }

  formatDate(date: Date): string {
    if (!date) return '';
    
    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();
    
    return `${day}/${month}/${year}`;
  }

  viewCertification(id: number): void {
    this.router.navigate(['/manager/certifications', id]);
  }
}
