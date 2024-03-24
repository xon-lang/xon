import {Nothing} from '../../../lib/core';
import {Node} from '../../../parser/node/node';
import {SemanticContext} from '../../semantic-context';
import {integerTypeSemanticTryParse} from '../../type/integer/integer-type-semantic-parser';
import {stringTypeSemanticTryParse} from '../../type/string/string-type-semantic-parser';
import {TypeSemantic} from '../../type/type-semantic';

export function literalValueTypeTryParse(context: SemanticContext, node: Node): TypeSemantic | Nothing {
  return integerTypeSemanticTryParse(context, node) ?? stringTypeSemanticTryParse(context, node);
}
