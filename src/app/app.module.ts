import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EndingsPipe } from './pipes/endings.pipe';
import { FormsModule } from '@angular/forms';
import { SettingsComponent } from './modules/settings/settings.component';
import { QuestionsComponent } from './modules/questions/questions.component';
import { ResultsComponent } from './modules/results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    QuestionsComponent,
    ResultsComponent,
    EndingsPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
