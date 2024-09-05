import { Component, Output, EventEmitter } from '@angular/core';
import {FormsModule} from "@angular/forms"
import {Todo} from "../../Todo"

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {

  @Output() todoAddEvent: EventEmitter<Todo> = new EventEmitter()

  title: string; 
  desc: string;

  constructor(){
    this.title = "";
    this.desc = "";
  }

  // FUNCTION TO HANDLE SUBMIT TODO IN FORM
  onSubmitTodo(){
    if(this.title == "" || this.desc == ""){
      alert("Title or Description can't be Empty!");
    }
    else
    {
      const todo:Todo = {
        sno:100,
        title: this.title,
        desc: this.desc,
        active: true
      } 
      this.todoAddEvent.emit(todo)
      console.log(this.title, this.desc);
      this.title = "";
      this.desc = ""
    }
  };

}
