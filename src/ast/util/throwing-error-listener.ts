import { ANTLRErrorListener, Recognizer } from 'antlr4ts';
import { ATNSimulator } from 'antlr4ts/atn/ATNSimulator';
import { Issue } from '../../issue-service/issue';
import { IssueLevel } from '../../issue-service/issue-level';
import { IssueService } from '../../issue-service/issue-service';
import { SourceReference } from './source-reference';

export class ThrowingErrorListener<TSymbol> implements ANTLRErrorListener<TSymbol> {
  syntaxError<T extends TSymbol>(
    recognizer: Recognizer<T, ATNSimulator>,
    _offendingSymbol: T | undefined,
    line: number,
    column: number,
    message: string,
  ): never {
    const issue = Issue.fromSourceReference(
      SourceReference.fromContext(recognizer['_ctx']),
      IssueLevel.Error,
      message,
    );
    IssueService.instance.lastScope.push(issue);
    throw new Error(issue.toString());
  }
}
