import { Component } from '@angular/core';
import { TopPageContentTitleServiceTsService } from 'src/app/top-page-content-title.service';
import { TopPageContentComponent } from 'src/app/shared/top-page-content/top-page-content.component'


@Component({
  selector: 'app-sat-fiscal',
  templateUrl: './sat-fiscal.component.html',
  styleUrls: ['./sat-fiscal.component.scss']
})
export class SatFiscalComponent{

  title?:string

  constructor(private Title:TopPageContentTitleServiceTsService){
    this.title = Title.getTitle("SAT – Pré Venda – Delivery – Comandas")
  }
}