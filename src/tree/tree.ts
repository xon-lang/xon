import { ParserRuleContext } from 'antlr4ts';
import { Issue } from '../issue-service/issue';
import { IssueLevel } from '../issue-service/issue-level';
import { String } from '../lib/core';
import { DeclarationScope } from '../metadata/declaration/scope/declaration-scope';
import { Metadata } from '../metadata/metadata';
import { SourceRange } from '../util/source-range';

export abstract class Tree {
  metadata?: Metadata | null;
  ctx?: ParserRuleContext | null;

  sourceRange?: SourceRange | null;

  scope: DeclarationScope = new DeclarationScope();
  issues: Issue[] = [];

  parent?: Tree | null;
  children: Tree[] = [];

  addChildren(...children: (Tree | null)[]) {
    for (const tree of children.filter((x) => x)) {
      this.children.push(tree);
      tree.parent = this;
      tree.scope.parent = this.scope;
    }
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
