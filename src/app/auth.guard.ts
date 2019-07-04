import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/utils/preactivation';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  constructor(private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state:RouterStateSnapshot

  ):Observable<boolean> | Promise<boolean> | boolean{
  const loggedIn = Math.random()>0.5?true : false;
  if(!loggedIn){
    this.router.navigate(['/']);
  }
  return loggedIn
  }
}
