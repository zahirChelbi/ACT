var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './components/app/app.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/Blog/Blog.component';
import { AboutComponent } from './components/about/about.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            bootstrap: [AppComponent],
            declarations: [AppComponent, NavmenuComponent, HomeComponent, BlogComponent, AboutComponent],
            providers: [],
            imports: [
                HttpModule, BrowserModule, FormsModule, ReactiveFormsModule,
                RouterModule.forRoot([
                    { path: 'home', component: HomeComponent },
                    { path: 'blog', component: BlogComponent },
                    { path: 'about', component: AboutComponent },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: '**', component: HomeComponent }
                ])
            ],
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map