import {
  ANTLRErrorListener,
  CommonToken,
  FailedPredicateException,
  InputMismatchException,
  NoViableAltException,
  RecognitionException,
  Recognizer,
} from 'antlr4ts';
import { Issue } from '../issue/issue';
import { IssueLevel } from '../issue/issue-level';
import { Number, String } from '../lib/core';
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

    let sourceRange: SourceRange;
    if (!error) {
      sourceRange = SourceRange.fromToken(offendingSymbol);
    } else if (error instanceof NoViableAltException) {
      sourceRange = SourceRange.fromTwoTokens(offendingSymbol, offendingSymbol);
    } else if (error instanceof InputMismatchException) {
      sourceRange = SourceRange.fromToken(offendingSymbol);
    } else if (error instanceof FailedPredicateException) {
      throw new Error('Not implemented');
    }

    sourceRange.sourceName = recognizer.inputStream.sourceName || null;

    const issue = new Issue(sourceRange, IssueLevel.error, message);
    issue.antlrError = error;
    throw issue;
  }
}
