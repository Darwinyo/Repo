import { ModuleAccessService } from '../../../services/menu/module-access.service';
import { TreeModule, TreeNode } from 'primeng/primeng';

import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MenuModel } from '../../../models/menu/menu.model';
import { ComponentsReturnModel } from '../../../models/menu/components-return.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import * as ModuleActions from '../../../actions/menu/module-access.action';
import * as ComponentsActions from '../../../actions/components/components-access.action';
import { ComponentsStateModel } from '../../../states/components/components-state.model';
import { ModuleAccessModel } from '../../../states/menu/models/module-access.model';
import { LoginStateModel } from '../../../states/login/models/login-state.model';
import { Router } from '@angular/router';

@Component({
	selector: 'tree-view',
	templateUrl: './tree-view.component.html',
	providers: [ ModuleAccessService ]
})
export class TreeViewComponent implements OnInit, OnChanges {
	ngOnInit(): void {
		this.menu = <MenuModel[]>{};
		this.LoginSub = this.loginStateObservable.subscribe((x) => {
			if (x.UserLoginState !== 'AUTHORIZED') {
				this.router.navigateByUrl('/home');
			}
			this.grpName = x.GroupName;
		});
		this.ModuleService
			.GetModuleList()
			.subscribe((result) => (this.menu = result), (err) => console.log(err), () => this.AddNode(this.menu));
	}
	files: TreeNode[];
	selectedFile: TreeNode;
	menuList: MenuModel[];
	menu: MenuModel[];
	FetchMenuData() {}
	AddNode(newNode) {
		this.files = <TreeNode[]>{};
		this.files = newNode;
		this.menuList = <MenuModel[]>{};
		this.menuList = newNode;
	}
	nodeSelect(event) {
		let x: number = event.node.id;
		this.Route(x);
	}
	componentStore: Observable<ComponentsStateModel>;
	moduleStore: Observable<ModuleAccessModel>;

	ngOnChanges(changes: SimpleChanges): void {
		// for (let x in changes) {
		// 	let chg = changes[x];
		// 	let curr = JSON.stringify(chg.currentValue);
		// 	let prev = JSON.stringify(chg.previousValue);
		// 	console.log(chg + ' ' + curr + ' ' + prev);
		// }

		console.log('changed');
	}

	constructor(
		private ModuleService: ModuleAccessService,
		private ComponentsStore: Store<ComponentsStateModel>,
		private ModuleStore: Store<ModuleAccessModel>,
		private LoginStore: Store<LoginStateModel>,
		private router: Router
	) {
		this.componentStore = this.ComponentsStore.select('component');
		this.moduleStore = this.ModuleStore.select('module');
		this.loginStateObservable = this.LoginStore.select('login');
	}

	@Input() MenuList: MenuModel[];
	// @Output() AppId:EventEmitter<number>=new EventEmitter<number>();

	private LoginSub: Subscription;
	loginStateObservable: Observable<LoginStateModel>;
	grpName: string;

	Route(id: number) {
		let menuAccess: string;
		this.ModuleService
			.AuthorizeMenu(id, this.grpName)
			.subscribe((x) => (menuAccess = x), (err) => console.log(err), () => this.AccessMenu(menuAccess, id));
	}
	AccessMenu(menuAccess: string, id: number) {
		if (menuAccess == 'PERMITTED') {
			let URLString: string;
			let componentArray: ComponentsReturnModel[] = <ComponentsReturnModel[]>{};
			this.ModuleStore.dispatch({
				type: ModuleActions.PERMITTED,
				payload: { ModuleId: id, Permitted: ModuleActions.PERMITTED }
			});

			this.ModuleService.GetComponents(id, this.grpName).subscribe(
				(x) => (componentArray = x),
				(err) => console.log(err),
				() => {
					this.ComponentsStore.dispatch({
						type: ComponentsActions.UPDATE,
						payload: { ComponentArray: componentArray }
					});
					this.ModuleService
						.GetMenuURL(id)
						.subscribe(
							(x) => (URLString = x),
							(err) => console.log(err),
							() => this.RedirectUrl(URLString)
						);
				}
			);
		} else {
			this.ModuleStore.dispatch({
				type: ModuleActions.NOT_PERMITTED,
				payload: { Permitted: ModuleActions.NOT_PERMITTED }
			});
			alert('You are not Authorize to this Module');
		}
	}
	RedirectUrl(url: string) {
		this.router.navigateByUrl(url);
	}
}
