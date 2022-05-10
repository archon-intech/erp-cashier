import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DataComponent} from "./data/data.component";
import {AkunComponent} from "./akun/akun.component";
import {InvoicesComponent} from "./invoices/invoices.component";
import {ReceiptsComponent} from "./receipts/receipts.component";
import {PenjualanComponent} from "./data/penjualan/penjualan.component";
import {PembayaranComponent} from "./data/pembayaran/pembayaran.component";

const routes: Routes = [
  {
    path : "",
    component: HomeComponent,
  },
  {
    path : "data",
    component: DataComponent,
    children: [
    {
      path: "penjualan",
      component: PenjualanComponent
    },
    {
      path: "pembayaran",
      component: PembayaranComponent
    }
    ]
  },
  {
    path : "akun",
    component: AkunComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
