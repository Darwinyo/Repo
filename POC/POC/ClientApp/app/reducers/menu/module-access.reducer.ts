import { Action } from '@ngrx/store';

import { INITIAL_STATE, ModuleAccessModel } from '../../states/menu/models/module-access.model';
import * as ModuleAccessActions from '../../actions/menu/module-access.action';

export function ModuleReducer(state: ModuleAccessModel = INITIAL_STATE, action: Action) {
	switch (action.type) {
		case ModuleAccessActions.PERMITTED:
			return Object.assign({}, state, action.payload);
			
		case ModuleAccessActions.NOT_PERMITTED:
			return Object.assign({}, state, action.payload);
		default:
			return state;
	}
}
