import { Component, OnInit } from '@angular/core';
import {CarService} from "../service/car.service";
import {BehaviorSubject, Observable, of} from "rxjs";
import {map, scan} from "rxjs/operators";

interface Make {
  id: number;
  Make_Name: string;
}

const getMarques$ : Observable<Make[]> = of([
  { id: 1, Make_Name: 'A'},
  { id: 2, Make_Name: 'B'}
])

@Component({
  selector: 'app-evaluate-car',
  templateUrl: './evaluate-car.component.html',
  styleUrls: ['./evaluate-car.component.css']
})
export class EvaluateCarComponent implements OnInit {

  modeles: string[] = [];
  annees: string[] = [];

  data : Array<Make> = [
    {id:1, Make_Name:'car1'},
    {id:2, Make_Name:'car2'},
    {id:3, Make_Name:'car3'},
    {id:4, Make_Name:'car4'},
    ];

  marques: Observable<any>;
  limit = 10;
  offset = 0;
  options = new BehaviorSubject<any>([]);

  isDisabledMatSelectAnnee : boolean = true;
  isDisabledMatSelectModele : boolean = true;
  isDisabledMatSelectPuissance : boolean = true;
  isDisabledMatSelectTransmission : boolean = true;
  isDisabledNextButton : boolean = true;
  isDisabledEvaluateButton : boolean = true;
  isDisplayingCarDetails : boolean = false;

  constructor(private carService: CarService) {
    this.marques = this.options.asObservable().pipe(
      scan((acc :any, cur: any) => {
        return [...acc, ...cur];
      }, [])
    );
  }

  ngOnInit() {
    this.getAllMakes();
    this.modeles = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
      'I', 'J', 'K', 'L'
    ];
    this.annees = [
      '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014',
      '2013', '2012', '2011', '2010'
    ];
  }

  getAllMakes() {
    this.carService.getAllMarques().pipe(
      map(res => {
        this.data = res.Results;
        return this.data;
      })).subscribe( () => {
      this.getNextBatch();
    });
  }

  getNextBatch() {
    const result = this.data.slice(this.offset, this.offset + this.limit);
    console.log('result : ');
    console.log(result);
    this.options.next(result);
    this.offset += this.limit;
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
