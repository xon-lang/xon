import { IssueLevel } from '~/issue/issue-level';
import { Node } from '~/parser/node/node';
import { IssueMessage } from './issue-message';

// export class Issue {
//   // public actual: String2
//   // public expect: String2
//   constructor(public node: Node, public level: IssueLevel, public message: String2) {}
//   // static errorFromSourceSpan(sourceSpan: SourceSpan, message: String2): Never {
//   //   const issue = new Issue(sourceSpan, IssueLevel.error, message);
//   //   const formatter = new IssueFormatter(issue);
//   //   throw new Error(formatter.toString());
//   // }
//   // static errorFromContext(ctx: ParserRuleContext, message: String2): Never {
//   //   Issue.errorFromSourceSpan(SourceSpan.fromContext(ctx), message);
//   // }
//   // static errorFromTree(node: Node, message: String2): Never {
//   //   Issue.errorFromSourceSpan(node.sourceSpan, message);
//   // }
// }

// formatter
// export class IssueFormatter {
//   constructor(public issue: Issue) {}

//   toString(): String2 {
//     const { message, node: sourceSpan } = this.issue;
//     const text = sourceSpan.source.lineText(sourceSpan.start.lineIndex);
//     const msg = redBright(message);
//     const location = cyan(sourceSpan.source.location ?? '<code>');
//     const line = cyan(`:${sourceSpan.start.line}`);
//     const column = cyan(`:${sourceSpan.start.column}`);
//     const lineNumberBeforeGrayed = `${sourceSpan.start.line} | `;
//     const lineNumber = gray(lineNumberBeforeGrayed);
//     const caret =
//       ' '.repeat(sourceSpan.start.columnIndex + lineNumberBeforeGrayed.length) +
//       red('~'.repeat(Math.min(sourceSpan.getText().length, code.length)));

//     return `${msg}\n${location}${line}${column}\n${lineNumber}${code}\n${caret}`;
//   }
// }

export interface Issue {
  node: Node;
  level: IssueLevel;
  message: IssueMessage;
}

export function createErrorIssue(node: Node, message: IssueMessage): Issue {
  return {
    node,
    level: IssueLevel.error,
    message,
  };
}
