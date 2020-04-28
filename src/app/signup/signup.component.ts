import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
    user =    new User("", "", "", "","",[]);
    formUser : FormGroup;

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private userService: UserService
    ) {}
    ngOnInit() {
        this.formUser = this.fb.group({
            prenom:[],
            nom:  [],
            login:  [],
            email:  [],
            pass:  [],
          });
          
        
    }

    onSubmit(){
        this.user.nom =  this.formUser.value.nom;
        this.user.prenom =  this.formUser.value.prenom;
        this.user.login =  this.formUser.value.login;
        this.user.email =  this.formUser.value.email;
        this.user.pass =  this.formUser.value.pass;
        this.userService.save(this.user).subscribe(()=>{
            console.log("user saved : " + this.user);
            localStorage.setItem('isLoggedIn', "true");  
            localStorage.setItem('token', this.user['login']); 
            this.router.navigate(['/home']);
        });
    }
}
