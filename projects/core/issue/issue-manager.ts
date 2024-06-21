import {Array2} from '../../lib/types';
import {TextRange} from '../util/resource/text/text-range';
import {TextResource} from '../util/resource/text/text-resource';
import {Issue, formatIssue} from './issue';
import {IssueSeverity} from './issue-level';
import {IssueMessage} from './issue-message';

export interface IssueManager {
  resource: TextResource;
  issues: Array2<Issue>;

  addError(node: TextRange, message: IssueMessage): Issue;
  log(issue: Issue): void;
}

export function createIssueManager(resource: TextResource, issues: Array2<Issue> = []): IssueManager {
  const manager: IssueManager = {
    resource,
    issues,

    addError(range: TextRange, message: IssueMessage): Issue {
      const issue = {
        level: IssueSeverity.ERROR,
        range,
        message,
      };

      this.issues.push(issue);
      this.log(issue);

      return issue;
    },

    log(issue: Issue): void {
      const error = formatIssue(this.resource, issue);
      console.error(error);
    },
  };

  return manager;
}
