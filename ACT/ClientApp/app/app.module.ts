import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent, NavmenuComponent, HomeComponent, AboutComponent],
    providers: [],
    imports: [
        HttpModule, BrowserModule, FormsModule, ReactiveFormsModule,
        RouterModule.forRoot([
            { path: 'home', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', component: HomeComponent }
        ])
    ],
})
export class AppModule { }