import { CanActivateFn, Router } from '@angular/router';
import { AppInjector } from '../app.module';

export const authGuard: CanActivateFn = (route, state) => {
  // constructor(private _router: Router) {}
  const router = AppInjector.get(Router);

  if (!localStorage.getItem('usuarioLogado')) {
    router.navigate(['/login']);
  }

  return !!localStorage.getItem('usuarioLogado');
};


export const loginGuard: CanActivateFn = () => {
  if(localStorage.getItem('usuarioLogado')) {
    const router = AppInjector.get(Router);
    router.navigate(['/produtos']);
  };

  return true;
}