import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent, MessageService } from './app.component';

const appRoutes: Routes = [
    {
        path: 'porco/:id',
        component: AppComponent
    },
];

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes
        ),
        BrowserModule.withServerTransition({appId: 'angular-universal-demo'}),
        FormsModule
    ],
    providers: [MessageService],
    bootstrap: [AppComponent]
})
export class AppModule { }
