import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ouput',
  templateUrl: './ouput.component.html',
  styleUrls: ['./ouput.component.scss']
})
export class OuputComponent implements OnInit {

  constructor() {}

  @Output() 
  gobackEmitter = new EventEmitter();


  goBack() {
      this.gobackEmitter.emit();
  }

  ngOnInit(): void {
  }

}
