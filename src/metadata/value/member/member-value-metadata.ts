import { MemberExpressionTree } from '../../../tree/expression/member/member-expression-tree';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { ValueMetadata } from '../value-metadata';

export class MemberValueMetadata extends ValueMetadata {
  constructor(private tree: MemberExpressionTree, private scope: DeclarationScope) {
    super();
  }

  declaration(): DeclarationScope {
    throw new Error('Not implemented');
    // const instance = getExpressionMetadata(this.tree.instance, this.scope);
    // const members = instance.context().filter((x) => x.name === this.tree.name.text);
    // if (members.length > 1) {
    //   const issues = members.map((x) =>
    //     Issue.fromSourceRange(x.sourceRange, IssueLevel.error, '').toString(),
    //   );
    //   throw new Error(`Too many '${this.tree.name.text}' members found:\n${issues.join('\n')}`);
    // }
    // if (!members.length) {
    //   throw new Error(`Member '${this.tree.name.text}' not found`);
    // }
    // return members[0].attributes();
  }
}
