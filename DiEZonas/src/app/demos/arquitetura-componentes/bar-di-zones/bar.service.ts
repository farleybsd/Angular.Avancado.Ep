import { Inject, Injectable, Injector } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from "./bar.config";

export function BarFactory(/*http: HttpClient,*/injector:Injector){
    return new BarService(/*http,*/injector.get(BAR_UNIDADE_CONFIG));
}
@Injectable()
export class BarService{

    constructor(
        //private http: HttpClient,
        @Inject(BAR_UNIDADE_CONFIG) private config : BarUnidadeConfig
        ) {}

    public ObterUnidade() : string{
        return 'UnidadeId' + this.config.UnidadeId + 'Token' + this.config.unidadeToken
    }    
    obterBebidas() : string{
        return 'Bebidasss';
    }

    obterPorcoes() : string{
        return 'Porcoes';
    }

    obterRefeicoes() : string{
        return 'Refeicoes';
    }
}

export class BarServiceMock{

    obterBebidas() : string{
        return 'Mock';
    }

    obterPorcoes() : string{
        return 'Mock';
    }

    obterRefeicoes() : string{
        return 'Mock';
    }
}

export abstract class BebidasService {
   
   obterBebidas :() => string     
    
}