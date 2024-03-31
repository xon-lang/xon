import {Array2, Nothing} from '../lib/core';
import {TextResource} from '../util/resource/text/text-resource';
import {TextResourceRange} from '../util/resource/text/text-resource-range';
import {Issue, formatIssue} from './issue';
import {IssueSeverity} from './issue-level';
import {IssueMessage} from './issue-message';

export interface IssueManager {
  resource: TextResource;
  issues: Array2<Issue>;

  addError(node: TextResourceRange, message: IssueMessage): Issue;
  log(issue: Issue): Nothing;
}

export function createIssueManager(resource: TextResource, issues: Array2<Issue> = []): IssueManager {
  const manager: IssueManager = {
    resource,
    issues,

    addError(range: TextResourceRange, message: IssueMessage): Issue {
      const issue = {
        level: IssueSeverity.ERROR,
        range,
        message,
      };

      this.issues.push(issue);
      // this.log(issue);

      return issue;
    },

    log(issue: Issue): Nothing {
      const error = formatIssue(this.resource, issue);
      console.error(error);
    },
  };

  return manager;
}
