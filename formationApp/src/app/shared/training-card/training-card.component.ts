import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Formation } from 'src/app/core/models/formation.model';
import Training from 'src/app/core/models/training';

@Component({
  selector: 'app-training-card',
  templateUrl: './training-card.component.html',
  styleUrls: ['./training-card.component.scss']
})
export class TrainingCardComponent implements OnInit {
  @Input() training!: Formation;
  @Input() canEdit: boolean = false;
  @Input() canDelete: boolean = false;
  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();
  @Output() addSession = new EventEmitter<number>();

  usersCount: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.training.groups.forEach(group => {
      this.usersCount += group.users?.length || 0;
    });
  }

  getCategoryColor(category: string): string {
    switch (category) {
      case 'Technical Training':
        return 'bg-blue-100 text-blue-800';
      case 'Soft Skills':
        return 'bg-red-100 text-red-800';
      case  'Leadership':
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
      case  'Leadership':
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
