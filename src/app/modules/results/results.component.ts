import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Languages, LanguagesEnum } from 'src/app/data/languages.enum';
import { QuestionsEnum } from 'src/app/data/questions.enum';
import { TestSuccessText, TestFailureText, ErrorQtyText, FromText, RestartTestText } from 'src/app/data/texts.enum';
import { IAnswerVariant } from 'src/app/interfaces/answer-variant.interface';
import { IQuestion } from 'src/app/interfaces/question.interface';
import { ITestSettings } from 'src/app/interfaces/test-settings.interface';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  @Input() selectedLanguage: LanguagesEnum = LanguagesEnum.BY;
  @Input() unPassedQuestions: IQuestion[] = [];
  @Input() questions: IQuestion[];
  @Input() maximumErrorsQty: number;

  @Output() testRestarted = new EventEmitter();

  languageTabs = Languages;
  testSuccessText = TestSuccessText;
  testFailureText = TestFailureText;
  fromText = FromText;
  errorQtyText = ErrorQtyText;
  restartTestText = RestartTestText;
  isLoading = false;

  restartTest(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.testRestarted.emit();
    }, 1000);
  }

  getSelectedAnswer(question: IQuestion): string {
    return question.answer_variants.filter(item => item.has_selected)[0][`title_${this.selectedLanguage}`];
  }

  getCorrectAnswer(question: IQuestion): string {
    return question.answer_variants.filter(item => item.is_correct)[0][`title_${this.selectedLanguage}`];
  }
}
