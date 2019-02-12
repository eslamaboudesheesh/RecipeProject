import { Injectable } from '@angular/core';
import { CanActivate , RouterStateSnapshot , ActivatedRouteSnapshot } from '@angular/router';
import { from } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authserv: AuthService ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       return this.authserv.isAuth();
  }
}
