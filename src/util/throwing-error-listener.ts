import { ANTLRErrorListener, ParserRuleContext, Recognizer } from 'antlr4ts';
import { ATNSimulator } from 'antlr4ts/atn/ATNSimulator';
import { Issue } from '../issue-service/issue';
import { IssueLevel } from '../issue-service/issue-level';
import { IssueService } from '../issue-service/issue-service';

export class ThrowingErrorListener<TSymbol> implements ANTLRErrorListener<TSymbol> {
  syntaxError<T extends TSymbol>(
    recognizer: Recognizer<T, ATNSimulator>,
    _offendingSymbol: T | undefined,
    line: number,
    column: number,
    message: string,
  ): never {
    const ctx = recognizer['_ctx'] as ParserRuleContext;
    const issue = new Issue();
    issue.level = IssueLevel.Error;
    issue.message = message.match(/'(.+)'/)[1];
    issue.line = line;
    issue.column = column - issue.message.length + 1;
    issue.inputText = ctx.text;
    issue.sourceName = ctx.start.inputStream.sourceName;
    IssueService.instance.lastScope.push(issue);
    throw issue;
  }
}
