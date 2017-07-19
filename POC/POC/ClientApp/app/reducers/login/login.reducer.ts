import { Action } from '@ngrx/store';

import { INITIAL_STATE, LoginStateModel } from '../../states/login/models/login-state.model';
import * as LoginActions from '../../actions/login/login.action';

export function LoginReducer(state: LoginStateModel = INITIAL_STATE, action: Action) {
	switch (action.type) {
		case LoginActions.AUTHORIZED:
			return Object.assign({}, state, action.payload);

		case LoginActions.NOT_AUTHORIZED:
			return Object.assign({}, state, action.payload);
		case LoginActions.LOAD_SESSION:
			return Object.assign({}, state, action.payload);
		default:
			return state;
	}
}
