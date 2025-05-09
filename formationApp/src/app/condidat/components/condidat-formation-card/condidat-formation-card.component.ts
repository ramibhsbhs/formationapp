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

  /**
   * Retourne les classes CSS pour la couleur de la catégorie
   */
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

  /**
   * Retourne les classes CSS pour le dégradé de la bannière
   */
  getBannerGradient(category: string): string {
    switch (category) {
      case 'Technical Training':
        return 'from-blue-400 to-blue-600';
      case 'Soft Skills':
        return 'from-red-400 to-red-600';
      case 'Leadership':
        return 'from-green-400 to-green-600';
      case 'Project Management':
        return 'from-purple-400 to-purple-600';
      case 'Compliance':
        return 'from-yellow-400 to-yellow-600';
      default:
        return 'from-gray-400 to-gray-600';
    }
  }

  /**
   * Retourne le libellé de la catégorie
   */
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

  /**
   * Calcule le pourcentage de progression de l'utilisateur
   */
  getProgressPercentage(): number {
    if (!this.formation.userProgress || this.formation.userProgress.length === 0) {
      return 0;
    }

    const completedModules = this.formation.userProgress.length;
    const totalModules = this.formation.modules.length;

    return totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0;
  }

  /**
   * Retourne une date formatée pour la dernière mise à jour
   */
  getLastUpdateDate(): string {
    // Comme nous n'avons pas de champ de date de mise à jour, nous retournons une date fictive
    // Dans un cas réel, vous utiliseriez une propriété de l'objet formation
    return 'Il y a 3 jours';
  }
}
