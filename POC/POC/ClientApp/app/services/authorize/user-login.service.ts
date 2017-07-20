
import { UserLoginModel } from './../../models/user-login/user-login.model';
import {UserLoginStateModel} from '../../models/user-login/user-login-state.model'
import { TokenAuthModel } from "../../models/user-login/token-auth.model";
// Angular Dependencies
import { Http, Headers } from '@angular/http';
import { Injectable, Inject } from '@angular/core';

// Vendor
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class UserLoginService {
	constructor(private http: Http, @Inject('ORIGIN_URL') private originUrl: string) {}
	authorizeUser(userLoginModel: UserLoginModel): Observable<UserLoginStateModel> {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http
			.post('http://localhost:51150/api/APIAuthentication/AuthorizeUser/', userLoginModel, { headers: headers })
			.map((result) => result.json());
	}
	sessionUser(tokenId:TokenAuthModel):Observable<boolean>{
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		console.log(tokenId);
		return this.http
			.post('http://localhost:51150/api/APIAuthentication/SessionAuth/', tokenId, { headers: headers })
			.map((result) => result.json());
	}
}
