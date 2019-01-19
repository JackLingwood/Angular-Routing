import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ProductListComponent } from './products/product-list.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';

export const ROUTE_WELCOME : string = 'welcome'

const ROUTES : Route[] = [
    { path :  ROUTE_WELCOME, component: WelcomeComponent},
    { path :  '', redirectTo: ROUTE_WELCOME, pathMatch: 'full'},
    { path :  '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule{}
