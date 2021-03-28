import { BaseTree } from '../tree/base.tree';
import { Issue } from './issue';
import { IssueLevel } from './issue-level';

export class IssueService {
  public static instance = new IssueService();

  public raiseWarning: boolean = false;

  public path: string;

  public issues: Issue[] = [];

  public add(tree: BaseTree, level: IssueLevel, message: string): Issue {
    const issue = Issue.fromTree(tree, this.path || 'line', level, message);
    this.issues.push(issue);
    return issue;
  }

  public addWarning(tree: BaseTree, message: string): void {
    const issue = this.add(tree, IssueLevel.Warning, message);

    if (this.raiseWarning) throw new Error(issue.toString());
  }

  public addError(tree: BaseTree, message: string): Error {
    const issue = this.add(tree, IssueLevel.Error, message);
    throw new Error(issue.toString());
  }
}
