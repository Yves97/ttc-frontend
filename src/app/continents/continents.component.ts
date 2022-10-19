import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Continents } from '../dataTypes/contients';

@Component({
  selector: 'app-continents',
  templateUrl: './continents.component.html',
  styleUrls: ['./continents.component.css']
})
export class ContinentsComponent implements OnInit {

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit(): void {
  }

  continent: any = null
  codeForm = this.formBuilder.group({
    code: ''
  });

  nameForm = this.formBuilder.group({
    name: ''
  })


  onSubmitCode(){
    this.http
        .get(`http://localhost:3000/continents/code/${this.codeForm.value.code}`)
        .subscribe((continent: any) => {
          console.log('continent', continent)
          this.continent = continent
        })
    console.log('Your order has been submitted', this.codeForm.value);
  }
  onSubmitName(){
    this.http
        .get(`http://localhost:3000/continents/name/${this.nameForm.value.name}`)
        .subscribe((continent: any) => {
          console.log('continent', continent)
          this.continent = continent
        })
    console.log('Your order has been submitted', this.codeForm.value);
  }

  goToHome(){
    this.route.navigate(['/home'])
  }

}
