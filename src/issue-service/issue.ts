import { ParserRuleContext } from 'antlr4ts';
import chalk from 'chalk';
import { Node } from '../ast/node';
import { IssueLevel } from './issue-level';

export class Issue {
  message: string;
  level: IssueLevel;
  line: number;
  column: number;
  ctx: ParserRuleContext;

  static fromContext(ctx: ParserRuleContext, level: IssueLevel, message: string): Issue {
    const issue = new Issue();
    issue.ctx = ctx;
    issue.level = level;
    issue.message = message;
    issue.line = ctx.start.line;
    issue.column = ctx.start.charPositionInLine;
    return issue;
  }

  static errorFromTree(tree: Node, message: string): Error {
    const issue = this.fromContext(tree.ctx, IssueLevel.Error, message);
    return issue.toError();
  }

  static errorFromContext(ctx: ParserRuleContext, message: string): Error {
    const issue = this.fromContext(ctx, IssueLevel.Error, message);
    return issue.toError();
  }

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

  toError(): Error {
    return new Error(this.toString());
  }
}
