import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { PublicComponent } from './public/public.component';
import { PagesComponent } from './public/pages/pages.component';
import { FooterComponent } from './public/footer/footer.component';
import { HeaderComponent } from './public/header/header.component';
import { HomeComponent } from './public/pages/home/home.component';
import { ShopComponent } from './public/pages/shop/shop.component';
import { PortfolioComponent } from './public/pages/portfolio/portfolio.component';
import { AboutUsComponent } from './public/pages/about-us/about-us.component';
import { HeaderHomeComponent } from './public/header-home/header-home.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminPanelComponent,
    PublicComponent,
    PagesComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ShopComponent,
    PortfolioComponent,
    AboutUsComponent,
    HeaderHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
