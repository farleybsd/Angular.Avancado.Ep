import { HttpClient } from '@angular/common/http';
import { Component, Inject, Injector, OnInit } from '@angular/core';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';
import { BarFactory, BarService, BarServiceMock, BebidasService } from './bar.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  providers: [
    //{provide:BarService,useClass:BarServiceMock}
    //{provide:BarService,useClass:BarService},
    {
      provide:BarService,useFactory:BarFactory,
      deps:[
        //HttpClient,
        Injector
      ]
    },
    {provide:BebidasService , useExisting:BarService}
  ]
})
export class BarComponent  implements OnInit {

  ConfigManual: BarUnidadeConfig;
  Config: BarUnidadeConfig;
  barBebida1 : string;
  barBebida2 : string;
  dadosUnidade:string;

  constructor(
    private barService:BarService,
    @Inject('ConfigManualUnidade') private ApiConfigManual: BarUnidadeConfig,
    @Inject(BAR_UNIDADE_CONFIG) private ApiConfig: BarUnidadeConfig,
    private bebidaService: BebidasService
    ) { }

  ngOnInit() {
    this.barBebida1 = this.barService.obterBebidas();
    this.ConfigManual = this.ApiConfigManual;
    this.Config = this.ApiConfig;
    this.dadosUnidade = this.barService.ObterUnidade();
    this.barBebida2 = this.bebidaService.obterBebidas();
  }

}
