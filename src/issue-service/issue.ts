import { ParserRuleContext } from 'antlr4ts';
import chalk from 'chalk';
import fs from 'fs';
import { Tree } from '../tree/tree';
import { SourceReference } from '../util/source-reference';
import { IssueLevel } from './issue-level';

export class Issue {
  message: string;
  level: IssueLevel;
  line: number;
  column: number;
  inputText: string;
  sourceName: string;

  toString(): string {
    let code = this.inputText.split('\n')[this.line - 1];
    if (!code && this.sourceName) {
      code = fs.readFileSync(this.sourceName).toString().split('\n')[this.line - 1];
    }
    const source = chalk.cyan(this.sourceName);
    const line = chalk.cyan(':' + this.line);
    const column = chalk.cyan(':' + this.column);
    const message = `${chalk.redBright('error')} ${this.message}`;
    const lineNumberBeforeGrayed = `${this.line} | `;
    const lineNumber = chalk.gray(lineNumberBeforeGrayed);
    const caret = ' '.repeat(this.column + lineNumberBeforeGrayed.length - 1) + chalk.red('^');

    return `${source}${line}${column} - ${message}\n${lineNumber}${code}\n${caret}`;
  }

  static fromSourceReference(ref: SourceReference, level: IssueLevel, message: string): Issue {
    const issue = new Issue();
    issue.level = level;
    issue.message = message;
    issue.line = ref.line;
    issue.column = ref.column;
    issue.inputText = ref.inputText;
    issue.sourceName = ref.sourceName;
    return issue;
  }

  static errorFromContext(ctx: ParserRuleContext, message: string): never {
    const issue = Issue.fromSourceReference(
      SourceReference.fromContext(ctx),
      IssueLevel.Error,
      message,
    );
    throw new Error(issue.toString());
  }

  static errorFromTree(tree: Tree, message: string): never {
    const issue = Issue.fromSourceReference(tree.sourceReference, IssueLevel.Error, message);
    throw new Error(issue.toString());
  }

  static errorFromSourceReference(sourceReference: SourceReference, message: string): never {
    const issue = Issue.fromSourceReference(sourceReference, IssueLevel.Error, message);
    throw new Error(issue.toString());
  }
}
