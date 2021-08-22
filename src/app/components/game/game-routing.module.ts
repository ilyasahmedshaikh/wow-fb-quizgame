import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameComponent } from './game.component';
import { GameListingComponent } from './game-listing/game-listing.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameAnswerComponent } from './game-answer/game-answer.component';

const routes: Routes = [
  {
    path: '',
    component: GameComponent,
    children: [
      {
        path: '',
        component: GameListingComponent
      },
      {
        path: 'game-listing',
        component: GameListingComponent
      },
      {
        path: 'game-detail',
        component: GameDetailComponent
      },
      {
        path: 'game-answer',
        component: GameAnswerComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
