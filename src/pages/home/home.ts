
import { OrderCoffeePage } from './../order-coffee/order-coffee';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController,private alertCtrl: AlertController ) {
    

  }
 
  

    orderCoffeeAlert():void {
      let alert = this.alertCtrl.create({
        title: 'welcome to NgaliNtsetsi coffee shop',
        subTitle: 'place your order',
        buttons: ['order']
      });
      alert.present();
      this.navCtrl.push(OrderCoffeePage)
    }
}
