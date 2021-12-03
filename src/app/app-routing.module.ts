import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoatComponent } from './boat/boat.component';
import { LoginComponent } from './login/login.component';
import { SaverComponent } from './saver/saver.component';
import { SortieComponent } from './sortie/sortie.component';
import { SurviverComponent } from './surviver/surviver.component';


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"sortie",component:SortieComponent},
  {path:"boat",component:BoatComponent},  
  {path:"saver",component:SaverComponent},
  {path:"surviver",component:SurviverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
