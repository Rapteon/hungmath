import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HangmanComponent } from './hangman/hangman.component';
import { StartComponent } from './start/start.component';
import { GameComponent } from './game/game.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { TimerComponent } from './timer/timer.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    HomeComponent,
    PageNotFoundComponent,
    HangmanComponent,
    StartComponent,
    GameComponent,
    PuzzleComponent,
    TimerComponent,
    StatisticsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
