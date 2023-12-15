import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UniversiteService } from 'app/services/universite-service.service';
import {FoyerService} from 'app/services/foyer-service.service';
@Component({
    selector: 'app-universite-affecter',
    templateUrl: './universite-affecter.component.html',
    styleUrls: ['./universite-affecter.component.scss']
})
export class UniversiteAffecterComponent implements OnInit {
    idUniversite: number;
    nomUniversite: string;
    availableFoyers: any[] = [];

    constructor(private route: ActivatedRoute, private universiteService: UniversiteService, private router: Router,private foyerService: FoyerService) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe((paramMap) => {
            this.idUniversite = +paramMap.get('idUniversite');
            this.nomUniversite = paramMap.get('nomUniversite');
        });

        this.foyerService.getAllFoyer().subscribe(
            (data) => {
                this.availableFoyers = data;
                console.log('Received Available Foyers:', this.availableFoyers);
            },
            (error) => {
                console.error('Error fetching available foyers:', error);
            }
        );
    }

    affecterFoyer(idFoyer: number): void {
        this.universiteService.affecterFoyerAUniversite(idFoyer,this.nomUniversite).subscribe(
            () => {
                console.log('Foyer affecté à l\'université avec succès.');

                setTimeout(() => {
                    this.router.navigate(['/admin/universitedetail']);
                }, 2000);
            },
            (error) => {
                console.error('Erreur lors de l\'affectation du foyer à l\'université:', error);
            }
        );
    }



    goBack(): void {
        this.router.navigate(['/admin/universitedetail']);
    }
}
