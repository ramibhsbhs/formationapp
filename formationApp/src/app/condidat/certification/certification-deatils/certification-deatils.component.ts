import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Certification } from 'src/app/core/models/certification.model';
import { CertificationService } from 'src/app/core/services/certification.service';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-certification-deatils',
  templateUrl: './certification-deatils.component.html',
  styleUrls: ['./certification-deatils.component.scss']
})
export class CertificationDeatilsComponent implements OnInit {

  certification: Certification | null = null;
  isLoading = false;
  error: string | null = null;
  generatingPdf = false;

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
        this.error = 'Failed to load certification. Please try again later.';
        this.isLoading = false;
        console.error('Error loading certification:', err);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/condidat/certifications']);
  }

  getPassStatus(score: number): string {
    return score >= 70 ? 'Passed' : 'Failed';
  }

  getScoreClass(score: number): string {
    if (score >= 90) return 'text-green-700 bg-green-100';
    if (score >= 70) return 'text-green-600 bg-green-50';
    if (score >= 50) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  }

  /**
   * Returns the appropriate gender pronoun for the certificate text
   * This is a simple implementation - in a real app, you might want to store gender info
   * or use a more sophisticated approach
   */
  getGenderPronoun(): string {
    // For demonstration purposes, we'll use "his/her" as a generic pronoun
    // In a real application, you would determine this based on user data
    return "his/her";
  }

  printCertificate(): void {
    this.generatingPdf = true;

    // Utiliser directement l'élément du certificat
    const element = document.querySelector('.certificate-wrapper');

    // Options simplifiées pour html2pdf
    const options = {
      margin: 0,
      filename: `certificate_${this.certification?.user.userName.replace(/\s+/g, '_')}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 1, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
    };

    // Générer le PDF
    html2pdf().from(element).set(options).save().then(() => {
      this.generatingPdf = false;
    }).catch(() => {
      this.generatingPdf = false;
      window.print(); // Fallback
    });
  }
}
