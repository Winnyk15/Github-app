import { Component, OnInit } from '@angular/core';
import {UsersService} from '../user-service/users.service';

import {UserRequestService} from '../user-http/user-request.service';
import {User} from '../user-class/user';
//import {Repository} from '../repository-class/repository'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UsersService,UserRequestService] 
})
export class UserComponent implements OnInit {

  user:User;
  //repository:Repository;

  userName=""
  constructor(private usersService:UserRequestService){
  
  }
  submitUser(){
         this.usersService.userRequest(this.userName)
         
}
  ngOnInit() {
    
      this.usersService.userRequest('Joselyne97')
           
      this.user=this.usersService.user
      // this.repository=this.usersService.repository
  }  
  }