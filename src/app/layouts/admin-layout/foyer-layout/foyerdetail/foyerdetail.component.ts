import { Component, OnInit } from '@angular/core';
import { FoyerService } from 'app/services/foyer-service.service';
import { Foyer} from 'app/models/foyer';

@Component({
  selector: 'app-foyerdetail',
  templateUrl: './foyerdetail.component.html',
  styleUrls: ['./foyerdetail.component.scss']
})
export class FoyerdetailComponent implements OnInit {
  constructor(private foyerservices : FoyerService) 
  
  { }

  foyer: Foyer[]=[];

  ngOnInit(): void {
    this.loadFoyer();
  }

  loadFoyer(): void {
    this.foyerservices.getAllFoyer().subscribe(data => {
      this.foyer = data;
      console.log(data);
    });
}
deleteFoyer(id: number) {
  this.foyerservices.deleteFoyer(id).subscribe(
    () => {
      console.log('Foyer deleted successfully.');
      // Optionally, reload the foyers after deletion
      this.loadFoyer();
    },
    (error) => {
      console.error('Error deleting foyer:', error);
      // Handle errors here
    }
  );
}

}
