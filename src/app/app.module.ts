import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from "./components/home";
import { AppartamentiComponent } from "./components/appartamenti";
import { MenuComponent } from "./components/menu";
import { SectionComponent } from "./components/section";
import { HeaderComponent } from "./components/header";
import { AdminComponent } from "./components/admin";

import { ModifyTextDirective } from "./directives/directive";

import { DataService } from "./services/services";
import { MatCheckboxModule} from '@angular/material';

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
    },{
        path: 'admin',
        component: AdminComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AppartamentiComponent,
        MenuComponent,
        SectionComponent,
        HeaderComponent,
        AdminComponent,

        ModifyTextDirective,
    ],
    imports: [
        BrowserAnimationsModule,
        RouterModule.forRoot(
            appRoutes
        ),
        BrowserModule.withServerTransition({appId: 'angular-universal-demo'}),
        FormsModule,
        HttpClientModule,
        //MatCheckboxModule,
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
