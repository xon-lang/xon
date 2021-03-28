import { BaseTree } from '../tree/base.tree';
import { IssueLevel } from './issue-level';

export class Issue {
  public message: string;

  public level: IssueLevel;

  public path: string;

  public line: number;

  public column: number;

  public tree: BaseTree;

  public static fromTree(tree: BaseTree, path: string, level: IssueLevel, message: string): Issue {
    const issue = new Issue();
    issue.tree = tree;
    issue.path = path;
    issue.level = level;
    issue.message = message;
    issue.line = tree.ctx.start.line;
    issue.column = tree.ctx.start.charPositionInLine;
    return issue;
  }

  public toString(): string {
    return `${this.message} ${this.path}:${this.line}:${this.column + 1}`;
  }
}
