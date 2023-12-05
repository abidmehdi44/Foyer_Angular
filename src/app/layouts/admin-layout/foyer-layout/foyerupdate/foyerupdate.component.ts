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
  foyer: Foyer 

  constructor(private foyerService: FoyerService, private router: Router,private route : ActivatedRoute) {}

  onSubmit() {
    this.foyerService.updateFoyer(this.foyer.idFoyer,this.foyer).subscribe(
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

  getFoyerbyID(id: number){
    this.foyerService.getFoyerbyID(id).subscribe(
      (result) => {
        this.foyer = result
        
      },
    );


  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getFoyerbyID(params['id'])
    });
  }
  
}
