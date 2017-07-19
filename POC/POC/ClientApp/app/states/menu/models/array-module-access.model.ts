import { ModuleAccessModel } from './module-access.model';

export const INITIAL_STATE = {
	moduleAccessModels: undefined
};
export class ArrayModuleAccessModel {
	constructor(public moduleAccessModels: ModuleAccessModel[]) {}
}
