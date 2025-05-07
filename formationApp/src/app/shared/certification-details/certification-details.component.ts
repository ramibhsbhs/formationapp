import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Certification } from 'src/app/core/models/certification.model';
import { CertificationService } from 'src/app/core/services/certification.service';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-certification-details',
  templateUrl: './certification-details.component.html',
  styleUrls: ['./certification-details.component.scss']
})
export class CertificationDetailsComponent implements OnInit {
  certification: Certification | null = null;
  isLoading = false;
  error: string | null = null;
  generatingPdf = false;
  today = new Date();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private certificationService: CertificationService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadCertification(id);
  }

  loadCertification(id: number): void {
    this.isLoading = true;
    this.error = null;

    this.certificationService.getCertificationById(id).subscribe({
      next: (data) => {
        this.certification = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Erreur lors du chargement de la certification. Veuillez réessayer plus tard.';
        this.isLoading = false;
        console.error('Erreur lors du chargement de la certification:', err);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/admin/certifications']);
  }

  getPassStatus(score: number): string {
    return score >= 70 ? 'Réussi' : 'Échoué';
  }

  getScoreClass(score: number): string {
    if (score >= 90) return 'text-green-700';
    if (score >= 70) return 'text-green-600';
    if (score >= 50) return 'text-yellow-600';
    return 'text-red-600';
  }

  formatDate(date: Date | string): string {
    if (!date) return '';

    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();

    return `${day}/${month}/${year}`;
  }

  downloadPdf(): void {
    if (!this.certification) return;

    this.generatingPdf = true;

    const element = document.getElementById('certificate');
    const options = {
      margin: 0,
      filename: `certification_${this.certification.id}.pdf`,
      image: { type: 'jpeg', quality: 1 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        logging: true,
        letterRendering: true
      },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'landscape',
        compress: true
      }
    };

    try {
      html2pdf()
        .from(element)
        .set(options)
        .save();

      // Force la fin du chargement après 3 secondes
      setTimeout(() => {
        this.generatingPdf = false;
      }, 3000);
    } catch (err) {
      console.error('Erreur lors de la génération du PDF:', err);
      this.generatingPdf = false;
    }
  }
}
