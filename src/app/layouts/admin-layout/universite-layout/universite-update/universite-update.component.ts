import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import { UniversiteService } from '../../../../services/universite-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Universite} from "../../../../models/universite";

function phoneNumberValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const phoneNumber = control.value;
        const isValid = /^\d{8}$/.test(phoneNumber);
        return isValid ? null : { 'invalidPhoneNumber': { value: control.value } };
    };
}

@Component({
    selector: 'app-universite-update',
    templateUrl: './universite-update.component.html',
    styleUrls: ['./universite-update.component.scss']
})
export class UniversiteUpdateComponent implements OnInit {
    universiteForm: FormGroup;
    submitted: boolean = false;
    universiteId: number;
    universite: Universite;
    cities: string[] = ['City1', 'City2', 'City3', '...']; // Ajoutez vos villes ici

    constructor(
        private fb: FormBuilder,
        private universiteService: UniversiteService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.universiteForm = this.fb.group({
            nomUniversite: ['', Validators.required],
            adresse: ['', Validators.required],
            ville: ['', Validators.required],
            telephone: ['', [Validators.required, this.phoneNumberValidator()]]
        });
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.universiteId = +params['id'];
            this.getUniversiteDetails();
        });
    }

    getUniversiteDetails() {
        this.universiteService.getUniversitebyID(this.universiteId).subscribe(
            (result) => {
                this.universite = result;
                this.universiteForm.patchValue({
                    nomUniversite: this.universite.nomUniversite,
                    adresse: this.universite.adresse,
                    ville: this.universite.ville,
                    telephone: this.universite.telephone
                });
            },
            (error) => {
                console.error('Erreur lors de la récupération des détails de l\'université:', error);
            }
        );
    }

    onSubmit() {
        this.submitted = true;

        if (this.universiteForm.valid) {
            this.universiteService.updateUniversite(this.universiteId, this.universiteForm.value).subscribe(
                (result) => {
                    console.log('Université mise à jour avec succès:', result);
                    this.router.navigate(['/admin/universitedetail']);
                },
                (error) => {
                    console.error('Erreur lors de la mise à jour de l\'université:', error);
                }
            );
        }
    }

    // Custom validator for phone number
    phoneNumberValidator() {
        return (control) => {
            const phoneNumber = control.value;
            const isValid = /^\d{8}$/.test(phoneNumber);
            return isValid ? null : { 'invalidPhoneNumber': { value: control.value } };
        };
    }

    // Check if a form field is invalid
    isFieldInvalid(field: string) {
        const control = this.universiteForm.get(field);
        return control.invalid && (control.dirty || control.touched || this.submitted);
    }

    // Get error message for telephone field
    getTelephoneErrorMessage() {
        const control = this.universiteForm.get('telephone');
        return control.hasError('required') ? 'Veuillez saisir le numéro de téléphone.' : 'Le numéro de téléphone doit contenir 8 chiffres.';
    }
}
