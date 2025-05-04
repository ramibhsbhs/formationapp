import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CondidatFormation } from '../../core/models';

@Component({
  selector: 'app-condidat-formation-card',
  templateUrl: './condidat-formation-card.component.html',
  styleUrls: ['./condidat-formation-card.component.scss']
})
export class CondidatFormationCardComponent implements OnInit {

  @Input() formation!: CondidatFormation;
  @Output() viewDetails = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void { }

  getCategoryColor(category: string): string {
    switch (category) {
      case 'Technical Training':
        return 'bg-blue-100 text-blue-800';
      case 'Soft Skills':
        return 'bg-red-100 text-red-800';
      case 'Leadership':
        return 'bg-green-100 text-green-800';
      case 'Project Management':
        return 'bg-purple-100 text-purple-800';
      case 'Compliance':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  getCategoryLabel(category: string): string {
    switch (category) {
      case 'Technical Training':
        return 'Technique';
      case 'Soft Skills':
        return 'Sécurité';
      case 'Leadership':
        return 'Qualité';
      case 'Project Management':
        return 'Project Management';
      case 'Compliance':
        return 'Compliance';
      default:
        return category;
    }
  }

}
