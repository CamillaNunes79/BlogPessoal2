import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

Usuario: Usuario = new Usuario
confirmarSenha: string
tipoUser: string

  constructor() { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event: any) {
this.confirmarSenha = event.target.value
  }

tipoUsuario(event: any) {
this.tipoUser = event.target.value
}

cadastrar() {
this.Usuario.tipo = this.tipoUsuario
}

}
