import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilsModule } from './utils/utils.module';

const routes: Routes = [
  {path:'', loadChildren:()=>import('./main/main.module').then(m=>m.MainModule)},
  {path:'**', component:UtilsModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
