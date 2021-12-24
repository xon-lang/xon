import { Issue } from './issue';

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
}
