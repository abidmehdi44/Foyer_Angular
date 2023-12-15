// universite-detail.component.ts
    
import { Component, OnInit } from '@angular/core';
import { UniversiteService } from "../../../../services/universite-service.service";
import { Universite } from "../../../../models/universite";
import { Router } from "@angular/router";

@Component({
    selector: 'app-universite-detail',
    templateUrl: './universite-detail.component.html',
    styleUrls: ['./universite-detail.component.scss']
})
export class UniversiteDetailComponent implements OnInit {

    universites: any[] = [];
    filteredUniversites: any[] = [];
    searchTerm: string = '';
    sortKey: string = '';
    reverse: boolean = false;
    universiteToDelete: Universite | null = null;
    totalUni: number = 0;
    p: number = 2;
    itemsPerPage: number =1;

    onSearchTermChange() {
        this.filteredUniversites = this.universites.filter(universite =>
            universite.nomUniversite.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
    }

    sort(key: string) {
        if (this.sortKey === key) {
            this.reverse = !this.reverse;
        } else {
            this.sortKey = key;
            this.reverse = false;
        }

        this.filteredUniversites.sort((a, b) => {
            const valueA = this.getPropertyValue(a, key);
            const valueB = this.getPropertyValue(b, key);

            if (valueA < valueB) {
                return this.reverse ? 1 : -1;
            } else if (valueA > valueB) {
                return this.reverse ? -1 : 1;
            } else {
                return 0;
            }
        });
    }

    private getPropertyValue(obj: any, key: string): any {
        const keys = key.split('.');
        let value = obj;

        for (const k of keys) {
            value = value[k];
        }

        return value;
    }

    constructor(private universiteService: UniversiteService, private router: Router) { }

    ngOnInit() {
        this.universiteService.getAllUniversite().subscribe(
            (universites) => {
                this.universites = universites;
                this.filteredUniversites = this.universites; // Initially show all universities
            },
            (error) => {
                console.error('Error loading universities:', error);
            }
        );
    }

    getAllUniversites() {
        this.universiteService.getAllUniversite().subscribe(
            (universites) => {
                this.universites = universites;
            },
            (error) => {
                console.error('Erreur lors de la récupération des universites:', error);
            }
        );
    }

    

    DeleteUniversite(u: Universite) {
        const universityIndex = this.filteredUniversites.findIndex(
            (f) => f.idUniversite === u.idUniversite
        );

        // Remove deleted university from filtered list directly
        if (universityIndex > -1) {
            this.filteredUniversites.splice(universityIndex, 1);
        }

        this.universiteService.deleteUniversite(u.idUniversite).subscribe(
            (res) => {
                console.log(res);
                // No need to call getAllUniversites again, filtered list already updated
            },
            (error) => {
                console.error('Erreur lors de la suppression de l\'université:', error);
            }
        );
    }


    affecterAFoyer(params: any[]): void {
        const [idUniversite, nomUniversite] = params;
        this.router.navigate(['/admin/universitedetail/affecterFoyer', idUniversite, nomUniversite]);
    }

    desaffecterFoyer(idUniversite: number): void {
        this.universiteService.desaffecterFoyerAUniversite(idUniversite).subscribe(
            () => {
                console.log('université affecté');
                this.getAllUniversites();
            },
            (error) => {
                console.error('Erreur lors de la désaffectation de l\'université d\'un foyer:', error);
            }
        );
    }

    getTotalUniversities() {
        return this.universites.length;
      }
      
      
}