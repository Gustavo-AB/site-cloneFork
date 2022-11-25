import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { AboutEnterpriseComponent } from './main/about-enterprise/about-enterprise.component';
import { ClientsComponent } from './main/clients/clients.component';
import { ContactComponent } from './main/contact/contact.component';
import { SupportComponent } from './main/support/support.component';
import { PresentationComponent } from './main/solutions/presentation/presentation.component';
import { SatFiscalComponent } from './main/solutions/sat-fiscal/sat-fiscal.component';
import { BalconySellComponent } from './main/solutions/balcony-sell/balcony-sell.component';
import { FaqComponent } from './main/faq/faq.component';
import { RestaurantComponent } from './main/solutions/restaurant/restaurant.component';
import { NfcEComponent } from './main/solutions/nfc-e/nfc-e.component';
import { SatEquipmentComponent } from './main/solutions/sat-equipment/sat-equipment.component';
import { NfeComponent } from './main/solutions/nfe/nfe.component';
import { ServiceInvoicesComponent } from './main/solutions/service-invoices/service-invoices.component';
import { WholesaleComponent } from './main/solutions/wholesale/wholesale.component';
import { TaxAndFiscalComponent } from './main/solutions/tax-and-fiscal/tax-and-fiscal.component';
import { BudgetComponent } from './main/solutions/budget/budget.component'


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "about-enterprise",
    component: AboutEnterpriseComponent
  },
  {
    path: "clients",
    component: ClientsComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "support",
    component: SupportComponent
  },
  {
    path: "faq",
    component: FaqComponent
  },
  {
    path: "presentation",
    component: PresentationComponent
  },
  {
    path: "sat-fiscal",
    component: SatFiscalComponent
  },
  {
    path: "sat-equipment",
    component: SatEquipmentComponent
  },
  {
    path: "restaurant",
    component: RestaurantComponent
  },
  {
    path: "wholesale",
    component: WholesaleComponent
  },
  {
    path: "balcony",
    component: BalconySellComponent
  },
  {
    path: "nfc-e",
    component: NfcEComponent
  },
  {
    path: "nfe",
    component: NfeComponent
  },
  {
    path: "service-invoices",
    component: ServiceInvoicesComponent
  },
  {
    path: "tax-and-fiscal",
    component: TaxAndFiscalComponent
  },
  {
    path: "budget",
    component: BudgetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
