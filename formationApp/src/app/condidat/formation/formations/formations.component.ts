import { Component, OnInit } from '@angular/core';
import { CondidatFormation } from '../../core/models';
import { CondidatService } from '../../core/condidat.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {
  formations: CondidatFormation[] = [];

  isLoading: boolean = false;
  constructor(private condidatFormationService: CondidatService) { }



  onViewDetails(formationId: number) {
    console.log('View details for formation ID:', formationId);
    // Navigate or perform action
  }
  ngOnInit(): void {
    this.fetchFormations()
  }
  fetchFormations() {
    this.isLoading = true;
    this.condidatFormationService.getFormations().subscribe({
      next: (response) => {
        this.formations = response;
        this.isLoading = false;
        console.log(this.formations);

      },
      error: (error) => {
        console.error('Error fetching formations:', error);
        this.isLoading = false;
      }
    })

  }
}
