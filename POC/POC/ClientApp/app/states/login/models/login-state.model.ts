import { NOT_AUTHORIZED } from '../../../actions/login/login.action';

export const INITIAL_STATE = {
    UserName:undefined,
    GroupName:undefined,
    UserLoginState: NOT_AUTHORIZED,
    TokenId:undefined
}
export class LoginStateModel{
    constructor(
        public UserName:string,
        public GroupName:string,
        public UserLoginState:string,
        public TokenId:string
    ){}
}