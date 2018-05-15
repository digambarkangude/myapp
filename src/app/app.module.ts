import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResultComponent } from './result/result.component';


const appRoutes: Routes = [
{
	path: 'result',
	component: ResultComponent,
	data: { title: 'Book List' }
},
{
	path: 'login',
	component: LoginComponent,
	data: { title: 'Login' }
},
{
	path: 'signup',
	component: SignupComponent,
	data: { title: 'Sign Up' }
},
{ 
	path: '',
	redirectTo: '/login',
	pathMatch: 'full'
}
];


@NgModule({
	declarations: [
	AppComponent,
	LoginComponent,
	SignupComponent,
	ResultComponent
	],
	imports: [
	BrowserModule,
	FormsModule,
	HttpClientModule,

	RouterModule.forRoot(
		appRoutes,
    { enableTracing: true } // <-- debugging purposes only
    )
	],
	providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
	bootstrap: [AppComponent]
})
export class AppModule { }
