import { ParserRuleContext } from 'antlr4ts';
import { Issue, IssueLevel } from '~/issue';
import { String2 } from '~/lib';
import { DeclarationScope, Metadata } from '~/metadata';
import { SourceRange } from '~/util';

export abstract class Tree {
  metadata?: Metadata | null;
  ctx?: ParserRuleContext | null;

  sourceRange?: SourceRange | null;

  scope: DeclarationScope = new DeclarationScope();
  issues: Issue[] = [];

  parent?: Tree | null;
  children: Tree[] = [];

  addChildren(...children: (Tree | null)[]): void {
    for (const tree of children.filter((x) => x)) {
      this.children.push(tree);
      tree.parent = this;
      tree.scope.parent = this.scope;
    }
  }

  allIssues(): Issue[] {
    return [...this.children.map((x) => x.allIssues()).flat(), ...this.issues];
  }

  addIssue(level: IssueLevel, message: String2): void {
    this.issues.push(new Issue(this.sourceRange, level, message));
  }

  addError(message: String2): void {
    this.addIssue(IssueLevel.error, message);
  }
}
