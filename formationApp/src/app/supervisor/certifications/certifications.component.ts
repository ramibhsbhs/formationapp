import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Certification } from 'src/app/core/models/certification.model';
import { CertificationService } from 'src/app/core/services/certification.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {
  certifications: Certification[] = [];
  filteredCertifications: Certification[] = [];
  isLoading: boolean = false;
  error: string | null = null;
  
  // Filtres
  searchTerm: string = '';
  showOnlyPassed: boolean = false;

  certificationService = inject(CertificationService);
  router = inject(Router);

  ngOnInit(): void {
    this.loadCertifications();
  }

  loadCertifications(): void {
    this.isLoading = true;
    this.error = null;

    // Utilise le service de certification pour récupérer les certifications
    // Le backend filtrera automatiquement pour ne renvoyer que les certifications du groupe du superviseur
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

  onSearch(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.applyFilters();
  }

  toggleShowOnlyPassed(): void {
    this.showOnlyPassed = !this.showOnlyPassed;
    this.applyFilters();
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

  viewCertificationDetails(id: number): void {
    this.router.navigate(['/supervisor/certifications', id]);
  }

  getPassStatus(score: number): string {
    return score >= 70 ? 'Réussi' : 'Échoué';
  }
}
