import { Component, Input,EventEmitter,Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import * as LoginActions from '../../actions/login/login.action';
import { LoginStateModel } from '../../states/login/models/login-state.model';
import { LoginReducer } from '../../reducers/login/login.reducer';

import { UserLoginStateModel } from '../../models/user-login/user-login-state.model';
@Component({
	selector: 'nav-menu',
	templateUrl: './navmenu.component.html',
	styleUrls: [ './navmenu.component.scss' ]
})
export class NavMenuComponent {
	@Output() Logout=new EventEmitter<boolean>();
	userState: Observable<LoginStateModel>;
	constructor(private store: Store<LoginStateModel>) {
		this.userState = this.store.select('login');
	}
	@Input() userName: string;
	SignOut() {
		let user: UserLoginStateModel = <UserLoginStateModel>{};
		user.GroupName = null;
		user.TokenId = null;
		user.UserLoginState = LoginActions.NOT_AUTHORIZED;
		user.UserName = null;
		localStorage.clear();
		this.Logout.emit(false);
		this.store.dispatch({ type: LoginActions.NOT_AUTHORIZED, payload: user });
	}
}
