import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { CadastroComponent } from "../demos/reactiveForms/cadastro/cadastro.component";

@Injectable()
export class CadastroGuard implements CanDeactivate<CadastroComponent>
{

    canDeactivate(component:CadastroComponent)
    {

        if(component.mudancaNaoSalvas)
        {
            return window.confirm('tem certeza que deseja sair do formulario')
        }
        return true;
    }

}
