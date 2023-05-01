import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Result } from 'src/app/shared/model/result.model';
import { DataService } from 'src/app/shared/services/data.service';
import { serverTimestamp } from 'firebase/firestore'
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  newComment: string = '';
  comments: Result[] = [];
  item : any;
  user: any;

  constructor(public dialogRef: MatDialogRef<CommentComponent>, @Inject(MAT_DIALOG_DATA) data: any, private adat : DataService, private auth: AuthService){
    this.item = data;
  }

  ngOnInit(): void { 
    this.auth.getCurrentUser().then((data: any) => {
     this.user = this.adat.getElement(data?.uid).then((data: any) => {
       this.user = data.data();
      })
    })
   }

  close(){
    this.dialogRef.close();
  }

  onKey(event: any) {
    this.newComment = event.target.value;
  }

  save(){
    const time = serverTimestamp();
    this.adat.addComment(this.item, this.newComment, time, this.user.name);
    this.dialogRef.close();
  }
  
}
