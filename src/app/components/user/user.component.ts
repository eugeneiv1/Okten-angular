import {Component, EventEmitter, Input, Output} from '@angular/core';

import {IUser} from "../../interfaces/user.interface";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input()
  user:IUser

  @Output()
  id = new EventEmitter<number>()

  getId():void {
    this.id.emit(this.user.id)
  }
}
