import { BaseTree } from '../tree/base.tree';
import { IssueLevel } from './issue-level';

export class Issue {
  public message: string;

  public level: IssueLevel;

  public path: string;

  public line: number;

  public column: number;

  public tree?: BaseTree;

  public static fromTree(tree: BaseTree, path: string, level: IssueLevel, message: string): Issue {
    const issue = new Issue();
    issue.tree = tree;
    issue.path = path;
    issue.level = level;
    issue.message = message;
    issue.line = tree.ctx.start.line;
    issue.column = tree.ctx.start.charPositionInLine;
    return issue;
  }

  public toString(): string {
    const codeLine = this.tree?.ctx?.start.inputStream.toString().split('\n')[this.line - 1];
    // eslint-disable-next-line @typescript-eslint/dot-notation
    const source = this.path || global['currentDefinitionFilePath'] || 'line';

    if (codeLine)
      return `${this.message}\n${source}:${this.line}:${this.column}\n${codeLine}\n${' '.repeat(
        this.column,
      )}^`;

    return `${this.message}. ${source}:${this.line}:${this.column}`;
  }

  public toError(): Error {
    return new Error(this.toString());
  }
}
