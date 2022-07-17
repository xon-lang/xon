import { ParserRuleContext } from 'antlr4ts';
import { Issue } from '../issue-service/issue';
import { IssueLevel } from '../issue-service/issue-level';
import { None, String } from '../lib/core';
import { SourceRange } from '../util/source-range';

export class Tree {
  ctx: ParserRuleContext | None;
  sourceRange: SourceRange;
  parent?: Tree | None;
  children: Tree[] = [];
  issues: Issue[] = [];

  addChildren(...children: (Tree | None)[]) {
    children
      .filter((x) => x?.sourceRange)
      .forEach((x) => {
        x.parent = this;
        this.children.push(x);
      });
  }

  allIssues(): Issue[] {
    return [...this.children.map((x) => x.allIssues()).flat(), ...this.issues];
  }

  addIssue(level: IssueLevel, message: String) {
    this.issues.push(new Issue(this.sourceRange, level, message));
  }

  addError(message: String) {
    this.addIssue(IssueLevel.error, message);
  }

  toString() {
    return this.sourceRange.rangeText;
  }
}
