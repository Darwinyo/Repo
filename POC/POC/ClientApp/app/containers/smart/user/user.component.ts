import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import * as LoginActions from '../../../actions/login/login.action';

// Redux Store
import { LoginStateModel } from '../../../states/login/models/login-state.model';

// AppModel
import { UserLoginStateModel } from '../../../models/user-login/user-login-state.model';
@Component({
	selector: 'user',
	templateUrl: './user.component.html'
})
export class UserComponent {
	userState: Observable<LoginStateModel>;

	constructor(private store: Store<LoginStateModel>) {
		this.userState = this.store.select('login');
	}
	UserLoginState: UserLoginStateModel;
	SubmitUserLoginEventHandler(userLoginState: UserLoginStateModel) {
		if (userLoginState.UserLoginState === LoginActions.AUTHORIZED) {
			this.store.dispatch({ type: LoginActions.AUTHORIZED, payload:userLoginState });
			this.StoreUserSession(userLoginState);
		}
		else if (userLoginState.UserLoginState === LoginActions.NOT_AUTHORIZED) {
			this.store.dispatch({ type: LoginActions.NOT_AUTHORIZED,payload:userLoginState });
			this.StoreUserSession(userLoginState);
			alert('Not Authorized');
		}
	}
	StoreUserSession(userLoginState:UserLoginStateModel){
		localStorage.clear();
		localStorage.setItem('tokenid',userLoginState.TokenId);
		localStorage.setItem('username',userLoginState.UserName);
		localStorage.setItem('groupname',userLoginState.GroupName);
		localStorage.setItem('userloginstate',userLoginState.UserLoginState);
	}
}
