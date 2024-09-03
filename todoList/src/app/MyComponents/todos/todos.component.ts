import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Todo} from "../../Todo"
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})

export class TodosComponent {

  todos:Todo[];

  constructor(){
    this.todos = [
      {
        sno:1,
        title: "Title-1",
        desc: "This is description-1",
        active: true
      },
      {
        sno:2,
        title: "Title-2",
        desc: "This is description-2",
        active: true
      },
      {
        sno:3,
        title: "Title-3",
        desc: "This is description-3",
        active: true
      }
    ] 
  }

  // FUNCTION TO HANDLE THE DELETED TODO
  handleTodoDeleteEvent(todo:Todo){
    console.log("handleTodoDeleteEvent called")
    const todoIndex = this.todos.indexOf(todo)
    this.todos.splice(todoIndex, 1); // DELETE THE TODO AT GIVEN INDEX UPTO SECOND PARAMETER
  }

  // FUNCTION TO HANDLE THE DELETED TODO
  handleTodoAddEvent(todo:Todo){
    console.log("handleTodoAddEvent called");
    this.todos.push(todo);
  }

}
