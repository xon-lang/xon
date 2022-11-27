import { ParserRuleContext, RecognitionException } from 'antlr4ts';
import { cyan, gray, red, redBright } from 'chalk';
import { IssueLevel } from '~/issue/issue-level';
import { Never2, String2 } from '~/lib/core';
import { Tree } from '~/tree/tree';
import { SourceSpan } from '~/util/source/source-span';

export class Issue extends Error {
  antlrError: RecognitionException | null = null;

  constructor(public sourceSpan: SourceSpan, public level: IssueLevel, public message: String2) {
    super(message);
  }

  toString(): String2 {
    const code = this.sourceSpan.source.lineText(this.sourceSpan.start.line);
    const message = redBright(this.message);
    const location = cyan(this.sourceSpan.source.location);
    const line = cyan(`:${this.sourceSpan.start.line}`);
    const column = cyan(`:${this.sourceSpan.start.column}`);
    const lineNumberBeforeGrayed = `${this.sourceSpan.start.line} | `;
    const lineNumber = gray(lineNumberBeforeGrayed);
    const caret =
      ' '.repeat(this.sourceSpan.start.column + lineNumberBeforeGrayed.length - 1) +
      red('~'.repeat(Math.min(this.sourceSpan.getText().length, code.length)));

    return `${message}\n${location}${line}${column}\n${lineNumber}${code}\n${caret}`;
  }

  static errorFromContext(ctx: ParserRuleContext, message: String2): Never2 {
    const issue = new Issue(SourceSpan.fromContext(ctx), IssueLevel.error, message);
    throw new Error(issue.toString());
  }

  static errorFromTree(tree: Tree, message: String2): Never2 {
    const issue = new Issue(tree.sourceSpan, IssueLevel.error, message);
    throw new Error(issue.toString());
  }
}
