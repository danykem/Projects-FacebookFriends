import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { User } from './models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient: HttpClient) { }
  public auth(login, pass){
    console.log(login + " " + pass)
    return this.httpclient.post('http://localhost:3000/auth', {login, pass})
  }

  public save(user : User){
    console.log(user)
    return this.httpclient.post('http://localhost:3000/save', user);
    
  }

  public getAll(){
    return this.httpclient.get<User[]>('http://localhost:3000/getall')
  }
}
