import { Issue } from '../../../issue-service/issue';
import { IssueLevel } from '../../../issue-service/issue-level';
import { MemberExpressionTree } from '../../../tree/expression/member/member-expression-tree';
import { DeclarationScope } from '../../scope/declaration-scope';
import { DeclarationMetadata } from '../../declaration/declaration-metadata';
import { ExpressionMetadata } from '../expression-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

export class MemberExpressionMetadata implements ExpressionMetadata {
  constructor(private node: MemberExpressionTree, private scope: DeclarationScope) {}

  attributes(): DeclarationMetadata[] {
    const instance = getExpressionMetadata(this.node.instance, this.scope);
    const members = instance.attributes().filter((x) => x.name === this.node.id.name.text);
    if (members.length > 1) {
      const issues = members.map((x) =>
        Issue.fromSourceReference(x.sourceReference, IssueLevel.Error, '').toString(),
      );
      throw new Error(
        `Too many '${this.node.id.name.text}' members found:\n${issues.join('\n')}`,
      );
    }
    if (!members.length) {
      throw new Error(`Member '${this.node.id.name.text}' not found`);
    }
    return members[0].attributes();
  }

  is(metadata: ExpressionMetadata): boolean {
    throw new Error('Not implemented');
  }
}
