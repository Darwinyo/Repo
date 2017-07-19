import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components

// Container-Dumb
import { LoginComponent } from "../containers/dumb/login/login.component";

// Const
import { userRoutes } from '../consts/user-route.const';

@NgModule({
	imports: [ RouterModule.forChild(userRoutes) ],
	exports: [ RouterModule ]
})
export class UserRoutingModule {}
