import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name = environment.application.name;
  angular = environment.application.angular;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;
  users : User[];
  constructor(private userService: UserService) {
   }

  ngOnInit(): void {
    this.getAllUser();
  }

  public getAllUser(){
    this.userService.getAll().subscribe(data =>{
      this.users = data;
    })
  }
}
