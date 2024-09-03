import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Todo} from "../../Todo";

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [], 
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo!:Todo; // ! ==> Non-null assertion operator --> Ensure Todo will not be empty during use :: Input Decorator tells that todo-item will receive an todo as an input
  @Output() todoDeleteEvent: EventEmitter<Todo> = new EventEmitter(); // EventEmitter ==> To emit event to tell something ---> Here it is used to send the deleted todo to todos component
  constructor(){
  }
  // TO HANDLE DELETE BUTTON CLICK
  handleDeletion(todo:Todo){
    this.todoDeleteEvent.emit(todo); // EMITTING EVENT TO SENT THE DELETED TODO
  }
}
