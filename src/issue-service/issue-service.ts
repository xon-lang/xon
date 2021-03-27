import { BaseTree } from '../tree/base.tree';
import { Issue } from './issue';

export class IssueService {
  public static instance = new IssueService();

  public raiseError: boolean = false;

  public path: string;

  public issues: Issue[] = [];

  public add(tree: BaseTree, message: string): void {
    const issue = Issue.fromTree(tree, message);
    issue.path = this.path;
    this.issues.push(issue);

    if (this.raiseError) throw new Error(issue.toString());
  }
}
