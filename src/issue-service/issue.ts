import { ParserRuleContext } from 'antlr4ts';
import chalk from 'chalk';
import { IssueLevel } from './issue-level';

export class Issue {
  message: string;
  level: IssueLevel;
  line: number;
  column: number;
  ctx: ParserRuleContext;

  toString(): string {
    const code = this.ctx.start.inputStream.toString().split('\n')[this.line - 1];
    const source = chalk.cyan(this.ctx.start.inputStream.sourceName);
    const line = chalk.yellow(this.line);
    const column = chalk.yellow(this.column);
    const message = `${chalk.redBright('error')} ${this.message}`;
    const lineNumberBeforeGrayed = `${this.line} | `;
    const lineNumber = chalk.gray(lineNumberBeforeGrayed);
    const caret = ' '.repeat(this.column + lineNumberBeforeGrayed.length) + chalk.red('^');

    return `${source}:${line}:${column} - ${message}\n${lineNumber}${code}\n${caret}`;
  }

  static fromContext(ctx: ParserRuleContext, level: IssueLevel, message: string): Issue {
    const issue = new Issue();
    issue.ctx = ctx;
    issue.level = level;
    issue.message = message;
    issue.line = ctx.start.line;
    issue.column = ctx.start.charPositionInLine;
    return issue;
  }

  static error(ctx: ParserRuleContext, message: string): never {
    const issue = Issue.fromContext(ctx, IssueLevel.Error, message);
    throw new Error(issue.toString());
  }
}
