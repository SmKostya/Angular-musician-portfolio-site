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
import { HeaderShopComponent } from './public/header-shop/header-shop.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './interceptors/HttpErrorInterceptor';

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
    HeaderHomeComponent,
    HeaderShopComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
