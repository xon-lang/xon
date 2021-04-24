import { ParserRuleContext } from 'antlr4ts';
import chalk from 'chalk';
import { BaseTree } from '../tree/base.tree';
import { IssueLevel } from './issue-level';

export class Issue {
  public message: string;

  public level: IssueLevel;

  public line: number;

  public column: number;

  public ctx: ParserRuleContext;

  public static fromTree(tree: BaseTree, level: IssueLevel, message: string): Issue {
    const issue = new Issue();
    issue.ctx = tree.ctx;
    issue.level = level;
    issue.message = message;
    issue.line = tree.ctx.start.line;
    issue.column = tree.ctx.start.charPositionInLine;
    return issue;
  }

  public static errorFromTree(tree: BaseTree, message: string): Error {
    const issue = this.fromTree(tree, IssueLevel.Error, message);
    return issue.toError();
  }

  public toString(): string {
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

  public toError(): Error {
    return new Error(this.toString());
  }
}
