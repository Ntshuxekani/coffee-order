import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderCoffeePage } from './order-coffee';

@NgModule({
  declarations: [
    OrderCoffeePage,
  ],
  imports: [
    IonicPageModule.forChild(OrderCoffeePage),
  ],
})
export class OrderCoffeePageModule {}
