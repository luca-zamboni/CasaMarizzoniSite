import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from "./components/home";
import { AppartamentiComponent } from "./components/appartamenti";
import { MenuComponent } from "./components/menu";

import { ApartamentService } from "./services/services";


const appRoutes: Routes = [
    {
        path:'',
        redirectTo:"home",
        pathMatch: 'full'
    },{
        path: 'home',
        component: HomeComponent
    },{
        path: 'appartamenti',
        component: AppartamentiComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AppartamentiComponent,
        MenuComponent
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes
        ),
        BrowserModule.withServerTransition({appId: 'angular-universal-demo'}),
        FormsModule
    ],
    providers: [ApartamentService],
    bootstrap: [AppComponent]
})
export class AppModule { }
