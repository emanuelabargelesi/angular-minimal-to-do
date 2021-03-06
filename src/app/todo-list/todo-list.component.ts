import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo-item/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[];
  constructor() {}

  ngOnInit(): void {}
}
