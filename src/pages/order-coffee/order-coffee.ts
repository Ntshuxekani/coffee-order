import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrderCoffeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-coffee',
  templateUrl: 'order-coffee.html',
})
export class OrderCoffeePage {

  counter:number=1;
  Coffee=false;
 
  
  WhippedCream=false;
  Cinnamon=false;
  Mint=false;
  Nutmeg=false;

  WhippedCreamPrice=10.00;
  CinnamonPrice=15.00;
  MintPrice=8.00;
  NutmegPrice=7.00;


  CoffeePrice=15.00;
  

 
  totalPrice=0.0;

  Quantity(value:number):void{
    this.counter+=value;
  }
  

  purchase():void{
    this.calcCost();
  }
  calcCost():number{

  this.totalPrice=this.CoffeePrice*this.counter;
  if(this.WhippedCream&& this.Cinnamon&& this.Mint&& this.Nutmeg&& this.CoffeePrice)
   this.totalPrice=(this.WhippedCreamPrice + this.CinnamonPrice + this.MintPrice + this.NutmegPrice+ this.CoffeePrice)*this.counter;


 else if(this.WhippedCream&& this.CoffeePrice){
    this.totalPrice=(this.WhippedCreamPrice + this.CoffeePrice)*this.counter;
   
    
  }
 else if(this.Cinnamon&& this.CoffeePrice){
    this.totalPrice=(this.CinnamonPrice + this.CoffeePrice)*this.counter;
  }
else  if(this.Mint&& this.CoffeePrice){
    this.totalPrice=(this.MintPrice + this.CoffeePrice)*this.counter;
  }
 else if(this.Nutmeg&& this.CoffeePrice){
    this.totalPrice=(this.NutmegPrice + this.CoffeePrice)*this.counter;
  }
  return this.totalPrice;
}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 
  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderCoffeePage');
  }
 
}
