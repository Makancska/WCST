import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CARDS } from 'src/app/shared/database/card.database'
import { Result } from 'src/app/shared/model/result.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DataService } from 'src/app/shared/services/data.service';
import { serverTimestamp } from 'firebase/firestore'

@Component({
  selector: 'app-teszt',
  templateUrl: './teszt.component.html',
  styleUrls: ['./teszt.component.scss']
})
export class TesztComponent{
  osszes = 30; 
  user: any;
  oldrule: any;
  katt: number = 0;
  all: number = 0;
  isCorrect: boolean = false;
  showFeedback: boolean = false;
  showFeedback2: boolean = false;
  showFeedback3: boolean = false;
  showFeedback4: boolean = false;
  good: number = 0;
  bad: number = 0;

  cards = CARDS;
  min = 0;
  max = 59;
  random = Math.floor(Math.random() * (this.max + 1 - this.min)) + this.min;
  card = this.cards[this.random];

  rules = ['szin', 'szam', 'forma']; 
  rmax = 2;
  rulerandom = Math.floor(Math.random() * (this.rmax + 1 - this.min)) + this.min;
  rule = this.rules[this.rulerandom];

  constructor(private data : DataService, private auth : AuthService, private router : Router){}

  ngOnInit(): void { 
    this.auth.getCurrentUser().then((data: any) => {
     this.user = this.data.getElement(data?.uid).then((data: any) => {
       this.user = data.data();
      })
    })
   }

  next(){
    this.random = Math.floor(Math.random() * (this.max + 1 - this.min)) + this.min;
    this.card = this.cards[this.random];
  }

  first(){
    this.review('blue', 1, 'circle', 1);
    this.showFeedback = true;
    setTimeout(() => {
      (this.showFeedback) = false;
    }, 500);
  }

  second(){
    this.review('green', 2, 'cross', 2);
    this.showFeedback2 = true;
    setTimeout(() => {
      (this.showFeedback2) = false;
    }, 500);
  }

  third(){
    this.review('red', 3, 'star', 3);
    this.showFeedback3 = true;
    setTimeout(() => {
      (this.showFeedback3) = false;
    }, 500);
  }

  fourth(){
    this.review('yellow', 4, 'triangle', 4);
    this.showFeedback4 = true;
    setTimeout(() => {
      (this.showFeedback4) = false;
    }, 500);
  }

  change(){
      this.oldrule = this.rulerandom;
      this.rulerandom = Math.floor(Math.random() * (this.rmax + 1 - this.min)) + this.min;
      if(this.oldrule == this.rulerandom){
        this.change();
      }
      this.rule = this.rules[this.rulerandom];
      this.katt = 0;
  }

  review(szin: string, szam: number, forma: string, id : number){
    if(this.rule == 'szin'){
      if(szin == this.card.szin){
        this.isCorrect = true;
        this.good++;
      }else{
        this.isCorrect = false;
        this.bad++;
      }
    } else if(this.rule == 'szam'){
      if(szam == this.card.szam){
          this.isCorrect = true;
          this.good++;
        }else{
          this.isCorrect = false;
          this.bad++;
        }
    }else{
      if(forma == this.card.forma){
        this.isCorrect = true;
        this.good++;
      }else{
        this.isCorrect = false;
        this.bad++;
      }
    }

    this.next();
  
    this.all++;
    this.katt++;

    if(this.katt == 10){
        this.change();
    }

    if(this.all == this.osszes){
      alert( 'Véget ért a teszt!\n \n Eredménye: \n Hibák száma: '+this.bad+'\n Jó válaszok száma: '+this.good);
      
      const time = serverTimestamp();

      const result: Result = 
        {
          id: '',
          pac_id: this.user.id,
          pac_name: this.user.name,
          good: this.good,
          wrong: this.bad,
          when: time 
        }
      this.data.addResult(result);
      this.router.navigate(['homepage/wcst']);
      this.all = 0;
      this.good = 0;
      this.bad = 0;
    }
  }

}
