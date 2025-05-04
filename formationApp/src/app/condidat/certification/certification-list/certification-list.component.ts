import { Component, OnInit } from '@angular/core';
import { Certification } from 'src/app/core/models/certification.model';
import { CertificationService } from 'src/app/core/services/certification.service';

@Component({
  selector: 'app-certification-list',
  templateUrl: './certification-list.component.html',
  styleUrls: ['./certification-list.component.scss']
})
export class CertificationListComponent implements OnInit {
  certifications: Certification[] = [];
  isLoading = false;
  error: string | null = null;

  constructor(private certificationService: CertificationService) { }

  ngOnInit(): void {
    this.loadCertifications();
  }

  loadCertifications(): void {
    this.isLoading = true;
    this.error = null;

    this.certificationService.getUserCertifications().subscribe({
      next: (data) => {
        this.certifications = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load certifications. Please try again later.';
        this.isLoading = false;
        console.error('Error loading certifications:', err);
      }
    });
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
}
