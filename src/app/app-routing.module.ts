import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllPlayersComponent } from './all-players/all-players.component';
import { CreatePlayerComponent } from './create-player/create-player.component';

const routes: Routes = [
  {
    path:``,
    component: HomeComponent
  },
  {
    path:`create-player`,
    component: CreatePlayerComponent
  },
  {
    path:`all-players`,
    component: AllPlayersComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
