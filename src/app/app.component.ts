import { Component } from '@angular/core';
import { Todo } from './todo-item/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Todo[];
  constructor() {
    this.todos = [
      new Todo ('1', 'Keep leaning Angular!', 5 ),
      new Todo ('2', 'Buy a new kalimba', 4 ),
      new Todo ('3', 'Do something else', 2 ),
    ];
  }

  sortedTodos(): Todo[] {
    const filtered = this.todos.filter(function(el) { return el.completed != true; }); 
    return this.todos.sort((a: Todo ,b: Todo) => a.priority > b.priority ? -1 : (a.priority < b.priority) ? 1 : 0)
  }

  onAddTodo({ desc, priority }) {
    const id = (this.todos.length + 1).toString()
    this.todos.push(new Todo(id, desc, priority))
  }
}
