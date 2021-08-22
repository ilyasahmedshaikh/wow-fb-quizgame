import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { GameListingComponent } from './game-listing/game-listing.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameAnswerComponent } from './game-answer/game-answer.component';


@NgModule({
  declarations: [GameComponent, GameListingComponent, GameDetailComponent, GameAnswerComponent],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
