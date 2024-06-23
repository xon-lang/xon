import {Nothing, nothing} from '../../../../lib/types';
import {DocumentationNode} from '../../syntax/documentation/documentation-node';
import {$Node, is} from '../../syntax/node';
import {DeclarationNode} from '../../syntax/node/declaration/declaration-node';
import {StatementNode} from '../../syntax/statement/statement-node';
import {SemanticAnalyzerContext} from '../semantic-analyzer-context';
import {DeclarationSemantic, declarationSemantic} from './declaration-semantic';

export function declarationShallowParse(
  context: SemanticAnalyzerContext,
  node: DeclarationNode,
): DeclarationSemantic | Nothing {
  if (!node.id) {
    return nothing;
  }

  const reference = context.createReference(node.id);
  const documentation = getDocumentation(node);
  const modifier = node.modifier?.text;
  const name = node.id.text;
  const declaration: DeclarationSemantic = declarationSemantic(reference, documentation, modifier, name);

  node.id.semantic = declaration;
  context.declarationManager.add(declaration);

  return declaration;
}

export function getDocumentation(node: DeclarationNode): DocumentationNode | Nothing {
  if (is<StatementNode>(node.parent, $Node.STATEMENT)) {
    return node.parent.hiddenNodes?.last<DocumentationNode>((x) =>
      is<DocumentationNode>(x, $Node.DOCUMENTATION),
    );
  }

  return nothing;
}
