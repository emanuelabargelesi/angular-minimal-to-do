import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AddTodoFormError } from './add-todo-form-error.model';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.scss'],
})
export class AddTodoFormComponent implements OnInit {
  @Output() newTodo: EventEmitter<any> = new EventEmitter<any>();
  formError: AddTodoFormError;
  modalOpened: boolean;

  constructor() {
    this.formError = new AddTodoFormError();
    this.modalOpened = false;
  }

  ngOnInit(): void {}

  checkForm(desc: string, priority: number): void {
    this.formError.descError = false;
    this.formError.descErrorMsg = '';
    this.formError.priorityError = false;
    this.formError.priorityErrorMsg = '';

    if (desc === '') {
      this.formError.isError = true;
      this.formError.descError = true;
      this.formError.descErrorMsg = 'Please add a description';
    }
    if (!priority || priority < 1 || priority > 5) {
      this.formError.isError = true;
      this.formError.priorityError = true;
      this.formError.priorityErrorMsg =
        'Priority accept numbers between 1 and 5';
    }
  }

  addTodo(desc: HTMLInputElement, priority: HTMLInputElement) {
    const descValue = desc.value;
    const priorityValue = parseInt(priority.value);
    this.formError = new AddTodoFormError();
    this.checkForm(descValue, priorityValue);
    if (!this.formError.isError) {
      const todo: any = {
        desc: descValue,
        priority: priorityValue,
      };
      this.newTodo.emit(todo);

      desc.value = '';
      priority.value = '';
      this.modalOpened = false;
    }
  }

  toggleModal() {
    this.modalOpened = !this.modalOpened;
  }
}
