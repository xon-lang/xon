import {
  ANTLRErrorListener,
  CommonToken,
  FailedPredicateException,
  InputMismatchException,
  NoViableAltException,
  RecognitionException,
  Recognizer,
} from 'antlr4ts';
import { Issue } from '../issue-service/issue';
import { IssueLevel } from '../issue-service/issue-level';
import { IssueService } from '../issue-service/issue-service';
import { SourceRange } from './source-range';

export class ThrowingErrorListener<TSymbol> implements ANTLRErrorListener<TSymbol> {
  syntaxError(
    recognizer: Recognizer<TSymbol, any>,
    offendingSymbol: TSymbol | undefined,
    line: number,
    charIndex: number,
    message: string,
    error: RecognitionException | undefined,
  ): never {
    if (!(offendingSymbol instanceof CommonToken)) {
      throw new Error('Not implemented');
    }

    const issue = new Issue();

    if (!error) {
      issue.source = SourceRange.fromToken(offendingSymbol);
    } else if (error instanceof NoViableAltException) {
      issue.source = SourceRange.fromTwoTokens(error.startToken, offendingSymbol);
    } else if (error instanceof InputMismatchException) {
      throw new Error('Not implemented');
    } else if (error instanceof FailedPredicateException) {
      throw new Error('Not implemented');
    }

    issue.level = IssueLevel.error;
    issue.message = message;
    issue.source.sourceName = recognizer.inputStream.sourceName || null;
    IssueService.issues.push(issue);
    throw issue.error();
  }
}
