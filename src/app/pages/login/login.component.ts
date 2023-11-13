import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public ehLogin: boolean = true;
  public loginFormGroup!: FormGroup;

  constructor(private _fb: FormBuilder, private _router: Router) {
    this.initForm();
  }

  public initForm(): void {
    this.loginFormGroup = this._fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  public loginToogle(): void {
    this.ehLogin = !this.ehLogin;
  }

  public loginClickHandler(): void {
    this.loginFormGroup.markAllAsTouched();

    if (!this.loginFormGroup.valid) {
      alert('Formulário inválido');
      return;
    }

    const { username, password } = this.loginFormGroup.value;
    if (this.ehLogin) {

      const senhaUsuario = localStorage.getItem(username.toLocaleUpperCase());
      if(senhaUsuario === password) {
        localStorage.setItem('usuarioLogado', username);
        this._router.navigate(['/produtos']);
      } else {
        alert('Usuário ou senha inválida');
      }
    } else {
      localStorage.setItem(String(username).toLocaleUpperCase(), password);
      this.loginFormGroup.reset();
      alert('Usuário criado com sucesso');
      this.ehLogin = true;
    }
  }
}
