import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-foyerdetailview',
  templateUrl: './foyerdetailview.component.html',
  styleUrls: ['./foyerdetailview.component.scss']
})
export class FoyerdetailviewComponent implements OnInit {

  constructor() { }
  @Input()
  totalFoyers!: number;
  @Input()
  averageCapacity!: number;

  ngOnInit(): void {
  }

}
