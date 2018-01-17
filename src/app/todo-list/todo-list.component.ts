import { Component, OnInit } from "@angular/core";

import { ITodo } from "../i-todo";
import { TodoService } from "../todo.service";
@Component({
  selector: "todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"]
})
export class TodoListComponent implements OnInit {
  todoItems: ITodo[];
  todoName = "";
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe(todos => (this.todoItems = todos));
  }

  addTodo() {
    debugger;
    if (this.todoName.trim().length) {
      let newTodo = {
        id: -1,
        name: this.todoName,
        isComplete: false
      };
      this.todoService.addTodo(newTodo).subscribe(todo => {
        this.todoItems.push(todo);
      });
    }
  }
}
