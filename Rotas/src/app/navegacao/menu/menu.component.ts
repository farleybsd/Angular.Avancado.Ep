import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  nav : Nav[] =[
    {
      link:'/home',
      name: 'Home',
      exact:true,
      admim:false
    },
    {
      link:'/Cadastro',
      name: 'Cadastro',
      exact:true,
      admim:false
    },
    {
      link:'/sobre',
      name: 'Sobre',
      exact:true,
      admim:false
    },
    {
      link:'/produto',
      name: 'Produto',
      exact:true,
      admim:false
    }
  ]
}

interface Nav{
  link:string,
  name: string,
  exact: boolean,
  admim: boolean
}
