import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import { UniversiteService } from '../../../../services/universite-service.service';
import { Router } from '@angular/router';

function phoneNumberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const phoneNumber = control.value;
    const isValid = /^\d{8}$/.test(phoneNumber);
    return isValid ? null : { 'invalidPhoneNumber': { value: control.value } };
  };
}

@Component({
  selector: 'app-universite-add',
  templateUrl: './universite-add.component.html',
  styleUrls: ['./universite-add.component.scss']
})
export class UniversiteAddComponent implements OnInit {
  universiteForm: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private universiteService: UniversiteService, private router: Router) {
    this.universiteForm = this.fb.group({
      nomUniversite: ['', Validators.required],
      adresse: ['', Validators.required],
      ville: ['', Validators.required],
      telephone: ['', [Validators.required, phoneNumberValidator()]]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.universiteForm.valid) {
      this.universiteService.addUniversite(this.universiteForm.value).subscribe(
          (result) => {
            console.log('Université ajoutée avec succès:', result);
            this.router.navigate(['/admin/universitedetail']);
          },
          (error) => {
            console.error('Erreur lors de l\'ajout de l\'université:', error);
          }
      );
    }
  }

  ngOnInit(): void {}
}
