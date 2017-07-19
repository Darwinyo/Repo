import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserLoginModel } from '../../../models/user-login/user-login.model';
import { UserLoginStateModel } from '../../../models/user-login/user-login-state.model';

import { UserLoginService } from '../../../services/authorize/user-login.service';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	providers: [ UserLoginService ]
})
export class LoginComponent {
	@Output() SubmitUserLoginEvent: EventEmitter<UserLoginStateModel>=new EventEmitter<UserLoginStateModel>();
	userLoginStateModel: UserLoginStateModel;

	constructor(private userLoginService: UserLoginService) {}
	SubmitUserLogin(form: NgForm) {
		let userLoginModel = <UserLoginModel>{};
		userLoginModel.userName = form.value['name'];
		userLoginModel.password = form.value['password'];
		this.userLoginService.authorizeUser(userLoginModel).subscribe(
			(result) =>
				(this.userLoginStateModel = result),
			(err) => console.log(err),
			() => {
				this.SubmitUserLoginEvent.emit(this.userLoginStateModel);
			}
		);
	}
}
