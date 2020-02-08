import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { PublicComponent } from './public/public.component';

import { HomeComponent } from './public/pages/home/home.component';
import { ShopComponent } from './public/pages/shop/shop.component';
import { PortfolioComponent } from './public/pages/portfolio/portfolio.component';
import { AboutUsComponent } from './public/pages/about-us/about-us.component';


const routes: Routes = [
  { path: 'admin', component: AdminPanelComponent},
  { path: '', component: PublicComponent, children : [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'shop', component: ShopComponent},
    { path: 'portfolio', component: PortfolioComponent},
    { path: 'aboutUs', component: AboutUsComponent},
  ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
