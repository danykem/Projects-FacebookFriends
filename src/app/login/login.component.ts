import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 login :string;
 pass : string;
  formUser : FormGroup;

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private userService: UserService
    ) {}
    ngOnInit() {
        this.formUser = this.fb.group({
           
            login:  [],
            pass:  [],
          });
          localStorage.setItem('isLoggedIn','false');    
          localStorage.removeItem('token');    
    }

    onSubmit(){
      this.userService.auth(this.formUser.value.login, this.formUser.value.pass).subscribe((user)=>{
        if(user)
        {
          console.log("user auth : " + user);
          
          localStorage.setItem('isLoggedIn', "true");  
          localStorage.setItem('token', user['login']); 
          this.router.navigate(['/home'])

        }
        else{
          alert('login ou mot de passe incorrect')
        }
          
      });
    }
}
