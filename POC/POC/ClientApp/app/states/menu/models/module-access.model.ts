import * as ModuleAccessAction from '../../../actions/menu/module-access.action';

export const INITIAL_STATE={
    ModuleId:undefined,
    Permitted:ModuleAccessAction.NOT_PERMITTED
}
export class ModuleAccessModel{
    constructor(
        public ModuleId:number,
        public Permitted:string
    ){}
}
