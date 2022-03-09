import { ParserRuleContext } from 'antlr4ts';
import chalk from 'chalk';
import fs from 'fs';
import { Tree } from '../tree/tree';
import { SourceRange } from '../util/source-range';
import { IssueLevel } from './issue-level';

export class Issue {
  message: string;
  level: IssueLevel;
  source: SourceRange;

  toString(): string {
    let code = this.source.sourceText.split('\n')[this.source.start.line - 1];
    if (!code && this.source.sourceName) {
      code = fs.readFileSync(this.source.sourceName).toString().split('\n')[
        this.source.start.line - 1
      ];
    }
    let message = '';
    if (this.level === IssueLevel.error) {
      message = chalk.redBright('error - ' + this.message);
    } else if (this.level === IssueLevel.warning) {
      message = chalk.yellowBright('warning - ' + this.message);
    }
    const source = chalk.cyan(this.source.sourceName);
    const line = chalk.cyan(':' + this.source.start.line);
    const column = chalk.cyan(':' + this.source.start.column);
    const lineNumberBeforeGrayed = `${this.source.start.line} | `;
    const lineNumber = chalk.gray(lineNumberBeforeGrayed);
    const caret =
      ' '.repeat(this.source.start.column + lineNumberBeforeGrayed.length - 1) +
      chalk.red('~'.repeat(Math.min(this.source.rangeText.length, code.length)));

    return `${message}\n${source}${line}${column}\n${lineNumber}${code}\n${caret}`;
  }

  error(): Error {
    return new Error(this.toString());
  }

  static fromSourceRange(source: SourceRange, level: IssueLevel, message: string): Issue {
    const issue = new Issue();
    issue.source = source;
    issue.level = level;
    issue.message = message;
    return issue;
  }

  static errorFromContext(ctx: ParserRuleContext, message: string): never {
    const issue = Issue.fromSourceRange(SourceRange.fromContext(ctx), IssueLevel.error, message);
    throw new Error(issue.toString());
  }

  static errorFromTree(tree: Tree, message: string): never {
    const issue = Issue.fromSourceRange(tree.sourceReference, IssueLevel.error, message);
    throw new Error(issue.toString());
  }

  static errorFromSourceReference(sourceReference: SourceRange, message: string): never {
    const issue = Issue.fromSourceRange(sourceReference, IssueLevel.error, message);
    throw new Error(issue.toString());
  }
}
