import { Routes } from "@angular/router";

// Container-Dumb
import { LoginComponent } from '../containers/dumb/login/login.component';
import { UserComponent } from "../containers/smart/user/user.component";

export const userRoutes: Routes = [
  {path:'',component:UserComponent},
  { path: 'login', component: LoginComponent }
//   {
//     path: 'heroes',
//     component: HeroListComponent,
//     data: { title: 'Heroes List' }
//   },
//   { path: '',
//     redirectTo: '/heroes',
//     pathMatch: 'full'
//   },
];