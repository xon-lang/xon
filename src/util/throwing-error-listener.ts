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
import { Any, Integer, Never, String2 } from '~/lib/core';
import { SourceSpan } from '~/source/source-span';

export class ThrowingErrorListener<TSymbol> implements ANTLRErrorListener<TSymbol> {
  syntaxError(
    recognizer: Recognizer<TSymbol, Any>,
    offendingSymbol: TSymbol | undefined,
    line: Integer,
    charIndex: Integer,
    message: String2,
    exception: RecognitionException | undefined,
  ): Never {
    if (!(offendingSymbol instanceof CommonToken)) {
      throw new Error('Not implemented');
    }

    let sourceSpan: SourceSpan | null = null;
    if (!exception) {
      sourceSpan = SourceSpan.fromToken(offendingSymbol);
    } else if (exception instanceof NoViableAltException) {
      sourceSpan = SourceSpan.fromTwoTokens(exception.startToken, offendingSymbol);
    } else if (exception instanceof InputMismatchException) {
      sourceSpan = SourceSpan.fromToken(offendingSymbol);
    } else if (exception instanceof FailedPredicateException) {
      throw new Error('Not implemented');
    }

    if (sourceSpan) {
      Issue.errorFromSourceSpan(sourceSpan, message);
    }
    throw exception;
  }
}
