import { ParserRuleContext } from 'antlr4ts';
import chalk from 'chalk';
import fs from 'fs';
import { String } from '../lib/core';
import { Tree } from '../tree/tree';
import { SourceRange } from '../util/source-range';
import { IssueLevel } from './issue-level';
import { IssueService } from './issue-service';

export class Issue {
  message: String;
  level: IssueLevel;
  source: SourceRange;

  toString(): String {
    let code = this.source.sourceText.split('\n')[this.source.start.line - 1];
    if (!code && this.source.sourceName) {
      code = fs.readFileSync(this.source.sourceName).toString().split('\n')[
        this.source.start.line - 1
      ];
    }
    const message = chalk.redBright(this.message);
    //   let message = '';
    // if (this.level === IssueLevel.error) {
    //   message = chalk.redBright('error - ' + this.message);
    // } else if (this.level === IssueLevel.warning) {
    //   message = chalk.yellowBright('warning - ' + this.message);
    // }
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
    IssueService.issues.push(this);
    return new Error(this.toString());
  }

  static fromSourceRange(source: SourceRange, level: IssueLevel, message: String): Issue {
    const issue = new Issue();
    issue.source = source;
    issue.level = level;
    issue.message = message;
    return issue;
  }

  static errorFromContext(ctx: ParserRuleContext, message: String): never {
    const issue = Issue.fromSourceRange(SourceRange.fromContext(ctx), IssueLevel.error, message);
    throw issue.error();
  }

  static errorFromTree(tree: Tree, message: String): never {
    const issue = Issue.fromSourceRange(tree.sourceRange, IssueLevel.error, message);
    throw issue.error();
  }
}
