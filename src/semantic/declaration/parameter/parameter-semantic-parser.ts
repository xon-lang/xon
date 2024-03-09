import {Nothing, nothing} from '../../../lib/core';
import {DeclarationNode} from '../../../parser/node/syntax/declaration/declaration-node';
import {SemanticContext} from '../../semantic-context';
import {ParameterSemantic, parameterSemantic} from './parameter-semantic';

export function parametersParse(
  context: SemanticContext,
  nodes: (DeclarationNode | Nothing)[],
): (ParameterSemantic | Nothing)[] {
  const semanticDeclarations = nodes.map((x) => parameterShallowParse(context, x));

  for (const node of nodes) {
    if (node) {
      parameterDeepParse(context, node);
    }
  }

  return semanticDeclarations;
}

function parameterShallowParse(context: SemanticContext, node: DeclarationNode | Nothing): ParameterSemantic | Nothing {
  if (!node) {
    return nothing;
  }

  const reference = context.createReference(node.id);
  const name = node.id.text;

  const declaration = parameterSemantic(reference, name);
  node.id.semantic = declaration;
  context.addDeclaration(declaration);

  return declaration;
}

function parameterDeepParse(context: SemanticContext, node: DeclarationNode): void {}
