import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { TodoItem } from '../_models/TodoItem';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}
  apiUrl: string = environment.apiUrl;

  getAll() {
    return this.http.get<TodoItem[]>(this.apiUrl + 'todo');
  }

  create(content: string) {
    return this.http.post<TodoItem>(this.apiUrl + 'todo', { content: content });
  }

  delete(id: string) {
    return this.http.delete(this.apiUrl + 'todo/' + id);
  }
}
