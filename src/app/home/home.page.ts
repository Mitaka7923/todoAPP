import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  public todoName: string = "";
  public todos: Array<string> = [];

  constructor(private router: Router) {
  }

  public addTodo(todoName: string) {
    if (todoName.trim()) {
      this.todos.push(todoName);
      this.todoName = "";
    }
  }

  public removeAll(todoIndex: number) {
    this.todos.splice(todoIndex, 1000.)
    this.todoName = "";
  }

  public removeItem(todoIndex: number) {
    this.todos.splice(todoIndex, 1)
  }

  public onEnter(todoName: string) {
    this.addTodo(todoName);
  }

  public openDetailsPage() {
    this.router.navigateByUrl("/details");
  }

  public openEnd() {
    this.todos = [];
    this.router.navigateByUrl("/end");
  }
}