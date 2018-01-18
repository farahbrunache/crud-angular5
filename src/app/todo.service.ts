import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ITodo } from "./i-todo";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { catchError, map, tap } from "rxjs/operators";

@Injectable()
export class TodoService {
  private todosUrl = "api/todos";

  constructor(private http: HttpClient) {}

  getTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(this.todosUrl);
  }

  addTodo(todo: ITodo): Observable<ITodo> {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http
      .post<ITodo>(this.todosUrl, todo, httpOptions)
      .pipe(catchError(this.handleError<ITodo>("addTodo")));
  }

  updateTodo(todo: ITodo): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http
      .put(this.todosUrl, todo, httpOptions)
      .pipe(catchError(this.handleError<any>("updateTodo")));
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.log(`TODO APP ERROR::`);
      console.error(error);
      return of(result as T);
    };
  }
}
