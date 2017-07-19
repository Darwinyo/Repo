import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { NavMenuComponent } from '../components/navmenu/navmenu.component';

// Container-Dumb
import { HomeComponent } from '../containers/dumb/home/home.component';
import { PageNotFoundComponent } from '../containers/dumb/page-not-found/page-not-found.component';

// Const
import { appRoutes } from '../consts/route.const';

@NgModule({
	imports: [ RouterModule.forRoot(appRoutes,{enableTracing:true}) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
