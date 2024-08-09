import {$, is} from '../../../../../$';
import {Array2, Nothing, nothing} from '../../../../../../lib/types';
import {Node} from '../../../../node';
import {DocumentationNode} from '../../../../syntax/documentation/documentation-node';
import {GroupNode} from '../../../../syntax/group/group-node';
import {DeclarationNode} from '../../../../syntax/node/declaration/declaration-node';
import {InvokeNode} from '../../../../syntax/node/invoke/invoke-node';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {DeclarationSemantic} from '../../declaration/declaration-semantic';
import {declarationsParse} from '../../declaration/declaration-semantic-parser';
import {documentationIdSemantic} from '../../documentation/documentation-id-semantic';
import {itemNodeType} from '../array/array-type-semantic-parser';
import {IdTypeSemantic, idTypeSemantic} from '../id/id-type-semantic';
import {typeSemanticParse} from '../type-semantic-parser';
import {unknownTypeFromNode} from '../unknown/unknown-type-semantic';
import {FunctionTypeSemantic, functionTypeSemantic} from './function-type-semantic';

// todo should we remove 'functionTypeSemanticTryParse' ???
export function functionTypeSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): FunctionTypeSemantic | Nothing {
  // if (is(node, $.InvokeNode) && is(node.instance, $.IdNode)) {
  //   return invokeParse(analyzer, node);
  // }

  if ((!is(node, $.DeclarationNode) && !is(node, $.LambdaNode)) || !node.parameters) {
    return nothing;
  }

  const reference = analyzer.reference(node);

  // todo remove and add 'usingDeclarationScope' to 'declarationsParse'
  const generics = analyzer.usingDeclarationScope(() => {
    return node.generics?.items.map((x) => itemNodeType(analyzer, x));
  });

  // todo remove and add 'usingDeclarationScope' to 'declarationsParse'
  const parameters = analyzer.usingDeclarationScope(() => {
    return node.parameters ? declarationsParse(analyzer, node.parameters.items) : [];
  });

  const result = node.type
    ? typeSemanticParse(analyzer, node.type.value)
    : // todo user another range than 'node'
      unknownTypeFromNode(analyzer, node);

  const semantic = functionTypeSemantic(reference, generics, parameters, result);

  return semantic;
}

// todo how to use it ???
function invokeParse(analyzer: SemanticAnalyzer, node: InvokeNode): IdTypeSemantic | Nothing {
  if (!is(node.group, $.BraceGroupNode)) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.group.open.range, (x) => x.notImplemented());
    return nothing;
  }

  const generics = node.group.items.map((x) => itemNodeType(analyzer, x));

  if (is(node.instance, $.IdNode)) {
    const name = node.instance.text.toString();

    const declaration = analyzer.declarationManager.single(
      $.TypeDeclarationSemantic,
      name,
      generics,
      nothing,
    );

    if (!declaration) {
      return nothing;
    }

    if (is(declaration, $.TypeDeclarationSemantic)) {
      const reference = analyzer.reference(node);
      const semantic = idTypeSemantic(analyzer, reference, name, declaration, generics);
      // todo control when semantic attribute must be set
      node.instance.semantic = semantic;

      return semantic;
    }
  }

  if (generics.length > 0) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.instance.range, (x) => x.notImplemented());
  }

  return nothing;
}

// todo rename 'parametersOrGenerics' prefix
export function parametersOrGenericsParse(
  analyzer: SemanticAnalyzer,
  node: DeclarationNode,
  group: GroupNode,
): Array2<DeclarationSemantic> {
  const generics = declarationsParse(analyzer, group.items);

  if (node.documentation) {
    for (const generic of generics.filter((x) => !!x)) {
      parameterOrGenericDocumentationHandle(analyzer, node.documentation, generic);
    }
  }

  return generics;
}

// todo rename 'parametersOrGenerics' prefix
function parameterOrGenericDocumentationHandle(
  analyzer: SemanticAnalyzer,
  documentation: DocumentationNode,
  parameter: DeclarationSemantic,
): void {
  const filteredItems = documentation.items.filter((x) => x.id.text.equals(parameter.name));

  for (const item of filteredItems) {
    const reference = analyzer.reference(item.id);

    parameter.usages.push(reference);
    item.id.semantic = documentationIdSemantic(analyzer, reference, parameter);
  }

  parameter.documentation = filteredItems.first()?.description?.text.toString().setPadding(0).trim();
}
