import { Node } from '../ast/node';
import { Issue } from './issue';
import { IssueLevel } from './issue-level';

export class IssueService {
  static instance = new IssueService();

  raiseWarning: boolean = true;
  private scopes: Issue[][] = [[]];

  get lastScope(): Issue[] {
    return this.scopes[this.scopes.length - 1];
  }

  pushScope(): void {
    this.scopes.unshift([]);
  }

  popScope(): void {
    this.scopes.shift();
  }

  add(tree: Node, level: IssueLevel, message: string): Issue {
    const issue = Issue.fromContext(tree.ctx, level, message);
    this.lastScope.push(issue);
    return issue;
  }

  addWarning(tree: Node, issueMessage: string, resolveMessage: string): void {
    const issue = this.add(tree, IssueLevel.Warning, `${issueMessage}. ${resolveMessage}.`);
    if (this.raiseWarning) throw issue.toError();
  }

  addError(tree: Node, issueMessage: string, resolveMessage: string): Error {
    const issue = this.add(tree, IssueLevel.Error, `${issueMessage}. ${resolveMessage}.`);
    throw issue.toError();
  }
}
