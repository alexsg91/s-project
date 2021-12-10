import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.component';
import { Main } from './pages/main/main';

const routes: Routes = [
  {
    path: '',
    component: Main,
    children: [
      {
        path: '',
        component: HomePage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
