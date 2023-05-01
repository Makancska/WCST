import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CATEGORIES } from 'src/app/shared/database/category.database';
import { PCATEGORIES } from 'src/app/shared/database/p_category.database';
import { Category } from 'src/app/shared/model/category.model';
import { User } from 'src/app/shared/model/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  val: any;
  categories = CATEGORIES;
  pcategories = PCATEGORIES;
  
  constructor(private auth : AuthService, private data : DataService) {}

  ngOnInit(): void { 
   this.auth.getCurrentUser().then((data: any) => {
    this.val = this.data.getElement(data?.uid).then((data: any) => {
      this.val = data.data();
     })
   })
  
  }

  logout(){
    this.auth.logout();
  }

}
