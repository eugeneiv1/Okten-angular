import { Component , OnInit} from '@angular/core';
import {UserComponent} from "../user/user.component";
import {UserPostsComponent} from "../user-posts/user-posts.component";
import {NgForOf, NgIf} from "@angular/common";
import {UserService} from "../../services/user.service";
import {IUser} from "../../interfaces/user.interface";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    UserComponent,
    UserPostsComponent,
    NgIf,
    NgForOf
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  users:IUser[]
  userId: number
  constructor(private userService:UserService) {
  }

  ngOnInit():void {
    this.userService.getAllUsers().subscribe(value => this.users = value);
  }

  getId(id: number) {
    this.userId = id;
  }
}
