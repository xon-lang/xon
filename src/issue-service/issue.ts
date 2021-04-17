import { ParserRuleContext } from 'antlr4ts';
import chalk from 'chalk';
import { BaseTree } from '../tree/base.tree';
import { IssueLevel } from './issue-level';

export class Issue {
  public message: string;

  public level: IssueLevel;

  public path: string;

  public line: number;

  public column: number;

  public ctx?: ParserRuleContext;

  public tree?: BaseTree;

  public static fromTree(tree: BaseTree, path: string, level: IssueLevel, message: string): Issue {
    const issue = new Issue();
    issue.tree = tree;
    issue.path = path;
    issue.level = level;
    issue.message = message;
    issue.line = tree.ctx.start.line;
    issue.column = tree.ctx.start.charPositionInLine;
    return issue;
  }

  public static errorFromTree(tree: BaseTree, message: string): Issue {
    const issue = new Issue();
    issue.tree = tree;
    issue.level = IssueLevel.Error;
    issue.message = message;
    issue.line = tree.ctx?.start.line;
    issue.column = tree.ctx?.start.charPositionInLine;
    return issue;
  }

  public toString(): string {
    const code = (this.ctx || this.tree?.ctx)?.start.inputStream.toString().split('\n')[
      this.line - 1
    ];
    // eslint-disable-next-line @typescript-eslint/dot-notation
    const source = chalk.cyan(this.path || global['currentDefinitionFilePath'] || 'line');
    const line = chalk.yellow(this.line ? `:${this.line}` : '');
    const column = chalk.yellow(this.column ? `:${this.column}` : '');
    const message = `${chalk.redBright('error')} ${this.message}`;
    const lineNumberBeforeGrayed = `${this.line} | `;
    const lineNumber = chalk.gray(lineNumberBeforeGrayed);
    const caret = ' '.repeat(this.column + lineNumberBeforeGrayed.length) + chalk.red('^');

    return `${source}${line}${column} - ${message}\n${lineNumber}${code}\n${caret}`;
  }

  public toError(): Error {
    return new Error(this.toString());
  }
}
