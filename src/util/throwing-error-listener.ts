import {
  ANTLRErrorListener,
  CommonToken,
  FailedPredicateException,
  InputMismatchException,
  NoViableAltException,
  RecognitionException,
  Recognizer,
} from 'antlr4ts';
import { Issue } from '~/issue/issue';
import { IssueLevel } from '~/issue/issue-level';
import { Any2, Never2, Number2, String2 } from '~/lib/core';
import { SourceSpan } from '~/source/source-span';

export class ThrowingErrorListener<TSymbol> implements ANTLRErrorListener<TSymbol> {
  syntaxError(
    recognizer: Recognizer<TSymbol, Any2>,
    offendingSymbol: TSymbol | undefined,
    line: Number2,
    charIndex: Number2,
    message: String2,
    exception: RecognitionException | undefined,
  ): Never2 {
    if (!(offendingSymbol instanceof CommonToken)) {
      throw new Error('Not implemented');
    }

    let sourceSpan: SourceSpan | null = null;
    if (!exception) {
      sourceSpan = SourceSpan.fromToken(offendingSymbol);
    } else if (exception instanceof NoViableAltException) {
      sourceSpan = SourceSpan.fromTwoTokens(offendingSymbol, offendingSymbol);
    } else if (exception instanceof InputMismatchException) {
      sourceSpan = SourceSpan.fromToken(offendingSymbol);
    } else if (exception instanceof FailedPredicateException) {
      throw new Error('Not implemented');
    }

    if (sourceSpan) {
      // sourceSpan.location = recognizer.inputStream?.location ?? null;
      const issue = new Issue(sourceSpan, IssueLevel.error, message);
      issue.antlrError = exception ?? null;
      throw issue;
    }
    throw exception;
  }
}
