import { ParserRuleContext } from 'antlr4ts';
import { IssueLevel } from './issue-level';

export class Issue {
  public message: string;

  public level: IssueLevel;

  public line: number;

  public column: number;

  public context: ParserRuleContext;

  // public tree: BaseTree;

  public static fromContext(context: ParserRuleContext, message: string): Issue {
    const issue = new Issue();
    issue.context = context;
    issue.message = message;
    issue.level = IssueLevel.Error;
    issue.line = context.start.line;
    issue.column = context.start.charPositionInLine;
    return issue;
  }

  public toString(): string {
    return `${this.message} line ${this.line}:${this.column}`;
  }
}
