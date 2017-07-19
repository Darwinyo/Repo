import { Action } from '@ngrx/store';

import { INITIAL_STATE, ComponentsStateModel} from '../../states/components/components-state.model';
import * as ComponentsAccessAction from '../../actions/components/components-access.action'

export function ComponentsReducer(state: ComponentsStateModel = INITIAL_STATE, action: Action) {
	switch (action.type) {
		case ComponentsAccessAction.UPDATE:
			return Object.assign({}, state, action.payload);
		
		default:
			return state;
	}
}
