import { Component, OnInit } from '@angular/core';
import { FoyerService } from 'app/services/foyer-service.service';
import { Foyer } from 'app/models/foyer';

@Component({
  selector: 'app-foyerdetail',
  templateUrl: './foyerdetail.component.html',
  styleUrls: ['./foyerdetail.component.scss'],
})
export class FoyerdetailComponent implements OnInit {
  constructor(private foyerservices: FoyerService) {}

  foyer: Foyer[] = [];
  searchTerm: string = '';
  sortKey: string = 'capaciteFoyer';
  sortReverse: boolean = false;

  total: number = 0;
  average: number = 0;
  p: number = 1;
  itemsPerPage: number = 2;

  ngOnInit(): void {
    this.loadFoyer();
  }

  loadFoyer(): void {
    this.foyerservices.getAllFoyer().subscribe((data) => {
      this.foyer = data;
      console.log(data);
      this.updateStatistics();
    });
  }

  deleteFoyer(id: number) {
    this.foyerservices.deleteFoyer(id).subscribe(
      () => {
        console.log('Foyer deleted successfully.');
        this.loadFoyer();
      },
      (error) => {
        console.error('Error deleting foyer:', error);
      }
    );
  }

  sortTable(key: string) {
    if (this.sortKey === key) {
      this.sortReverse = !this.sortReverse;
    } else {
      this.sortKey = key;
      this.sortReverse = false;
    }
  }

  filterAndSortFoyers() {
    return this.foyer
      .filter((f) =>
        f.nomFoyer.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        const x = a[this.sortKey];
        const y = b[this.sortKey];
        return this.sortReverse ? y - x : x - y;
      });
  }

  updateStatistics() {
    this.total = this.foyer.length;

    const totalCapacity = this.foyer.reduce(
      (sum, foyer) => sum + foyer.capaciteFoyer,
      0
    );

    this.average =
      this.total > 0 ? totalCapacity / this.total : 0;
  }
}
