import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { GameRoutingModule } from './game-routing.module';
import { ProgressBarModule } from 'primeng/progressbar';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [CommonModule, GameRoutingModule, ProgressBarModule, BrowserModule],
  declarations: [GameComponent],
  exports: [GameComponent]
})
export class GameModule { }
