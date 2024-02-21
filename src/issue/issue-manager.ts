import { Source } from '../source/source';
import { Node } from '../syntax/node/node';
import { Issue, IssueType, formatIssue } from './issue';
import { IssueLevel } from './issue-level';
import { IssueMessage } from './issue-message';

export interface IssueManager {
  source: Source;
  issues: Issue[];
  issueType: IssueType;

  addError(node: Node, message: IssueMessage): Issue;
  log(issue: Issue): void;
}

export function createIssueManager(source: Source, issueType: IssueType, issues: Issue[] = []): IssueManager {
  const manager: IssueManager = {
    source,
    issues,
    issueType,

    addError(node: Node, message: IssueMessage): Issue {
      const issue = {
        type: this.issueType,
        level: IssueLevel.error,
        node,
        message,
      };

      this.issues.push(issue);

      return issue;
    },

    log(issue: Issue): void {
      const error = formatIssue(this.source, issue);
      console.error(error);
    },
  };

  return manager;
}