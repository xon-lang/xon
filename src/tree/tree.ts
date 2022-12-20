import { ParserRuleContext } from 'antlr4ts';
import { Issue } from '~/issue/issue';
import { IssueLevel } from '~/issue/issue-level';
import { String2 } from '~/lib/core';
import { Metadata } from '~/metadata/metadata';
import { SourceSpan } from '~/source/source-span';

export abstract class Tree {
  metadata: Metadata | null = null;
  ctx: ParserRuleContext | null = null;
  sourceSpan!: SourceSpan;

  issues: Issue[] = [];

  parent: Tree | null = null;
  children: Tree[] = [];

  addChildren(...children: (Tree | null)[]): void {
    for (const tree of children) {
      if (tree) {
        this.children.push(tree);
        tree.parent = this;
      }
    }
  }

  allIssues(): Issue[] {
    return [...this.children.map((x) => x.allIssues()).flat(), ...this.issues];
  }

  addIssue(level: IssueLevel, message: String2): void {
    if (this.sourceSpan) {
      this.issues.push(new Issue(this.sourceSpan, level, message));
    }
  }

  addError(message: String2): void {
    this.addIssue(IssueLevel.error, message);
  }
}
