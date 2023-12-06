import {Component, Input, SimpleChanges} from '@angular/core';
import {NgForOf} from "@angular/common";

import {IPost} from "../../interfaces/post.interface";
import {UserService} from "../../services/user.service";
import {PostComponent} from "../post/post.component";

@Component({
  selector: 'app-user-posts',
  standalone: true,
  imports: [
    PostComponent,
    NgForOf
  ],
  templateUrl: './user-posts.component.html',
  styleUrl: './user-posts.component.css'
})

export class UserPostsComponent {
  @Input()
  userId:number
  userPosts: IPost[]

  constructor(private userService:UserService) {
  }

  ngOnChanges(changes: SimpleChanges):void {
    this.userService.getUserPosts(this.userId).subscribe(value => this.userPosts = value)
  }

}
