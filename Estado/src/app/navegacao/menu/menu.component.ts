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
      link:'/cadastro',
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
      link:'/produtos',
      name: 'Produto',
      exact:false,
      admim:false
    },
    {
      link: '/filmes',
      name: 'Filmes',
      exact: false,
      admim: false
    },
    {
      link: '/admin',
      name: 'Admin',
      exact: false,
      admim: false
    },
    {
      link: '/bar',
      name: 'Bar',
      exact: false,
      admim: false
    },
    {
      link: '/todo',
      name: 'To Do',
      exact: false,
      admim: false
    },
  ]
}

interface Nav{
  link:string,
  name: string,
  exact: boolean,
  admim: boolean
}
