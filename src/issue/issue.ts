import { ParserRuleContext, RecognitionException } from 'antlr4ts';
import { IssueFormatter } from '~/issue/issue-formatter';
import { IssueLevel } from '~/issue/issue-level';
import { Never, String2 } from '~/lib/core';
import { SourceSpan } from '~/source/source-span';
import { Tree } from '~/tree/tree';

export class Issue extends Error {
  antlrError: RecognitionException | null = null;

  constructor(public sourceSpan: SourceSpan, public level: IssueLevel, public message: String2) {
    super(message);
  }

  static errorFromSourceSpan(sourceSpan: SourceSpan, message: String2): Never {
    const issue = new Issue(sourceSpan, IssueLevel.error, message);
    const formatter = new IssueFormatter(issue);
    throw new Error(formatter.toString());
  }

  static errorFromContext(ctx: ParserRuleContext, message: String2): Never {
    Issue.errorFromSourceSpan(SourceSpan.fromContext(ctx), message);
  }

  static errorFromTree(tree: Tree, message: String2): Never {
    Issue.errorFromSourceSpan(tree.sourceSpan, message);
  }
}
