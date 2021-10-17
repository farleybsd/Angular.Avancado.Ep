import { Component, OnInit } from '@angular/core';
import { BarService, BarServiceMock } from './bar.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  providers: [
    //{provide:BarService,useClass:BarServiceMock}
    {provide:BarService,useClass:BarService}
  ]
})
export class BarComponent  implements OnInit {

  barBebida1 : string;

  constructor(private barService:BarService) { }

  ngOnInit() {
    this.barBebida1 = this.barService.obterBebidas();
  }

}
