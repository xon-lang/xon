import { ParameterStatementTree } from '../../../tree/statement/parameter/parameter-statement-tree';
import { getDeclarationMetadata } from '../../declaration/declaration-metadata-helper';
import { DeclarationScope } from '../../scope/declaration-scope';
import { StatementMetadata } from '../statement-metadata';

export class ParameterStatementMetadata implements StatementMetadata {
  constructor(private tree: ParameterStatementTree, private scope: DeclarationScope) {
    if (tree.parameter.parameters.length) {
      for (const parameter of tree.parameter.parameters) {
        const declaration = getDeclarationMetadata(parameter, scope);
        scope.add(declaration);
      }
    } else {
      const declaration = getDeclarationMetadata(tree.parameter, scope);
      scope.add(declaration);
    }
  }
}
