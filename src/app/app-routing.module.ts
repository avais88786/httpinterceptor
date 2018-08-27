import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpCallerCloneComponent } from './http-caller-clone/http-caller-clone.component';


const routes: Routes = [
  { path: 'clonedCaller', component: HttpCallerCloneComponent }
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
