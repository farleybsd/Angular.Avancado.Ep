import { HttpClient } from '@angular/common/http';
import { Component, Inject, Injector, NgZone, OnInit } from '@angular/core';
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
  [x: string]: any;

  ConfigManual: BarUnidadeConfig;
  Config: BarUnidadeConfig;
  barBebida1 : string;
  barBebida2 : string;
  dadosUnidade:string;

  constructor(
    private barService:BarService,
    @Inject('ConfigManualUnidade') private ApiConfigManual: BarUnidadeConfig,
    @Inject(BAR_UNIDADE_CONFIG) private ApiConfig: BarUnidadeConfig,
    private bebidaService: BebidasService,
    private ngZone :NgZone
    ) { }

  ngOnInit() {
    this.barBebida1 = this.barService.obterBebidas();
    this.ConfigManual = this.ApiConfigManual;
    this.Config = this.ApiConfig;
    this.dadosUnidade = this.barService.ObterUnidade();
    this.barBebida2 = this.bebidaService.obterBebidas();
  }

/*
* Testando As Zonas do Angular
* Angular nao ira Monitar porque
* Porque esta Fora da sua zona
* Processamento Muito Pesado Fazer Fora da Zona do Angular
*/

public progress:number;
public label:string;

processWithAngularZone(){
  this.label = 'Dentro';
  this.progress =0;
  this._increaseProgress(()=>console.log('Finalizado Por Dentro Do Angular!'))
}

processOutsideOfAngularZone() {
  this.label = 'fora';
  this.progress = 0;
  this.ngZone.runOutsideAngular(() => {
    this._increaseProgress(() => {
      this.ngZone.run(() => { console.log('Finalizado fora!'); });
    });
  });
}

_increaseProgress(doneCallback: () => void){

 this.progress +=1;
 console.log(`Progresso atual: ${this.progress}%` );

 if(this.progress < 100){
   window.setTimeout(()=> this._increaseProgress(doneCallback),10);
 } else{
   doneCallback();
 }
}

}
