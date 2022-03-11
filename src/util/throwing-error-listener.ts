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
import { none, Number, String } from '../lib/core';
import { SourceRange } from './source-range';

export class ThrowingErrorListener<TSymbol> implements ANTLRErrorListener<TSymbol> {
  syntaxError(
    recognizer: Recognizer<TSymbol, any>,
    offendingSymbol: TSymbol | undefined,
    line: Number,
    charIndex: Number,
    message: String,
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
    issue.source.sourceName = recognizer.inputStream.sourceName || none;
    throw issue.error();
  }
}
