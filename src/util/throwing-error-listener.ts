import { Issue } from '@/issue/issue';
import { IssueLevel } from '@/issue/issue-level';
import { Any2, Never2, Number2, String2 } from '@/lib/core';
import {
  ANTLRErrorListener,
  CommonToken,
  FailedPredicateException,
  InputMismatchException,
  NoViableAltException,
  RecognitionException,
  Recognizer,
} from 'antlr4ts';

import { SourceRange } from './source-range';

export class ThrowingErrorListener<TSymbol> implements ANTLRErrorListener<TSymbol> {
  syntaxError(
    recognizer: Recognizer<TSymbol, Any2>,
    offendingSymbol: TSymbol | null,
    line: Number2,
    charIndex: Number2,
    message: String2,
    exception: RecognitionException | null,
  ): Never2 {
    if (!(offendingSymbol instanceof CommonToken)) {
      throw new Error('Not implemented');
    }

    let sourceRange: SourceRange;
    if (!exception) {
      sourceRange = SourceRange.fromToken(offendingSymbol);
    } else if (exception instanceof NoViableAltException) {
      sourceRange = SourceRange.fromTwoTokens(offendingSymbol, offendingSymbol);
    } else if (exception instanceof InputMismatchException) {
      sourceRange = SourceRange.fromToken(offendingSymbol);
    } else if (exception instanceof FailedPredicateException) {
      throw new Error('Not implemented');
    }

    sourceRange.sourceName = recognizer.inputStream.sourceName || null;

    const issue = new Issue(sourceRange, IssueLevel.error, message);
    issue.antlrError = exception;
    throw issue;
  }
}
