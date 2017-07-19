// Temporary
// Container-Dumb
import { LoginComponent } from './containers/dumb/login/login.component';

// Container-Smart
import { UserComponent } from './containers/smart/user/user.component';
import { VDGeneralInfoComponent } from "./containers/smart/viewDetails/general-info.component";
import { MPGeneralInfoComponent } from "./containers/smart/manageProposal/general-info.component";
import { MAGeneralInfoComponent } from "./containers/smart/manageApproval/general-info.component";
// services
import { UserLoginService } from './services/authorize/user-login.service';
//

// Components
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { SideNavMenuComponent } from "./components/sidenavmenu/sidenavmenu.component";

// Container-Dumb
import { HomeComponent } from './containers/dumb/home/home.component';
import { PageNotFoundComponent } from './containers/dumb/page-not-found/page-not-found.component';
import { TreeViewComponent } from "./containers/dumb/tree-view/tree-view.component";
import { TreeComponent } from "./containers/smart/tree/tree.component";

// Module
import { AppRoutingModule } from './routes/app-route.module';
// import { UserModule } from './modules/user.module';

// Reducers
import { LoginReducer } from './reducers/login/login.reducer';
import { ComponentsReducer } from "./reducers/components/components.reducer";
import { ModuleReducer } from "./reducers/menu/module-access.reducer";

// Const

// Third-Party
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {TreeModule} from 'primeng/primeng';

// Angular Dependencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		// Container-Dumb
		LoginComponent,

		// Container-Smart
		UserComponent,

		AppComponent,

		//Components
		NavMenuComponent,
		SideNavMenuComponent,
		
		// Container-Dumb
		HomeComponent,
		PageNotFoundComponent,
		TreeComponent,
		TreeViewComponent,
		VDGeneralInfoComponent,
		MAGeneralInfoComponent,
		MPGeneralInfoComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		TreeModule,
		StoreModule.provideStore({ 'login': LoginReducer,'component':ComponentsReducer,'module':ModuleReducer }),
		StoreDevtoolsModule.instrumentOnlyWithExtension({}),
		// UserModule,
		HttpModule,
		AppRoutingModule
	],
	providers: [ { provide: 'ORIGIN_URL', useValue: location.origin }, UserLoginService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
