import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Usuario } from './models/Usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;
  usuario : Usuario;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.cadastroForm =  this.fb.group({
      nome : [''],
      cpf :  [''],
      Email :[''],
      Senha :[''],
      SenhaConfirmacao : ['']
    });
  }

  adicionarUsuario(){
    this.usuario = Object.assign({},this.usuario,this.cadastroForm.value);
  }

}
