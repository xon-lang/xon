import { ParserRuleContext } from 'antlr4ts';
import { Issue } from '../issue-service/issue';
import { IssueLevel } from '../issue-service/issue-level';
import { String } from '../lib/core';
import { DeclarationScope } from '../metadata/declaration/scope/declaration-scope';
import { SourceRange } from '../util/source-range';

export class Tree {
  scope: DeclarationScope = new DeclarationScope();
  ctx?: ParserRuleContext | null;
  sourceRange: SourceRange;
  parent?: Tree | null;
  children: Tree[] = [];
  issues: Issue[] = [];

  addChildren(...children: (Tree | null)[]) {
    children
      .filter((x) => x)
      .forEach((x) => {
        x.parent = this;
        this.children.push(x);

        x.scope.parent = this.scope;
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
}
