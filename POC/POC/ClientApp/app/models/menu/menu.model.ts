export interface MenuModel{
    id:number;
    name:string;
    AppStructType:string;
    AppValues:string;
    ParentApp?:number;
    MenuLevel:number;
    children:MenuModel[];
}