import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

import { LoginStateModel } from './states/login/models/login-state.model';

import * as LoginActions from './actions/login/login.action';

import { AUTHORIZED } from './actions/login/login.action';

import { UserLoginService } from './services/authorize/user-login.service';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit, OnDestroy, OnChanges {
	ngOnChanges(changes: SimpleChanges): void {
		this.authService.sessionUser(localStorage.getItem('tokenid').toString()).subscribe(
			(x) => (this.authToken = x),
			(err) => console.log(err),
			() => {
				if (this.authToken == true) {
					this.CheckUserToken(this.authToken);
				}
			}
		)
	}
	loginStateObservable: Observable<LoginStateModel>;
	loginState: LoginStateModel;
	userLogin: string = 'Anonymous';
	isLogged: boolean = false;
	private stateSubscription: Subscription;
	authToken: boolean = false;
	title = 'app';

	constructor(private store: Store<LoginStateModel>, private authService: UserLoginService) {
		this.loginStateObservable = this.store.select('login');
	}
	CheckUserToken(bool: boolean) {
		if (bool) {
			let sessionState: LoginStateModel = <LoginStateModel>{};
			sessionState.GroupName = localStorage.getItem('groupname');
			sessionState.UserName = localStorage.getItem('username');
			sessionState.UserLoginState = localStorage.getItem('userloginstate');
			sessionState.TokenId = localStorage.getItem('tokenid');
			this.store.dispatch({ type: LoginActions.LOAD_SESSION, payload: sessionState });
		}
	}
	ngOnInit(): void {
		this.authService.sessionUser(localStorage.getItem('tokenid').toString()).subscribe(
			(x) => (this.authToken = x),
			(err) => console.log(err),
			() => {
				if (this.authToken == true) {
					this.CheckUserToken(this.authToken);
				}
			}
		);
		this.stateSubscription = this.loginStateObservable.subscribe((result) => this.ValidateUserState(result));
	}
	ngOnDestroy(): void {}

	ValidateUserState(result: LoginStateModel) {
		if (result.UserLoginState === AUTHORIZED) {
			this.isLogged = true;
		}
		this.loginState = result;
		this.userLogin = result.UserName;
	}
}
