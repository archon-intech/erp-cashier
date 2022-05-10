import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss'],
  host: {class:"invoices-comp"}
})
export class InvoicesComponent implements OnInit {
  heads = [
    {id:"id", no:"no", tgl:"tgl", nama:"nama", total:"total", paid:"paid", owing:"owing", status:"status", note:"note"}
  ]
  invoices = [
    {id:'1001', no:'inv1001', tgl:'3 Jan 2022', nama:'Budi Sudrajat', total:20500000, paid:10500000, owing:10000000, cetak:'aktif', lunas:'aktif', note:'Pembayaran DP sebagian'},
    {id:'1002', no:'inv1002', tgl:'3 Jan 2022', nama:'Sumarsono', total:15000000, paid:15000000, owing:0, cetak:'aktif', lunas:'', note:'-'},
    {id:'1003', no:'inv1003', tgl:'3 Jan 2022', nama:'Karjo', total:500000, paid:0, owing:500000, cetak:'', lunas:'', note:'Sore Datang Lagi.'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
