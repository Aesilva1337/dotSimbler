import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CompiladorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compilador',
  templateUrl: 'compilador.html',
})
export class CompiladorPage {

  tipoEntrada: string = "2";
  tipoSaida: string = "2";
  rangeSpeed: string = "300";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompiladorPage');    
  }

}
