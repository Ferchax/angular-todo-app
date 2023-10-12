import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-todo-app';
  model: TaskModel;
  tasks: TaskModel[] = [];
  isDebugging = false;

  constructor() {
    this.model = { task:'', completed:false };
  }

  onSubmit(form: NgForm) {
    if(this.model.task.trim()) {
      this.addTask();
      form.reset();
    }
  }

  addTask() {
    console.log('addTask');
    this.tasks.push({...this.model});
    this.resetModel();
  }

  remove(item: TaskModel) {
    console.log('remove');
    const idx = this.tasks.indexOf(item);
    this.tasks.splice(idx, 1);
  }

  completed(item: TaskModel) {
    console.log('completed');
    item.completed = !item.completed;
  }

  resetModel() {
    this.model = { task:'', completed:false };
  }

  debug() {
    console.log('debug');
    console.log('tasks:', this.tasks);
  }

}

interface TaskModel {
  task: string;
  completed: boolean;
}
