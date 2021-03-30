import { BaseTree } from '../tree/base.tree';
import { Issue } from './issue';
import { IssueLevel } from './issue-level';

export class IssueService {
  public static instance = new IssueService();

  public raiseWarning: boolean = true;

  private scopes: Issue[][] = [[]];

  private paths: string[] = [];

  public get lastScope(): Issue[] {
    return this.scopes[this.scopes.length - 1];
  }

  public get lastPath(): string {
    return this.paths[this.paths.length - 1];
  }

  public pushScope(path?: string): void {
    this.paths.unshift(path);
    this.scopes.unshift([]);
  }

  public popScope(): void {
    this.paths.shift();
    this.scopes.shift();
  }

  public add(tree: BaseTree, level: IssueLevel, message: string): Issue {
    const issue = Issue.fromTree(tree, this.lastPath, level, message);
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
