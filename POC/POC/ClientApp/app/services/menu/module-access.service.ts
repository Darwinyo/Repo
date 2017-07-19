// Angular Dependencies
import { Http, Headers } from '@angular/http';
import { Injectable, Inject} from '@angular/core';

// Vendor
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';


// Models
import { MenuModel } from '../../models/menu/menu.model';
import { MenuGroupAuthorizeModel } from '../../models/menu/menu-group-authorize.model';
import { ComponentsFetchModel } from '../../models/menu/components-fetch.model';
import { ComponentsReturnModel } from '../../models/menu/components-return.model';
import { DataFilterModel } from "../../models/menu/data-filter.model";


@Injectable()
export class ModuleAccessService{
	
	constructor(private http: Http) {
	}

	GetModuleList(): Observable<MenuModel[]> {
		let headers = new Headers();
		headers.append('Access-Control-Allow-Headers', 'origin, content-type, accept');
		headers.append('Access-Control-Allow-Methods', 'GET');
		headers.append('Access-Control-Allow-Origin', '*');
		return this.http
			.get('http://localhost:57973/api/APIModule/GetERPModule/', { headers: headers })
			.map((result) => result.json());
	}
	AuthorizeMenu(appId: number,grpName:string): Observable<string> {
		let menuGroupAuth: MenuGroupAuthorizeModel = <MenuGroupAuthorizeModel>{};
		menuGroupAuth.AppId = appId;
		menuGroupAuth.GroupName = grpName;
		let headers: Headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('Access-Control-Allow-Headers', 'origin, content-type, accept');
		headers.append('Access-Control-Allow-Methods', '*');
		headers.append('Access-Control-Allow-Origin', '*');

		return this.http
			.post('http://localhost:57973/api/APIModule/CheckAccessMenu/', menuGroupAuth, { headers: headers })
			.map((x) => x.json());
	}
	GetMenuURL(appId: number): Observable<string> {
		let headers: Headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('Access-Control-Allow-Headers', 'origin, content-type, accept');
		headers.append('Access-Control-Allow-Methods', '*');
		headers.append('Access-Control-Allow-Origin', '*');

		return this.http
			.post('http://localhost:57973/api/APIModule/GetURLMenu/', appId, { headers: headers })
			.map((x) => x.json());
	}
	GetComponents(ParentId: number,grpName:string): Observable<ComponentsReturnModel[]> {
		let headers: Headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('Access-Control-Allow-Headers', 'origin, content-type, accept');
		headers.append('Access-Control-Allow-Methods', '*');
		headers.append('Access-Control-Allow-Origin', '*');
		let componentModel: ComponentsFetchModel = <ComponentsFetchModel>{};
		componentModel.ParentId = ParentId;
		componentModel.GroupName = grpName;
		return this.http
			.post('http://localhost:57973/api/APIModule/GetComponents/', componentModel, { headers: headers })
			.map((x) => x.json());
	}
	GetWorkFlowDPTFOOD():Observable<DataFilterModel[]>{
		let headers = new Headers();
		headers.append('Access-Control-Allow-Headers', 'origin, content-type, accept');
		headers.append('Access-Control-Allow-Methods', 'GET');
		headers.append('Access-Control-Allow-Origin', '*');
		return this.http
			.get('http://localhost:57973/api/APIModule/GetWorkFlowDPTFOOD/', { headers: headers })
			.map((result) => result.json());
	}
	GetWorkFlowDIVBUYER():Observable<DataFilterModel[]>{
		let headers = new Headers();
		headers.append('Access-Control-Allow-Headers', 'origin, content-type, accept');
		headers.append('Access-Control-Allow-Methods', 'GET');
		headers.append('Access-Control-Allow-Origin', '*');
		return this.http
			.get('http://localhost:57973/api/APIModule/GetWorkFlowDIVBUYER/', { headers: headers })
			.map((result) => result.json());
	}
	GetDataFilter(ParentId: number,grpName:string): Observable<DataFilterModel[]> {
		let headers: Headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('Access-Control-Allow-Headers', 'origin, content-type, accept');
		headers.append('Access-Control-Allow-Methods', '*');
		headers.append('Access-Control-Allow-Origin', '*');
		let componentModel: ComponentsFetchModel = <ComponentsFetchModel>{};
		componentModel.ParentId = ParentId;
		componentModel.GroupName = grpName;
		return this.http
			.post('http://localhost:57973/api/APIModule/GetFilter/', componentModel, { headers: headers })
			.map((x) => x.json());
	}
}
