import { Issue } from '../../../issue-service/issue';
import { IssueLevel } from '../../../issue-service/issue-level';
import { MemberExpressionTree } from '../../../tree/expression/member/member-expression-tree';
import { AttributeDeclarationMetadata } from '../../declaration/attribute/attribute-declaration-metadata';
import { DeclarationScope } from '../../scope/declaration-scope';
import { ExpressionMetadata } from '../expression-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

export class MemberExpressionMetadata implements ExpressionMetadata {
  constructor(private tree: MemberExpressionTree, private scope: DeclarationScope) {}

  attributes(): AttributeDeclarationMetadata[] {
    const instance = getExpressionMetadata(this.tree.instance, this.scope);
    const members = instance.attributes().filter((x) => x.name === this.tree.id.name.text);
    if (members.length > 1) {
      const issues = members.map((x) =>
        Issue.fromSourceRange(x.sourceReference, IssueLevel.Error, '').toString(),
      );
      throw new Error(`Too many '${this.tree.id.name.text}' members found:\n${issues.join('\n')}`);
    }
    if (!members.length) {
      throw new Error(`Member '${this.tree.id.name.text}' not found`);
    }
    return members[0].attributes();
  }

  is(metadata: ExpressionMetadata): boolean {
    throw new Error('Not implemented');
  }
}
