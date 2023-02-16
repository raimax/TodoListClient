import { Component } from '@angular/core';
import { TodoItem } from './_models/TodoItem';
import { AuthService } from './_services/auth.service';
import { TodoService } from './_services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todoItems: TodoItem[] = [];
  input: string = '';

  constructor(public auth: AuthService, private todoService: TodoService) {}

  ngOnInit() {
    this.getTodoItems();
  }

  getTodoItems() {
    this.todoService.getAll().subscribe({
      next: (items) => {
        this.todoItems = items;
      },
    });
  }

  createItem() {
    this.todoService.create(this.input).subscribe({
      next: (item) => {
        this.todoItems.push(item);
      },
    });
  }

  deleteItem(id: string) {
    this.todoService.delete(id).subscribe({
      next: () => {
        this.getTodoItems();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
