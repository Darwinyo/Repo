import { Routes } from '@angular/router';

// Container-Dumb
import { HomeComponent } from '../containers/dumb/home/home.component';
import { PageNotFoundComponent } from '../containers/dumb/page-not-found/page-not-found.component';
import { TreeViewComponent } from '../containers/dumb/tree-view/tree-view.component';
import { VDGeneralInfoComponent } from '../containers/smart/viewDetails/general-info.component';
import { MPGeneralInfoComponent } from '../containers/smart/manageProposal/general-info.component';
import { MAGeneralInfoComponent } from '../containers/smart/manageApproval/general-info.component';

import { AuthGuard } from '../guards/auth.guard';
export const appRoutes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'tree', component: TreeViewComponent, canActivate: [ AuthGuard ] },
	{ path: 'ma-general-info', component: MAGeneralInfoComponent, canActivate: [ AuthGuard ] },
	{ path: 'vd-general-info', component: VDGeneralInfoComponent, canActivate: [ AuthGuard ] },
	{ path: 'mp-general-info', component: MPGeneralInfoComponent, canActivate: [ AuthGuard ] },
	//   {
	//     path: 'heroes',
	//     component: HeroListComponent,
	//     data: { title: 'Heroes List' }
	//   },
	//   { path: '',
	//     redirectTo: '/heroes',
	//     pathMatch: 'full'
	//   },
	{ path: '**', component: PageNotFoundComponent }
];
