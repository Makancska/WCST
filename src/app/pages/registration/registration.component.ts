import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
 

  email : string = "";
  password : string = "";
  password2 : string = "";
  telefonszam : string = "";
  nev : string = "";
  szerep? : string;
  orvos? : boolean;
  
  url : string = "";
  selectedFiles !: FileList;
  basePath = '/images';
  ref?: AngularFireStorageReference;
  task?: AngularFireUploadTask;
  
  constructor(private auth : AuthService, private fireStorage : AngularFireStorage){}

  ngOnInit(): void {
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

  registration(){
    

    if(this.email == ''){
      alert("Kérlek írj email-címet!")
      return;
    }
    if(this.password == ''){
      alert("Kérlek írj jelszót!")
      return;
    }
   
    if(this.password !== this.password2){
      alert("A két jeszó nem egyezik!")
      return;
    }

    if(this.szerep == "0"){
      this.orvos = false;
    }else{
      this.orvos = true;
    }

    console.log(this.url);
    
    this.auth.register(this.email, this.password, this.telefonszam, this.nev, this.orvos, this.url);

    
    this.email = '';
    this.password = '';
    this.password2 = '';
    this.telefonszam = '';
    this.nev = '';
    this.szerep = '';
  }
}
