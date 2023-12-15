import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlocService } from 'app/services/bloc-service.service';
@Component({
  selector: 'app-affectation-blocs',
  templateUrl: './affectation-blocs.component.html',
  styleUrls: ['./affectation-blocs.component.scss']
})
export class AffectationBlocsComponent implements OnInit {
  idBloc: number;
  availableFoyers: any[] = [];

  constructor(private route: ActivatedRoute, private blocService : BlocService,private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.idBloc = +paramMap.get('idBloc');
    });


    this.blocService.getAvailableFoyers().subscribe(
      (data) => {
        this.availableFoyers = data;
        console.log('Received Foyer:', this.availableFoyers);
      },
      (error) => {
        console.error('Error fetching available foyers:', error);
      }
    );
  }

  affecterBlocAFoyer(idFoyer: number): void {

    this.blocService.affecterBlocAFoyer(this.idBloc, idFoyer).subscribe(
      () => {
        console.log('Bloc affected to foyer successfully.');
        
        setTimeout(() => {
          this.router.navigate(['/admin/blocs']);
        }, 2000); 
      },
      (error) => {
        console.error('Error affecting bloc to foyer:', error);
      }
    );
  }
  goBack(): void {
    this.router.navigate(['/admin/blocs']);
  }
}