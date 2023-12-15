import { Component, OnInit } from '@angular/core';
import { ChambreService } from '../../../../services/chambre-service.service';
import { Chambre } from '../../../../models/chambre';
import { Bloc } from '../../../../models/bloc';
import { Router } from '@angular/router';

@Component({
    selector: 'app-chambre-details',
    templateUrl: './chambre-details.component.html',
    styleUrls: ['./chambre-details.component.scss'],
})
export class ChambreDetailsComponent implements OnInit {
    chambres: Chambre[] = [];
    blocs: Bloc[] = [];
    searchValue: string = '';
    p: number = 1;
    itemsPerPage: number =1;
    constructor(private chambreService: ChambreService, private router: Router) {}

    ngOnInit(): void {
        this.loadChambres();
    }

    loadChambres(): void {
        this.chambreService.getAllChambres().subscribe(
            (chambres) => {
                this.chambres = chambres;

                // Charger les informations des foyers associés à chaque bloc de chambre
                for (let chambre of this.chambres) {
                    this.chambreService.getFoyer(chambre.bloc.foyer.idFoyer).subscribe(
                        (foyer) => {
                            chambre.bloc.foyer = foyer; // Ajouter les informations du foyer à l'objet bloc de la chambre
                        },
                        (error) => {
                            console.error('Erreur lors de la récupération du foyer:', error);
                        }
                    );
                }
            },
            (error) => {
                console.error('Erreur lors de la récupération des chambres:', error);
            }
        );
    }

    deleteChambre(id: any) {
        this.chambreService.deleteChambre(id).subscribe(
            (result) => {
                console.log('Chambre supprimée avec succès:', result);
                // Ajoutez toute logique supplémentaire après la suppression réussie
                // Mise à jour de la liste des chambres après la suppression
                this.loadChambres();
                // Redirection vers /admin/chambredetails après la suppression
                this.router.navigate(['/chambredetails/chambredetails']);
            },
            (error) => {
                console.error('Erreur lors de la suppression de la chambre:', error);
                // Gérez les erreurs ici
            }
        );
    }
    goToUpdateChambre(chambreId: number): void {
        // Utilisez le service Router pour naviguer vers le formulaire de modification avec l'ID de la chambre
        this.router.navigate(['/admin/chambredetails/updatechambre', chambreId]);    }
    loadChambre(): void {
        this.chambreService.getChambresParNomBloc(this.searchValue).subscribe(
            (chambres) => {
                this.chambres = chambres;
            },
            (error) => {
                console.error('Erreur lors de la récupération des chambres:', error);
            }
        );
    }


    searchChambres(): void {
        this.loadChambre();
    }
}