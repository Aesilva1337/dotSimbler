import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Commands } from '../../providers/commands/commands';

/**
 * Generated class for the ComandosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comandos',
  templateUrl: 'comandos.html',
})
export class ComandosPage {
  commandsList: any;
  commandsProvider: Commands;

  constructor(public navCtrl: NavController, public navParams: NavParams, commandsProvider: Commands) {
    this.commandsProvider = commandsProvider;
  }

  ionViewDidLoad() {
    this.loadCommands();
  }

  loadCommands(){
    this.commandsList = this.commandsProvider.getList();
  }

  getCommand(searchbar) {
    this.loadCommands();
    let c = searchbar.srcElement.value;
    if (!c) {
      return;
    }
  
    this.commandsList = this.commandsList.filter((v) => {
      if(v.comando && c) {
        if (v.comando.toLowerCase().indexOf(c.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }
}
