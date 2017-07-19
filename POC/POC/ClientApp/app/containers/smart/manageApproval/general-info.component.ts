import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ModuleAccessService } from '../../../services/menu/module-access.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

import { LoginStateModel } from '../../../states/login/models/login-state.model';
import { DataFilterModel } from '../../../models/menu/data-filter.model';
import { AUTHORIZED } from '../../../actions/login/login.action';
import { PERMITTED } from '../../../actions/menu/module-access.action';
import { ComponentsStateModel } from '../../../states/components/components-state.model';
import { ModuleAccessModel } from '../../../states/menu/models/module-access.model';
import { YES, NO } from '../../../actions/components/components-access.action';
import { NgForm } from '@angular/forms';
@Component({
	selector: 'ma-general-info',
	templateUrl: './general-info.component.html',
	providers: [ ModuleAccessService ],
	styleUrls: [ './general-info.component.scss' ]
})
export class MAGeneralInfoComponent implements OnInit, OnChanges {
	ngOnChanges(changes: SimpleChanges): void {
		console.log(changes);
	}
	ngOnInit(): void {
		this.componentSub = this.componentState.subscribe((x) => {
			this.moduleSub = this.moduleState.subscribe((y) => {
				if (y.Permitted !== 'PERMITTED') {
					this.router.navigateByUrl('/tree');
				}
				this.CreateModuleModel(y);
				console.log('ModuleStoreSubscription');
				this.loginSub = this.loginState.subscribe((z) => {
					if (z.UserLoginState !== 'AUTHORIZED') {
						this.router.navigateByUrl('/home');
					}
					this.loginModel = z;
					this.ValidateUserState(z, y);
					console.log('LoginStoreSubscription');
				});
			});
			console.log('componentStoreSubscription');
			this.CreateComponentObj(x);
		});
	}
	SKUSearch(SKUform: NgForm) {
		if (SKUform.value['srch-term'] == '') {
			this.datafilterArray = this.dataPure;
		} else {
			this.datafilterArray = this.dataPure.filter((x) => x.SKU == SKUform.value['srch-term']);
		}
	}
	ProductSearch(Productform: NgForm) {
		if (Productform.value['srch-term'] == '') {
			this.datafilterArray = this.dataPure;
		} else {
			this.datafilterArray = this.dataPure.filter((x) => x.ProductName == Productform.value['srch-term']);
		}
	}
	StatusSearch(Statusform: NgForm) {
		if (Statusform.value['srch-term'] == '') {
			this.datafilterArray = this.dataPure;
		} else {
			this.datafilterArray = this.dataPure.filter((x) => x.ApprovalStatus == Statusform.value['srch-term']);
		}
	}
	loginModel: LoginStateModel;
	loginState: Observable<LoginStateModel>;
	componentState: Observable<ComponentsStateModel>;
	moduleState: Observable<ModuleAccessModel>;
	componentObj: ComponentsStateModel;
	loginSub: Subscription;
	moduleSub: Subscription;
	moduleModel: ModuleAccessModel;
	GrpName: string;
	AppID: number;
	componentSub: Subscription;
	datafilterArray: DataFilterModel[];
	dataPure: DataFilterModel[];
	btnRejectActivated: boolean = false;
	btnApproveActivated: boolean = false;
	btnDetailsActivated: boolean = false;
	btnApprovalActivated: boolean = false;
	constructor(
		private moduleAccessService: ModuleAccessService,
		private componentStore: Store<ComponentsStateModel>,
		private loginStore: Store<LoginStateModel>,
		private moduleStore: Store<ModuleAccessModel>,
		private router: Router
	) {
		this.datafilterArray = [];
		this.loginState = this.loginStore.select('login');
		this.moduleState = this.moduleStore.select('module');
		this.componentState = this.componentStore.select('component');
	}
	CreateComponentObj(x: ComponentsStateModel) {
		this.componentObj = <ComponentsStateModel>{};
		this.componentObj.ComponentArray = x.ComponentArray;
		this.componentObj.ComponentArray.forEach((x) => this.MappingComponent(x.appStructTypId, x.IsAuthorized));
	}
	MappingComponent(name: string, Activate: string) {
		switch (name) {
			case 'General Info - MA - btnApprove':
				console.log('btnApprove');
				if (Activate === YES) {
					this.btnApproveActivated = true;
					console.log(this.btnApprovalActivated.valueOf);
					break;
				}
				this.btnApproveActivated = false;
				break;
			case 'General Info - MA - btnReject':
				console.log('btnReject');
				if (Activate === YES) {
					this.btnRejectActivated = true;
					console.log(this.btnRejectActivated.valueOf);
					break;
				}
				this.btnRejectActivated = false;
				break;
			case 'General Info - MA - btnDetails':
				console.log('btnDetail');
				if (Activate === YES) {
					this.btnDetailsActivated = true;
					console.log(this.btnDetailsActivated.valueOf);
					break;
				}
				this.btnDetailsActivated = false;
				break;
			case 'General Info - MA - btnApprovalHistory':
				console.log('btnHistory');
				if (Activate === YES) {
					this.btnApprovalActivated = true;
					console.log(this.btnApprovalActivated.valueOf);
					break;
				}
				this.btnApprovalActivated = false;
				break;
			default:
				break;
		}
	}
	CreateModuleModel(x: ModuleAccessModel) {
		this.moduleModel = <ModuleAccessModel>{};
		this.moduleModel = x;
	}
	getDataFilter(parentId: number, GrpName: string) {
		console.log('getdateFilterCalled');
		if (this.loginModel.GroupName === 'DIVBUYER') {
			console.log('DivBuyerService');
			this.moduleAccessService.GetWorkFlowDIVBUYER().subscribe(
				(x) => (this.datafilterArray = x),
				(err) => console.log(err),
				() => (this.dataPure = this.datafilterArray)
			);
		} else if (this.loginModel.GroupName === 'DPTFOOD') {
			console.log('DptFoodService');
			this.moduleAccessService
				.GetWorkFlowDPTFOOD()
				.subscribe(
					(x) => (this.datafilterArray = x),
					(err) => console.log(err),
					() => (this.dataPure = this.datafilterArray)
				);
		}
	}
	ValidateUserState(result: LoginStateModel, moduleAccessModel: ModuleAccessModel) {
		if (result.UserLoginState === AUTHORIZED) {
			console.log('validateUserAuth');
			if (moduleAccessModel.Permitted === PERMITTED) {
				console.log('validateUserModulePermitted');
				this.getDataFilter(this.moduleModel.ModuleId, result.GroupName);
			} else {
				this.router.navigateByUrl('/tree');
			}
		} else {
			this.router.navigateByUrl('/home');
		}
	}
}
