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
  localItems: string | null;

  constructor(){
    this.localItems = localStorage.getItem("todos");
    if(this.localItems == null){
      this.todos = []
    }
    else{
      this.todos = JSON.parse(this.localItems);
    }
  }

  // FUNCTION TO HANDLE THE DELETED TODO
  handleTodoDeleteEvent(todo:Todo){
    const todoIndex = this.todos.indexOf(todo)
    this.todos.splice(todoIndex, 1); // DELETE THE TODO AT GIVEN INDEX UPTO SECOND PARAMETER
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  // FUNCTION TO HANDLE THE DELETED TODO
  handleTodoAddEvent(todo:Todo){
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  // FUNCTION TO HANDLE THE DELETED TODO
  handleTodoCheckEvent(todo:Todo){
    const todoIndex = this.todos.indexOf(todo)
    this.todos[todoIndex].active = ! this.todos[todoIndex].active
    localStorage.setItem('todos', JSON.stringify(this.todos));
    // console.log("handleTodoCheckEvent - todos: ", this.todos)
  }

 
}
