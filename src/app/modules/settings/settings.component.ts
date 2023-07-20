import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Languages, LanguagesEnum } from 'src/app/data/languages.enum';
import { QuestionsEnum } from 'src/app/data/questions.enum';
import { DescriptionText, RandomAnswerVariantsText, RandomQuestionText, StartTestText, TitleText } from 'src/app/data/texts.enum';
import { ITestSettings } from 'src/app/interfaces/test-settings.interface';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  @Input() selectedLanguage: LanguagesEnum;
  @Input() isQuestionsRandom: boolean;
  @Input() isAnswerVariantsRandom: boolean;

  @Output() testStarted = new EventEmitter<ITestSettings>();

  questions = QuestionsEnum;
  languageOptions = Languages;
  isLoading: boolean;

  titleText = TitleText;
  descriptionText = DescriptionText;
  randomQuestionText = RandomQuestionText;
  randomAnswerVariantsText = RandomAnswerVariantsText;
  startTestText = StartTestText;

  startTest(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.testStarted.emit({
        isQuestionsRandom: this.isQuestionsRandom,
        isAnswerVariantsRandom: this.isAnswerVariantsRandom,
      });
      this.isLoading = false;
    }, 500);
  }
}
