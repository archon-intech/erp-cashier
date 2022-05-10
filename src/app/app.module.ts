import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { CategoriesComponent } from './categories/categories.component';
import { FilterComponent } from './filter/filter.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { CategoryComponent } from './categories/category/category.component';
import { CartComponent } from './carts/cart/cart.component';
import { CartsComponent } from './carts/carts.component';
import {HttpClientModule} from "@angular/common/http";
import { MenuComponent } from './menus/menu/menu.component';
import { MenusComponent } from './menus/menus.component';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { AkunComponent } from './akun/akun.component';
import { DataMenusComponent } from './data-menus/data-menus.component';
import { DataMenuComponent } from './data-menus/data-menu/data-menu.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { InvoiceComponent } from './invoices/invoice/invoice.component';
import { ReceiptsComponent } from './receipts/receipts.component';
import { ReceiptComponent } from './receipts/receipt/receipt.component';
import { PenjualanComponent } from './data/penjualan/penjualan.component';
import { PembayaranComponent } from './data/pembayaran/pembayaran.component';
import { BtnQtyComponent } from './btn-qty/btn-qty.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CategoriesComponent,
    FilterComponent,
    ProductsComponent,
    ProductComponent,
    CategoryComponent,
    CartComponent,
    CartsComponent,
    MenuComponent,
    MenusComponent,
    HomeComponent,
    DataComponent,
    AkunComponent,
    DataMenusComponent,
    DataMenuComponent,
    InvoicesComponent,
    InvoiceComponent,
    ReceiptsComponent,
    ReceiptComponent,
    PenjualanComponent,
    PembayaranComponent,
    BtnQtyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
