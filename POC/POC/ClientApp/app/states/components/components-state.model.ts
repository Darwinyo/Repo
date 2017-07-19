import * as ComponentActions from "../../actions/components/components-access.action";
import { ComponentModel } from "./component.model";

export const INITIAL_STATE={
    ComponentArray:undefined
}
export class ComponentsStateModel{
    constructor(
        public ComponentArray:ComponentModel[]
    ){}
}
