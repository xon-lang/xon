import {Nothing, nothing} from '../../../../lib/types';
import {DeclarationNode} from '../../syntax/node/declaration/declaration-node';
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
  // todo replace with DocumentationSemantic
  const documentation = node.documentation?.description?.text;
  const modifier = node.modifier?.text;
  const name = node.id.text;
  const declaration: DeclarationSemantic = declarationSemantic(reference, documentation, modifier, name);

  node.id.semantic = declaration;
  context.declarationManager.add(declaration);

  return declaration;
}
