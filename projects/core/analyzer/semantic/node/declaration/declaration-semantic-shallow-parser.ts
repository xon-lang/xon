import {Nothing, nothing} from '../../../../../lib/types';
import {DeclarationNode} from '../../../syntax/node/declaration/declaration-node';
import {SemanticAnalyzer} from '../../semantic-analyzer';
import {DeclarationSemantic, declarationSemantic} from './declaration-semantic';

export function declarationShallowParse(
  analyzer: SemanticAnalyzer,
  node: DeclarationNode,
): DeclarationSemantic | Nothing {
  if (!node.id) {
    return nothing;
  }

  const reference = analyzer.createReference(node.id);
  const documentation = node.documentation?.description?.text.setPadding(0).trim();
  const modifier = node.modifier?.text;
  const name = node.id.text;
  const declaration: DeclarationSemantic = declarationSemantic(reference, documentation, modifier, name);

  node.id.semantic = declaration;
  analyzer.declarationManager.add(declaration);

  return declaration;
}
