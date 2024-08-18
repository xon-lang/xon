import {$, is} from '../../../../$';
import {String2} from '../../../../../lib/types';
import {Semantic} from '../../../../analyzer/semantic/node/semantic';
import {StatementNode} from '../../../../analyzer/syntax/statement/statement-node';
import {TypescriptTranslator} from '../../typescript-translator';

export function statementTypescriptTranslate(
  translator: TypescriptTranslator,
  statement: StatementNode,
): String2 {
  const node = statement.value;

  if (is(node, $.DeclarationNode)) {
    if (!node.id.semantic) {
      return translator.error(node.id);
    }

    return declarationTranslate(translator, node.id.semantic);
  }

  if (is(node, $.ReturnNode)) {
    if (node.value) {
      const value = is(node.value.semantic, $.ValueSemantic)
        ? translator.value(node.value.semantic)
        : translator.error(node.value);

      return `return ${value}`;
    }

    return `return`;
  }

  if (is(node, $.ExpressionNode) && is(node.semantic, $.ValueSemantic)) {
    return translator.value(node.semantic);
  }

  return translator.error(node);
}

function declarationTranslate(
  translator: TypescriptTranslator,
  semantic: Semantic, // DeclarationSemantic
): String2 {
  if (is(semantic, $.TypeDeclarationSemantic)) {
    return translator.typeDeclaration(semantic);
  }

  if (is(semantic, $.ValueDeclarationSemantic)) {
    return 'const ' + translator.valueDeclaration(semantic);
  }

  return translator.error(semantic.nodeLink);
}
