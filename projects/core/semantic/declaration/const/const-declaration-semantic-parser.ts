import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import {Nothing, nothing} from '../../../lib/core';
import {Node} from '../../../parser/node/node';
import {DeclarationNode} from '../../../parser/node/syntax/declaration/declaration-node';
import {rangeFromNodes} from '../../../source/source-range';
import {$Semantic, semanticIs} from '../../semantic';
import {SemanticContext} from '../../semantic-context';
import {typeSemanticParse} from '../../type/type-semantic-parser';
import {valueSemanticParse} from '../../value/value-semantic-parser';
import {declarationsParse} from '../declaration-semantic-parser';
import {ValueDeclarationSemantic} from '../value/value-declaration-semantic';
import {ConstDeclarationSemantic} from './const-declaration-semantic';

export function constDeclarationDeepParse(
  context: SemanticContext,
  node: DeclarationNode,
): ConstDeclarationSemantic | Nothing {
  const semantic = node.id.semantic;

  if (!semanticIs<ConstDeclarationSemantic>(semantic, $Semantic.CONST_DECLARATION)) {
    return nothing;
  }

  const childContext = context.createChildContext();

  if (node.generics) {
    genericsParse(childContext, semantic, node.generics);
  }

  // if (node.parameters) {
  //   parametersParse(childContext, semantic, node.parameters);
  // }

  if (node.type) {
    typeParse(childContext, semantic, node.type);
  }

  if (node.value) {
    valueParse(childContext, semantic, node.value);
  }

  if (node.attributes.length > 0) {
    attributesParse(childContext, semantic, node.attributes);
  }

  return semantic;
}

function genericsParse(
  context: SemanticContext,
  declaration: ConstDeclarationSemantic,
  nodes: (DeclarationNode | Nothing)[],
): Nothing {
  // todo remove this hack 'as ValueDeclarationSemantic[]'
  declaration.generics = declarationsParse(context, nodes) as ValueDeclarationSemantic[];
}

function typeParse(context: SemanticContext, declaration: ConstDeclarationSemantic, node: Node): Nothing {
  typeSemanticParse(context, node);
  context.issueManager.addError(node.range, ISSUE_MESSAGE.noTypeRequiredForConst());
}

function valueParse(context: SemanticContext, declaration: ConstDeclarationSemantic, node: Node): Nothing {
  // todo depends on declaration kind (e.g. generic or const) ???
  const value = valueSemanticParse(context, node);
  declaration.initializer = value;

  const evaluatedValue = value?.evaluate();

  if (evaluatedValue == nothing) {
    context.issueManager.addError(node.range, ISSUE_MESSAGE.cannotEvaluate());
  } else {
    declaration.value = evaluatedValue;
  }
}

function attributesParse(
  context: SemanticContext,
  declaration: ConstDeclarationSemantic,
  nodes: DeclarationNode[],
): Nothing {
  const range = rangeFromNodes(nodes.map((x) => x.id));
  context.issueManager.addError(range, ISSUE_MESSAGE.noAttributesAllowed());
}
