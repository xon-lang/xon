import {$, is} from '../../../../$';
import {Array2, nothing, String2} from '../../../../../lib/types';
import {Node} from '../../../node';
import {ItemNode} from '../../../syntax/group/item-node';
import {DeclarationNode} from '../../../syntax/node/declaration/declaration-node';
import {SemanticAnalyzer} from '../../semantic-analyzer';
import {unknownTypeFromNode} from '../type/unknown/unknown-type-semantic';
import {DeclarationSemantic} from './declaration-semantic';
import {unknownDeclarationSemantic} from './unknown/unknown-declaration-semantic';

export function declarationsParse(
  analyzer: SemanticAnalyzer,
  nodes: Array2<DeclarationNode | ItemNode>,
): Array2<DeclarationSemantic> {
  const declarations = nodes.map((x) => {
    const node = is(x, $.DeclarationNode) ? x : x.value;

    if (is(node, $.DeclarationNode)) {
      return declarationShallowParse(analyzer, node);
    }

    const unknownReference = analyzer.reference(x);

    return unknownDeclarationSemantic(unknownReference, unknownTypeFromNode(analyzer, unknownReference));
  });

  for (const x of nodes) {
    const node = is(x, $.DeclarationNode) ? x : x.value;

    if (is(node, $.DeclarationNode)) {
      declarationDeepParse(analyzer, node);
    }
  }

  return declarations;
}


export function declarationShallowParse(
  analyzer: SemanticAnalyzer,
  node: DeclarationNode,
): DeclarationSemantic {
  const declaration = createDeclaration(analyzer, node);
  node.id.semantic = declaration;
  analyzer.declarationManager.add(declaration);

  return declaration;
}


export function declarationDeepParse(
  analyzer: SemanticAnalyzer,
  node: DeclarationNode,
): DeclarationSemantic | Nothing {
  const semantic = node.id?.semantic;

  if (!is(semantic, $.DeclarationSemantic)) {
    return nothing;
  }

  analyzer.pushDeclarationScope();

  if (is(semantic, $.NominalTypeDeclarationSemantic)) {
    nominalTypeDeclarationSemanticHandle(analyzer, semantic, node);
  } else if (is(semantic, $.StructuralTypeDeclarationSemantic)) {
    structuralTypeDeclarationSemanticHandle(analyzer, semantic, node);
  } else if (is(semantic, $.AttributeValueDeclarationSemantic)) {
    attributeValueDeclarationSemanticHandle(analyzer, semantic, node);
  }

  analyzer.popDeclarationScope();

  return semantic;
}


function nodeDependencies(node: Node): Array2<String2> {
  if (is(node, $.IdNode)) {
    return [node.text.toString()];
  }

  if (is(node, $.SyntaxNode)) {
    return node.children.flatMap(nodeDependencies);
  }

  return [];
}

function createDeclaration(analyzer: SemanticAnalyzer, node: DeclarationNode): DeclarationSemantic {
  const reference = analyzer.reference(node.id);
  const documentation = node.documentation?.description?.text.toString().setPadding(0).trim();
  const modifier = node.modifier?.text.toString();
  const name = node.id.text.toString();
  const type = unknownTypeFromNode(analyzer, node);

  // todo simplify three return statements
  if (modifier === TYPE_MODIFIER) {
    if (node.assign) {
      return structuralTypeDeclarationSemantic(reference, documentation, modifier, name, type);
    }

    return nominalTypeDeclarationSemantic(reference, documentation, modifier, name, type);
  }

  return attributeValueDeclarationSemantic(reference, documentation, modifier, name, type);
}