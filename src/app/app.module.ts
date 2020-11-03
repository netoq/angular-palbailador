import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';

import { FormsModule }from '@angular/forms';
import { PalBailadorAboutComponent } from './pal-bailador-about/pal-bailador-about.component';
import { PalBailadorCartComponent } from './pal-bailador-cart/pal-bailador-cart.component';
import { PalBailadorProductsComponent } from './pal-bailador-products/pal-bailador-products.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    PalBailadorAboutComponent,
    PalBailadorCartComponent,
    PalBailadorProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
