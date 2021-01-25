import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Notification} from "../../model/Notification";

/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {


  notifications: Array<Notification> = [{
    title: 'Merry Christmas',
    description: 'GVRC, Bringing Quality medical care to you',
    date_time: Date()
  },
    {
      title: 'Reminder',
      description: 'Remember to update your personal details so we can reach you with ease.',
      date_time: Date(),
    },
    {
      title: 'Offer',
      description: 'Enjoy 25% off on your subscription.',
      date_time: Date()
    }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
  }

}
