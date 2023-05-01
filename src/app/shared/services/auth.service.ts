import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { DataService } from './data.service';
import { getAuth, deleteUser } from 'firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  val: any;
  user : any;

  constructor(private fireAuth : AngularFireAuth, private router : Router, private dataService : DataService) {}

  //bejelentkezés
  login(email: string, password : string){
    this.fireAuth.signInWithEmailAndPassword(email, password).then( () =>{
      localStorage.setItem('token', 'true');
      this.router.navigate(['homepage/home']);
    }, err => {
      alert(err.message);
      this.router.navigate(['login']);
    })
  }

  //regisztráció
  register(email : string, password : string, telefonszam : string, nev : string, orvos : boolean, url : string) {
    this.fireAuth.createUserWithEmailAndPassword(email, password).then( cred => {
      const user: User = {
        id: cred.user?.uid as string,
        email: email,
        phone: telefonszam,
        name: nev,
        orvos: orvos,
        img: url
      };
        this.dataService.addUser(user).then( () => {
          console.log('User added successfully.');
        }).catch(error => {
          console.error(error);
        })
      alert("Sikeres regisztráció!");
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/registration']);
    })
  }

  //kijelentkezés
  logout(){
    this.fireAuth.signOut().then( () => {
      localStorage.removeItem('token');
      this.router.navigate(['/login'])
    }, err => {
      alert(err.message);
    })
  }

  //törlés
  deleteUser(){
    const auth = getAuth();
    this.user = auth.currentUser;
    return deleteUser(this.user);
  }

  //visszaadja a jelenlegi felhasználót
  getCurrentUser(): any {
    return this.fireAuth.currentUser;
  } 

  authenticated(): boolean {
    return this.fireAuth.authState !== null;
  }

  currentUserObservable(): any {
    return this.fireAuth.authState;
  }
 
}
