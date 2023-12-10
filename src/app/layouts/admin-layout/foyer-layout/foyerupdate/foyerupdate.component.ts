import { Component, OnInit } from '@angular/core';
import { Foyer } from '../../../../models/foyer';
import { FoyerService } from '../../../../services/foyer-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-foyerupdate',
  templateUrl: './foyerupdate.component.html',
  styleUrls: ['./foyerupdate.component.scss']
})
export class FoyerupdateComponent implements OnInit {
  foyer: Foyer;

  // Add validation flags
  isCapaciteValid: boolean = true;
  isTelephoneValid: boolean = true;

  constructor(private foyerService: FoyerService, private router: Router, private route: ActivatedRoute) {}

  onSubmit() {
    // Validate inputs before submitting
    this.isCapaciteValid = this.validatePositiveNumber(this.foyer.capaciteFoyer);
    this.isTelephoneValid = this.validateTelephone(this.foyer.telephoneFoyer);

    if (this.isCapaciteValid && this.isTelephoneValid) {
      this.foyerService.updateFoyer(this.foyer.idFoyer, this.foyer).subscribe(
        (result) => {
          console.log('Foyer mis à jour avec succès:', result);
          this.router.navigate(['/admin/foyerdetail']);
        },
        (error) => {
          console.error('Erreur lors de la mise à jour du foyer:', error);
        }
      );
    }
  }

  getFoyerbyID(id: number) {
    this.foyerService.getFoyerbyID(id).subscribe(
      (result) => {
        this.foyer = result;
      },
    );
  }

  validatePositiveNumber(value: number): boolean {
    return value >= 0;
  }

  validateTelephone(value: number): boolean {
    // Check if the length is 8 (you might want to add more specific validation)
    return value != null && value.toString().length === 8;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getFoyerbyID(params['id']);
    });
  }
}
