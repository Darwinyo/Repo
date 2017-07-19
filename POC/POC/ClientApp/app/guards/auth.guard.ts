import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserLoginService } from '../services/authorize/user-login.service';

@Injectable()
export class AuthGuard implements CanActivate {
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): boolean | Observable<boolean> | Promise<boolean> {
		if (localStorage.getItem('tokenid')) {
			if (this.authService.sessionUser(localStorage.getItem('tokenid'))) {
				return true;
			}
			return false;
		} else {
			this.router.navigate([ '/home' ]);
			return false;
		}
	}
	constructor(private router: Router, private authService: UserLoginService) {}
}
