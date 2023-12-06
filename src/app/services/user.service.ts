import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../interfaces/user.interface";
import {IPost} from "../interfaces/post.interface";
import {urls} from "../urls/urls";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  getAllUsers():Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(urls.users.base);
  }

  getUserPosts(id:number):Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(urls.users.getPosts(id));
  }
}
