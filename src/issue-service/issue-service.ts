import { BaseTree } from '../tree/base.tree';
import { Issue } from './issue';
import { IssueLevel } from './issue-level';

export class IssueService {
  public static instance = new IssueService();

  public raiseWarning: boolean = true;

  private scopes: Issue[][] = [[]];

  public get lastScope(): Issue[] {
    return this.scopes[this.scopes.length - 1];
  }

  public pushScope(): void {
    this.scopes.unshift([]);
  }

  public popScope(): void {
    this.scopes.shift();
  }

  public add(tree: BaseTree, level: IssueLevel, message: string): Issue {
    const issue = Issue.fromTree(tree, level, message);
    this.lastScope.push(issue);
    return issue;
  }

  public addWarning(tree: BaseTree, issueMessage: string, resolveMessage: string): void {
    const issue = this.add(tree, IssueLevel.Warning, `${issueMessage}. ${resolveMessage}.`);
    if (this.raiseWarning) throw issue.toError();
  }

  public addError(tree: BaseTree, issueMessage: string, resolveMessage: string): Error {
    const issue = this.add(tree, IssueLevel.Error, `${issueMessage}. ${resolveMessage}.`);
    throw issue.toError();
  }
}
