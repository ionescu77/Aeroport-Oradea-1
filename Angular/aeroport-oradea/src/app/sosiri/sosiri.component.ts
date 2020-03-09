import { Component, OnInit, Input } from '@angular/core';
import { Title } from '../title.model';

@Component({
  selector: 'app-sosiri',
  templateUrl: './sosiri.component.html',
  styleUrls: ['./sosiri.component.css']
})
export class SosiriComponent implements OnInit {
  titlu = 'Sosiri - Arrivals';

  constructor() {
    setInterval(() => {
      this.currentDate = new Date();
    }, 1);
   }

  ngOnInit(): void {
  }
  currentDate = new Date();

}
