import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {PageIntroPage} from "../Page";


export interface LanguageInterface {
  id?: number,
  name?: string,
  icon?: string
}


@IonicPage()
@Component({
  selector: 'page-language-select',
  templateUrl: 'language-select.html',
})
export class LanguageSelectPage {

  public languages: Array<LanguageInterface> = [
    {id: 1, name: 'Swahili', icon: 'assets/icon/kenya.png'},
    {id: 2, name: 'English', icon: 'assets/icon/uk.png'}
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  languageSelected(language: LanguageInterface) {
    this.navCtrl.push(PageIntroPage);
  }
}
