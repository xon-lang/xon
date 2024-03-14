import {Nothing} from '../lib/core';
import {Source} from '../source/source';
import {SourceRange} from '../source/source-range';
import {Issue, formatIssue} from './issue';
import {IssueLevel} from './issue-level';
import {IssueMessage} from './issue-message';

export interface IssueManager {
  source: Source;
  issues: Issue[];

  addError(node: SourceRange, message: IssueMessage): Issue;
  log(issue: Issue): Nothing;
}

export function createIssueManager(source: Source, issues: Issue[] = []): IssueManager {
  const manager: IssueManager = {
    source,
    issues,

    addError(range: SourceRange, message: IssueMessage): Issue {
      const issue = {
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
