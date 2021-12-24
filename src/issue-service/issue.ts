import { ParserRuleContext } from 'antlr4ts';
import chalk from 'chalk';
import { Node } from '../ast/node';
import { SourceReference } from '../ast/util/source-reference';
import { IssueLevel } from './issue-level';

export class Issue {
  message: string;
  level: IssueLevel;
  line: number;
  column: number;
  inputText: string;
  sourceName: string;

  toString(): string {
    const code = this.inputText.split('\n')[this.line - 1];
    const source = chalk.cyan(this.sourceName);
    const line = chalk.yellow(this.line);
    const column = chalk.yellow(this.column);
    const message = `${chalk.redBright('error')} ${this.message}`;
    const lineNumberBeforeGrayed = `${this.line} | `;
    const lineNumber = chalk.gray(lineNumberBeforeGrayed);
    const caret = ' '.repeat(this.column + lineNumberBeforeGrayed.length) + chalk.red('^');

    return `${source}:${line}:${column} - ${message}\n${lineNumber}${code}\n${caret}`;
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

  static errorFromNode(node: Node, message: string): never {
    const issue = Issue.fromSourceReference(node.sourceReference, IssueLevel.Error, message);
    throw new Error(issue.toString());
  }
}
