import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Training from 'src/app/core/models/training';

@Component({
  selector: 'app-training-card',
  templateUrl: './training-card.component.html',
  styleUrls: ['./training-card.component.scss']
})
export class TrainingCardComponent implements OnInit {
  @Input() training!: Training;
  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();
  @Output() addSession = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  getCategoryColor(category: string): string {
    switch (category) {
      case 'technical':
        return 'bg-blue-100 text-blue-800';
      case 'safety':
        return 'bg-red-100 text-red-800';
      case 'quality':
        return 'bg-green-100 text-green-800';
      case 'management':
        return 'bg-purple-100 text-purple-800';
      case 'communication':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  getCategoryLabel(category: string): string {
    switch (category) {
      case 'technical':
        return 'Technique';
      case 'safety':
        return 'Sécurité';
      case 'quality':
        return 'Qualité';
      case 'management':
        return 'Management';
      case 'communication':
        return 'Communication';
      default:
        return category;
    }
  }

}
