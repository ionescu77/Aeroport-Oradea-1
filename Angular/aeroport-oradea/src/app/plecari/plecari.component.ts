import { Component, OnInit, Input } from '@angular/core';
import { PlecariClass } from '../Classes/plecari-class';
import { PlecariService } from '../services/plecari.service';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-plecari',
  templateUrl: './plecari.component.html',
  styleUrls: ['./plecari.component.css']
})
export class PlecariComponent implements OnInit {

  titlu = "Plecari - Departures";


  lstPlecari:PlecariClass[];

  constructor(private apiPlecari: PlecariService,) {
    
   }

  ngOnInit() {
    interval(5000)
    .pipe(
      startWith(0),
      switchMap(() =>this.apiPlecari.getApi())
    )
    console.log(this.apiPlecari.getApi())
    this.apiPlecari.getApi()
   .subscribe(
     data => {
       this.lstPlecari = data
       console.log(data)
     }
   ) 
  }
}

