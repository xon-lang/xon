import { BaseTree } from '../tree/base.tree';
import { IssueLevel } from './issue-level';

export class Issue {
  public message: string;

  public level: IssueLevel;

  public path: string;

  public line: number;

  public column: number;

  public tree: BaseTree;

  public static fromTree(tree: BaseTree, message: string): Issue {
    const issue = new Issue();
    issue.tree = tree;
    issue.message = message;
    issue.level = IssueLevel.Error;
    issue.line = tree.ctx.start.line;
    issue.column = tree.ctx.start.charPositionInLine;
    return issue;
  }

  public toString(): string {
    return this.path
      ? `${this.message} ${this.path}:${this.line}:${this.column + 1}`
      : `${this.message} line ${this.line}:${this.column + 1}`;
  }
}
