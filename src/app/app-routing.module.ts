import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFormComponent } from './my-form/my-form.component';
import { MyReactiveComponent } from './my-reactive/my-reactive.component';

const routes: Routes = [
  {path:'Reactive', component: MyReactiveComponent},
  {path: 'Template', component: MyFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
