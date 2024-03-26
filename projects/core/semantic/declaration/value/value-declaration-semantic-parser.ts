import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import {Array2, Nothing, nothing} from '../../../lib/core';
import {DeclarationNode} from '../../../parser/node/declaration/declaration-node';
import {rangeFromNodes} from '../../../util/resource/text/text-resource-range';
import {$Semantic, semanticIs} from '../../semantic';
import {SemanticContext} from '../../semantic-context';
import {typeSemanticParse} from '../../type/type-semantic-parser';
import {valueSemanticParse} from '../../value/value-semantic-parser';
import {declarationsParse} from '../declaration-semantic-parser';
import {ValueDeclarationSemantic} from './value-declaration-semantic';

export function valueDeclarationDeepParse(
  context: SemanticContext,
  node: DeclarationNode,
): ValueDeclarationSemantic | Nothing {
  const semantic = node.id.semantic;

  if (!semanticIs<ValueDeclarationSemantic>(semantic, $Semantic.VALUE_DECLARATION)) {
    return nothing;
  }

  const childContext = context.createChildContext();

  genericsParse(childContext, semantic, node);
  //   parametersParse(childContext, semantic, node);
  typeParse(childContext, semantic, node);
  valueParse(childContext, semantic, node);
  attributesParse(childContext, semantic, node);

  return semantic;
}

function genericsParse(
  context: SemanticContext,
  declaration: ValueDeclarationSemantic,
  node: DeclarationNode,
): Nothing {
  if (!node.generics) {
    return;
  }

  // todo remove this hack 'as Array2<ValueDeclarationSemantic>'
  declaration.generics = declarationsParse(context, node.generics) as Array2<ValueDeclarationSemantic>;
}

function typeParse(context: SemanticContext, declaration: ValueDeclarationSemantic, node: DeclarationNode): Nothing {
  if (!node.type) {
    return;
  }

  const type = typeSemanticParse(context, node.type);

  if (type) {
    declaration.type = type;
  } else {
    context.issueManager.addError(node.type.range, ISSUE_MESSAGE.cannotResolveType());
  }
}

function valueParse(context: SemanticContext, declaration: ValueDeclarationSemantic, node: DeclarationNode): Nothing {
  if (!node.value) {
    return;
  }

  // todo depends on declaration kind (e.g. generic or const) ???
  const value = valueSemanticParse(context, node.value);

  if (!declaration.type) {
    if (value?.type) {
      declaration.type = value.type;
    }
  } else if (!value?.type || !value.type.is(declaration.type)) {
    context.issueManager.addError(node.value.range, ISSUE_MESSAGE.wrongType());
  }
}

function attributesParse(
  context: SemanticContext,
  declaration: ValueDeclarationSemantic,
  node: DeclarationNode,
): Nothing {
  if (node.attributes.length > 0) {
    const range = rangeFromNodes(node.attributes.map((x) => x.id));
  }
}
