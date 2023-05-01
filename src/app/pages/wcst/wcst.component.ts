import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wcst',
  templateUrl: './wcst.component.html',
  styleUrls: ['./wcst.component.scss']
})
export class WcstComponent {

  constructor(private router : Router){}

  redirect(){
    this.router.navigate(['/homepage/teszt']);
  }
}
