import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(UsuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
return this.http.post<UsuarioLogin>('http://localhost:8080/usuarios/logar', UsuarioLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
return this.http.post<Usuario>('http://localhost:8080/usuarios/cadastrar', usuario)
  }

  logado(){
    let ok: boolean = false

if(environment.token != ''){
  ok = true
}

    return ok
  }
}
