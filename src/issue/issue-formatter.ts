import { cyan, gray, red, redBright } from 'chalk';
import { Issue } from '~/issue/issue';
import { String2 } from '~/lib/core';

export class IssueFormatter {
  constructor(public issue: Issue) {}

  toString(): String2 {
    const { message, sourceSpan } = this.issue;
    const code = sourceSpan.source.lineText(sourceSpan.start.lineIndex);
    const msg = redBright(message);
    const location = cyan(sourceSpan.source.location ?? '<code>');
    const line = cyan(`:${sourceSpan.start.line}`);
    const column = cyan(`:${sourceSpan.start.column}`);
    const lineNumberBeforeGrayed = `${sourceSpan.start.line} | `;
    const lineNumber = gray(lineNumberBeforeGrayed);
    const caret =
      ' '.repeat(sourceSpan.start.columnIndex + lineNumberBeforeGrayed.length) +
      red('~'.repeat(Math.min(sourceSpan.getText().length, code.length)));

    return `${msg}\n${location}${line}${column}\n${lineNumber}${code}\n${caret}`;
  }
}
