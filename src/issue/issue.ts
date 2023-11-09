import { IssueLevel } from '~/issue/issue-level';
import { String2 } from '~/lib/core';
import { Node } from '~/parser/lexical/node';

export class Issue {
  // public actual: String2
  // public expect: String2

  constructor(public node: Node, public level: IssueLevel, public message: String2) {}

  // static errorFromSourceSpan(sourceSpan: SourceSpan, message: String2): Never {
  //   const issue = new Issue(sourceSpan, IssueLevel.error, message);
  //   const formatter = new IssueFormatter(issue);
  //   throw new Error(formatter.toString());
  // }

  // static errorFromContext(ctx: ParserRuleContext, message: String2): Never {
  //   Issue.errorFromSourceSpan(SourceSpan.fromContext(ctx), message);
  // }

  // static errorFromTree(node: Node, message: String2): Never {
  //   Issue.errorFromSourceSpan(node.sourceSpan, message);
  // }
}
