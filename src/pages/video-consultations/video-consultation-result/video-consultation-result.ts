import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DoctorsProfileInterface} from "../../../model/DoctorsProfile";

/**
 * Generated class for the VideoConsultationResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video-consultation-result',
  templateUrl: 'video-consultation-result.html',
})
export class VideoConsultationResultPage {

  doctorProfiles: Array<DoctorsProfileInterface> = [
    {
      id: "1",
      name: "Henry Muchiri",
      fee_per_hour: "Ksh 500",
      image: "assets/icon/doctor_speak.svg",
      specialist: "Pulmonologist, Allergist/ Immunologist",
      designation: "MBBS MD (Tuberculosis & Chest Diseases)",
      experience: "8 Years of Experience",
      speaking: "Speaks: English, Swahili",
      specialized_in: " Interventional Pulmonology, Sleep Medicine , Snoring , Bronchoscopy, Thoracoscopy, Allergy Tsing , Sleep Lab, Ebus(Linexy & Radial), CRYO therapy."
    },
    {
      id: "1",
      name: "Fatma Ali",
      fee_per_hour: "600",
      image: "assets/icon/doctor_speak.svg",
      specialist: "Pulmonologist, Allergist/ Immunologist",
      designation: "MBBS MD (Tuberculosis & Chest Diseases)",
      experience: "7 Years of Experience",
      speaking: "Speaks: English, Swahili, Arabic",
      specialized_in: " Interventional Pulmonology, Sleep Medicine , Snoring , Bronchoscopy, Thoracoscopy, Allergy Tsing , Sleep Lab, Ebus(Linexy & Radial), CRYO therapy."
    },
    {
      id: "1",
      name: "Kinyanjui Andrew",
      fee_per_hour: "Free",
      image: "assets/icon/doctor_speak.svg",
      specialist: "Pulmonologist, Allergist/ Immunologist",
      designation: "MBBS MD (Tuberculosis & Chest Diseases)",
      experience: "2 Years of Experience",
      speaking: "Speaks: English, Swahili, Kikuyu",
      specialized_in: " Interventional Pulmonology, Sleep Medicine , Snoring , Bronchoscopy, Thoracoscopy, Allergy Tsing , Sleep Lab, Ebus(Linexy & Radial), CRYO therapy."
    },
    {
      id: "1",
      name: "Allan Monyoncho",
      fee_per_hour: "500",
      image: "assets/icon/doctor_speak.svg",
      specialist: "Pulmonologist, Allergist/ Immunologist",
      designation: "MBBS MD (Tuberculosis & Chest Diseases)",
      experience: "28 Years of Experience",
      speaking: "Speaks: English, Swahili",
      specialized_in: " Interventional Pulmonology, Sleep Medicine , Snoring , Bronchoscopy, Thoracoscopy, Allergy Tsing , Sleep Lab, Ebus(Linexy & Radial), CRYO therapy."
    }


  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoConsultationResultPage');
  }

}
