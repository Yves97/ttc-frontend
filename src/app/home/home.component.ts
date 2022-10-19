import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Continents } from '../dataTypes/contients';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) {  }

  continents: Continents[] = [];

  ngOnInit(): void {
    this.getContinents();
  }


  getContinents(){
    this.http
        .get('http://localhost:3000/continents')
        .subscribe((continents: any) => {
          this.continents = continents
        })
   
  } 

}
