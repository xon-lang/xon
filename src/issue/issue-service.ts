import { ParserRuleContext } from 'antlr4ts';
import { Issue } from './issue';

export const issues: Issue[] = [];

export function addIssue(ctx: ParserRuleContext, message: string): void {
  issues.push(Issue.fromContext(ctx, message));
}
