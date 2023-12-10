import { Component, OnInit } from '@angular/core';
import { Foyer } from '../../../../models/foyer';
import { FoyerService } from '../../../../services/foyer-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foyer-add',
  templateUrl: './foyeradd.component.html',
  styleUrls: ['./foyeradd.component.scss']
})
export class FoyerAddComponent implements OnInit {
  foyer: Foyer = {
    idFoyer: 0, // Initialize with a default value or use the appropriate initial value
    nomFoyer: '',
    capaciteFoyer: 0,
    descriptionFoyer: '',
    telephoneFoyer: 0,
    typeF: '',
    universite:'',
  };

  constructor(private foyerService: FoyerService, private router: Router) {}

  onSubmit() {
    this.foyerService.addFoyer(this.foyer).subscribe(
      (result) => {
        console.log('Foyer ajouté avec succès:', result);
        // Add any additional logic after successful submission
        this.router.navigate(['/admin/foyerdetail']);
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du foyer:', error);
        // Handle errors here
      }
    );
  }

  ngOnInit(): void {}

}
