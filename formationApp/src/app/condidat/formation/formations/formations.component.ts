import { Component, OnInit } from '@angular/core';
import { CondidatFormation, Session } from '../../core/models';
import { CondidatService } from '../../core/condidat.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {
  // Données
  formations: CondidatFormation[] = [];
  filteredFormations: CondidatFormation[] = [];
  categories: string[] = [
    'Technical Training',
    'Soft Skills',
    'Leadership',
    'Project Management',
    'Compliance'
  ];

  // État
  isLoading: boolean = false;
  searchTerm: string = '';
  selectedCategory: string = '';

  constructor(private condidatFormationService: CondidatService) { }

  ngOnInit(): void {
    this.fetchFormations();
  }

  /**
   * Récupère les formations depuis l'API
   */
  fetchFormations() {
    this.isLoading = true;
    this.condidatFormationService.getFormations().subscribe({
      next: (response) => {
        this.formations = response;
        this.filteredFormations = [...this.formations];
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching formations:', error);
        this.isLoading = false;
      }
    });
  }

  /**
   * Filtre les formations en fonction des critères de recherche
   */
  filterFormations() {
    this.filteredFormations = this.formations.filter(formation => {
      // Filtre par terme de recherche
      const matchesSearchTerm = this.searchTerm === '' ||
        formation.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        formation.description.toLowerCase().includes(this.searchTerm.toLowerCase());

      // Filtre par catégorie
      const matchesCategory = this.selectedCategory === '' ||
        formation.category === this.selectedCategory;

      return matchesSearchTerm && matchesCategory;
    });
  }

  /**
   * Réinitialise les filtres
   */
  resetFilters() {
    this.searchTerm = '';
    this.selectedCategory = '';
    this.filteredFormations = [...this.formations];
  }

  /**
   * Gère le clic sur le bouton "Voir détails"
   */
  onViewDetails(formationId: number) {
    console.log('View details for formation ID:', formationId);
    // La navigation est gérée par le routerLink dans le template
  }

  /**
   * Retourne le nombre de formations complétées
   */
  getCompletedFormationsCount(): number {
    return this.formations.filter(formation =>
      formation.finalQuizPassed === true
    ).length;
  }

  /**
   * Retourne le nombre de sessions actives
   */
  getActiveSessionsCount(): number {
    const now = new Date();
    let activeSessionsCount = 0;

    this.formations.forEach(formation => {
      formation.sessions.forEach(session => {
        const startDate = new Date(session.startDate);
        const endDate = new Date(session.endDate);

        if (startDate <= now && endDate >= now) {
          activeSessionsCount++;
        }
      });
    });

    return activeSessionsCount;
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
}
