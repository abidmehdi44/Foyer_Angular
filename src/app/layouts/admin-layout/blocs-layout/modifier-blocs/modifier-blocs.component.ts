import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlocService } from 'app/services/bloc-service.service';

@Component({
  selector: 'app-modifier-bloc',
  templateUrl: './modifier-blocs.component.html',
  styleUrls: ['./modifier-blocs.component.scss']
})
export class ModifierBlocsComponent implements OnInit {
  idBloc: number;
  bloc: any = {}; 
  
  constructor(private route: ActivatedRoute, private router: Router, private blocService: BlocService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.idBloc = +paramMap.get('idBloc');
    });

    
    this.bloc = {
      idBloc: this.idBloc,
      nomBloc: '', 
      capaciteBloc: 0
    };
  }

  updateBloc(): void {
    this.blocService.updateBloc(this.bloc).subscribe(
      () => {
        console.log('Bloc modifié avec succès.');
        this.router.navigate(['/admin/blocs']); 
      },
      (error) => {
        console.error('Erreur lors de la modification du bloc :', error);
      }
    );
  }
  goBack(): void {
    this.router.navigate(['/admin/blocs']);
  }
}