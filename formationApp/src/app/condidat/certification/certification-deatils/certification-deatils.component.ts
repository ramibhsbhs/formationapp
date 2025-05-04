import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Certification } from 'src/app/core/models/certification.model';
import { CertificationService } from 'src/app/core/services/certification.service';

@Component({
  selector: 'app-certification-deatils',
  templateUrl: './certification-deatils.component.html',
  styleUrls: ['./certification-deatils.component.scss']
})
export class CertificationDeatilsComponent implements OnInit {

  certification: Certification | null = null;
  isLoading = false;
  error: string | null = null;

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

  printCertificate(): void {
    window.print();
  }
}
