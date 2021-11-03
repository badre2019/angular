import { Component, OnInit } from '@angular/core';
import {CarService} from "../service/car.service";
import {Observable, of} from "rxjs";

interface Make {
  id: number;
  name: string;
}

const getMarques$ : Observable<Make[]> = of([
  { id: 1, name: 'A'},
  { id: 2, name: 'B'}
])

@Component({
  selector: 'app-evaluate-car',
  templateUrl: './evaluate-car.component.html',
  styleUrls: ['./evaluate-car.component.css']
})
export class EvaluateCarComponent implements OnInit {

  marques: Observable<Make[]>;
  // marques: any;
  modeles: string[] = [];
  annees: string[] = [];

  isDisabledMatSelectAnnee : boolean = true;
  isDisabledMatSelectModele : boolean = true;
  isDisabledMatSelectPuissance : boolean = true;
  isDisabledMatSelectTransmission : boolean = true;
  isDisabledNextButton : boolean = true;
  isDisabledEvaluateButton : boolean = true;
  isDisplayingCarDetails : boolean = false;

  constructor(private carService: CarService) { }

  ngOnInit(): void {



    /*this.carService.getAllMarques().subscribe( marques => {
      // console.log('marques : ' +  marques);
      // console.log('marques.Results : ' +  marques.Results);
      // let make: Make = marques.Results[0];
      // let makeArray: Array<Make> = marques.Results;
      // console.log('make : ' +  make);
      // console.log(makeArray);
      // console.log('marques.Results[0].Make_Name : ' + marques.Results[0].Make_Name);
      return this.marques = marques.Results;
    }, error => {console.log(error)});*/

    // this.marques = this.carService.getAllMarques();
    this.marques = getMarques$;

    this.modeles = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
      'I', 'J', 'K', 'L'
    ];
    this.annees = [
      '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014',
      '2013', '2012', '2011', '2010'
    ];
  }

  activateMatSelectAnnee($event: any) {
    this.isDisabledMatSelectAnnee = false;
  }

  activateMatSelectModele($event: any) {
    this.isDisabledMatSelectModele = false;
  }

  activateMatSelectPuissance($event: any) {
    this.isDisabledMatSelectPuissance = false;
  }

  activateMatSelectTransmission($event: any) {
    this.isDisabledMatSelectTransmission = false;
  }

  activateNextButton($event: any) {
    this.isDisabledNextButton = false;
  }

  activateEvaluateButton($event: any) {
    this.isDisabledEvaluateButton = false;
  }

  displayCarDetails() {
    this.isDisplayingCarDetails = true;
  }

  evaluateMyCar() {

  }
}
