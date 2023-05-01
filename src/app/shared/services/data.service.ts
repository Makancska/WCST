import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { Result } from '../model/result.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs : AngularFirestore, private router : Router) { }

//HOZZÁADÁS

  //eredmény hozzáadása
  addResult(result : Result){
    result.id  = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    for (let i = 0; i < 20; i++) {
      result.id += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return this.afs.collection('/results').doc(result.id).set(result);
  }

  //felhasználó hozzáadása
  addUser(user : User){
    return this.afs.collection<User>('users').doc(user.id).set(user);
  }

//MEGJELENÍTÉS

  //összes felhasználó megjelenítése
  getAllUsers(){
    return this.afs.collection('/users').snapshotChanges();
  }
  
  //összes orvos megjelenítése
  getOrvosUsers(){
    return this.afs.collection('/users', ref => ref.where('orvos', '==', true)).snapshotChanges();
  }

  //összes páciens megjelenítése
  getPaciensUsers(){
    return this.afs.collection('/users', ref => ref.where('orvos', '==', false)).snapshotChanges();
  }

  //felhasználó megjelenítése ID szerint
  getElement(id: string){
    return this.afs.collection('/users').doc(id).ref.get();
  }

  //összes teszt megjelenítése
  getAllResults(){
    return this.afs.collection('/results', ref => ref.orderBy('when')).snapshotChanges();
  }

  //összes teszt megjelenítése felhasználó szerint
  getAllResultsByID(id: string){
    return this.afs.collection('/results', ref => ref.where('pac_id', '==', id).orderBy('when')).snapshotChanges();
  }

//MÓDOSÍTÁS

  //felhasználó módosítása
  updateUser(user : User){
    this.deleteUser(user);
    this.addUser(user);
    alert("Sikeres módosítás!");
    this.router.navigate(['/homepage/home']);
  }

  //értékelés hozzáadása meglévő eredményhez
  addComment(id: string, szoveg: string, time : any, name : string){
    return this.afs.collection('/results').doc(id).update({comment: szoveg, comment_date: time, comment_who : name});
  }

//TÖRLÉS

  // felhasználó törlése
  deleteUser(user : User){
    return this.afs.doc('/users/'+user.id).delete();
  }

  //felhasználó törlése ID alapján
  deleteUserById(id: string){
    alert("Sikeresen törölve!");
    this.router.navigate(['/login']);
    return this.afs.doc('/users/'+id).delete();
  }

  //eredmények törlése ID alapján
  deleteResultsByID(id: string){
    this.afs.collection('/results', ref => ref.where('pac_id', '==', id)).get().subscribe(ref => 
      ref.forEach(function(doc) {
        return doc.ref.delete();
      })
    );    
  }

}
