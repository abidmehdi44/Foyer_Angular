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
    idFoyer: 0,
    nomFoyer: '',
    capaciteFoyer: 0,
    descriptionFoyer: '',
    telephoneFoyer: null, // Use null for better validation
    typeF: '',
    universite:'',
  };

  // Add validation flags
  isCapaciteValid: boolean = true;
  isTelephoneValid: boolean = true;

  constructor(private foyerService: FoyerService, private router: Router) {}

  onSubmit() {
    // Validate inputs before submitting
    this.isCapaciteValid = this.validatePositiveNumber(this.foyer.capaciteFoyer);
    this.isTelephoneValid = this.validateTelephone(this.foyer.telephoneFoyer);

    if (this.isCapaciteValid && this.isTelephoneValid) {
      this.foyerService.addFoyer(this.foyer).subscribe(
        (result) => {
          console.log('Foyer ajouté avec succès:', result);
          this.router.navigate(['/admin/foyerdetail']);
        },
        (error) => {
          console.error('Erreur lors de l\'ajout du foyer:', error);
        }
      );
    }
  }

  validatePositiveNumber(value: number): boolean {
    return value >= 0;
  }

  validateTelephone(value: number): boolean {
    // Check if the length is 8 (you might want to add more specific validation)
    return value != null && value.toString().length === 8;
  }

  ngOnInit(): void {}
}
