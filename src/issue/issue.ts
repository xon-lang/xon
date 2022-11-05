import { IssueLevel } from '@/issue/issue-level';
import { String2 } from '@/lib/core';
import { Tree } from '@/tree/tree';
import { SourceRange } from '@/util/source-range';
import { ParserRuleContext, RecognitionException } from 'antlr4ts';
import chalk from 'chalk';
import fs from 'fs';

export class Issue extends Error {
  antlrError?: RecognitionException | null;

  constructor(public sourceRange: SourceRange, public level: IssueLevel, public message: String2) {
    super(message);
  }

  toString(): String2 {
    let code = this.sourceRange.sourceText.split('\n')[this.sourceRange.start.line - 1];
    if (!code && this.sourceRange.sourceName && this.sourceRange.sourceName !== '<unknown>') {
      code = fs.readFileSync(this.sourceRange.sourceName).toString().split('\n')[
        this.sourceRange.start.line - 1
      ];
    }
    const message = chalk.redBright(this.message);
    const source = chalk.cyan(this.sourceRange.sourceName);
    const line = chalk.cyan(':' + this.sourceRange.start.line);
    const column = chalk.cyan(':' + this.sourceRange.start.column);
    const lineNumberBeforeGrayed = `${this.sourceRange.start.line} | `;
    const lineNumber = chalk.gray(lineNumberBeforeGrayed);
    const caret =
      ' '.repeat(this.sourceRange.start.column + lineNumberBeforeGrayed.length - 1) +
      chalk.red('~'.repeat(Math.min(this.sourceRange.rangeText.length, code.length)));

    return `${message}\n${source}${line}${column}\n${lineNumber}${code}\n${caret}`;
  }

  static errorFromContext(ctx: ParserRuleContext, message: String2): never {
    const issue = new Issue(SourceRange.fromContext(ctx), IssueLevel.error, message);
    throw new Error(issue.toString());
  }

  static errorFromTree(tree: Tree, message: String2): never {
    const issue = new Issue(tree.sourceRange, IssueLevel.error, message);
    throw new Error(issue.toString());
  }
}
