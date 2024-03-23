import {Array2, Nothing} from '../lib/core';
import {Source} from '../source/source';
import {SourceRange} from '../source/source-range';
import {Issue, formatIssue} from './issue';
import {IssueSeverity} from './issue-level';
import {IssueMessage} from './issue-message';

export interface IssueManager {
  source: Source;
  issues: Array2<Issue>;

  addError(node: SourceRange, message: IssueMessage): Issue;
  log(issue: Issue): Nothing;
}

export function createIssueManager(source: Source, issues: Array2<Issue> = []): IssueManager {
  const manager: IssueManager = {
    source,
    issues,

    addError(range: SourceRange, message: IssueMessage): Issue {
      const issue = {
        level: IssueSeverity.ERROR,
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
