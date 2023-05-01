import { Component, Inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/model/user.model';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  item: any;
  val: any;

  constructor(public dialogRef: MatDialogRef<DetailComponent>, @Inject(MAT_DIALOG_DATA) data: any, private adat : DataService, private afs : AngularFirestore){
    this.item = data;
    this.adat.getElement(this.item).then(data => {
      this.val = data.data()
    }
    ); 
  }
  

}

