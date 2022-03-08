import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ShareModule } from './shared/module/share/share.module';

import { SellerModule } from './modules/seller/seller.module';
import { OrderModule } from './modules/order/order.module';
import { BuyerModule } from './modules/buyer/buyer.module';
import { ProductModule } from './modules/product/product.module';
import { ProfileModule } from './modules/profile/profile.module';
import { CoverageAreaModule } from './modules/coverage-area/coverage-area.module';
import { CategoryModule } from './modules/category/category.module';
import { NotFoundPageComponent } from './shared/components/not-found-page/not-found-page.component';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule,
    SellerModule,
    OrderModule,
    BuyerModule,
    ProductModule,
    ProfileModule,
    CoverageAreaModule,
    CategoryModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
