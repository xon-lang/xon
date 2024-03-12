import {Nothing} from '../../lib/core';
import {$Node, is} from '../../parser/node/node';
import {IdNode} from '../../parser/node/token/id/id-node';
import {SyntaxResult} from '../../parser/syntax-result';
import {DeclarationSemantic} from '../declaration/declaration-semantic';
import {$Semantic, Semantic} from '../semantic';
import {SemanticContext} from '../semantic-context';
import {TypeSemantic} from '../type/type-semantic';

export interface ValueSemantic extends Semantic {
  $: $Semantic.VALUE;
  declaration: DeclarationSemantic | Nothing;
  type: TypeSemantic | Nothing;
}

export function valueSemantic(context: SemanticContext, node: IdNode): ValueSemantic {
  const reference = context.createReference(node);
  const declaration = context.declarationManager.findSingle(node, 0);

  const semantic: ValueSemantic = {
    $: $Semantic.VALUE,
    reference,
    declaration,
    type: declaration?.type,
  };

  if (declaration) {
    declaration.usages.push(semantic);
  }

  return semantic;
}

export function valuesParse(context: SemanticContext, syntax: SyntaxResult) {
  for (const statement of syntax.statements) {
    for (const node of statement.children) {
      if (is<IdNode>(node, $Node.ID)) {
        idParse(context, node);

        continue;
      }
    }
  }
}

function idParse(context: SemanticContext, node: IdNode): Nothing {
  node.semantic = valueSemantic(context, node);
}
