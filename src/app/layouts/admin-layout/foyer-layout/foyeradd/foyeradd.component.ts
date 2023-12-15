import { Component, OnInit } from '@angular/core';
import { Foyer } from '../../../../models/foyer';
import { FoyerService } from '../../../../services/foyer-service.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

function phoneNumberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const phoneNumber = control.value;
    const isValid = /^\d{8}$/.test(phoneNumber);
    return isValid ? null : { 'invalidPhoneNumber': { value: control.value } };
  };
}

function positiveNumberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    const isValid = value !== null && !isNaN(value) && value >= 0;
    return isValid ? null : { 'invalidPositiveNumber': { value: control.value } };
  };
}

@Component({
  selector: 'app-foyer-add',
  templateUrl: './foyeradd.component.html',
  styleUrls: ['./foyeradd.component.scss']
})
export class FoyerAddComponent implements OnInit {
  foyerForm: FormGroup;

  constructor(private fb: FormBuilder, private foyerService: FoyerService, private router: Router) {
    this.foyerForm = this.fb.group({
      nomFoyer: ['', Validators.required],
      capaciteFoyer: [0, [Validators.required, positiveNumberValidator()]],
      descriptionFoyer: ['', Validators.required],
      telephoneFoyer: [null, [Validators.required, phoneNumberValidator()]],
      typeF: ['', Validators.required],
      universite: null,
    });
  }

  onSubmit() {
    if (this.foyerForm.valid) {
      this.foyerService.addFoyer(this.foyerForm.value).subscribe(
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

  goBack(): void {
    this.router.navigate(['/admin/foyerdetail']);
  }

  ngOnInit(): void {}
}
