import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { User } from 'src/app/shared/model/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit{
  val: any;
  url : string = "";
  selectedFiles !: FileList;
  basePath = '/images';
  ref?: AngularFireStorageReference;
  task?: AngularFireUploadTask;

  email : string = "";
  telefonszam : string = "";
  nev : string = "";
  szerep : string = "";
  orvos : boolean = true;

  constructor(private auth : AuthService, private data : DataService, private fireStorage : AngularFireStorage) {}

  ngOnInit(): void { 
    this.auth.getCurrentUser().then((data: any) => {
     this.val = this.data.getElement(data?.uid).then((data: any) => {
       this.val = data.data();
      })
    })
   }

   selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }

  upload(){
    const filePath = `${this.basePath}/${this.selectedFiles[0].name}`
    this.ref = this.fireStorage.ref(filePath);
    this.task = this.ref.put(this.selectedFiles[0]);
    
    this.ref.getDownloadURL().subscribe(downloadLink => {
      this.url = downloadLink;
      console.log(downloadLink);
    })
  }

  update(){
    if(this.nev == ""){
      this.nev = this.val.name;
    }
    if(this.telefonszam == ""){
      this.telefonszam = this.val.phone;
    }
    if(this.url == ""){
      this.url = this.val.img;
    }
    const uj: User = 
    {
      id: this.val.id,
      email: this.val.email,
      name: this.nev,
      phone: this.telefonszam,
      orvos: this.val.orvos,
      img: this.url
    }
    
    this.data.updateUser(uj);
  }

  deleteUser(){
    if (confirm('Biztosan törli fiókját?')) {
      this.data.deleteUserById(this.val.id);
      this.data.deleteResultsByID(this.val.id);
      this.auth.deleteUser();
    }

  }


}
