import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.cadastroForm = new FormGroup({
      nome : new FormControl(''),
      cpf : new FormControl(''),
      Email : new FormControl(''),
      Senha : new FormControl(''),
      SenhaConfirmacao : new FormControl('')
    });
  }

  adicionarUsuario(){
    let x = this.cadastroForm.value
  }

}
