import {Nothing} from '../lib/core';
import {Source} from '../source/source';
import {SourceRange} from '../source/source-range';
import {Issue, IssueType, formatIssue} from './issue';
import {IssueLevel} from './issue-level';
import {IssueMessage} from './issue-message';

export interface IssueManager {
  source: Source;
  issues: Issue[];
  issueType: IssueType;

  addError(node: SourceRange, message: IssueMessage): Issue;
  log(issue: Issue): Nothing;
}

export function createIssueManager(source: Source, issueType: IssueType, issues: Issue[] = []): IssueManager {
  const manager: IssueManager = {
    source,
    issues,
    issueType,

    addError(range: SourceRange, message: IssueMessage): Issue {
      const issue = {
        type: this.issueType,
        level: IssueLevel.ERROR,
        range,
        message,
      };

      this.issues.push(issue);
      this.log(issue);

      return issue;
    },

    log(issue: Issue): Nothing {
      const error = formatIssue(this.source, issue);
      console.error(error);
    },
  };

  return manager;
}
