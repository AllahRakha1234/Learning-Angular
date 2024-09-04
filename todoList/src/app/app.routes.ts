import { provideRouter, Routes } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { AboutComponent } from './MyComponents/about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: TodosComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
