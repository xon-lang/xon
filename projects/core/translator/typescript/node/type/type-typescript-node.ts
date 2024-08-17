import {$, is} from '../../../../$';
import {String2} from '../../../../../lib/types';
import {TypeSemantic} from '../../../../analyzer/semantic/node/type/type-semantic';
import {TypescriptTranslator} from '../../typescript-translator';

export function typeTypescriptTranslate(translator: TypescriptTranslator, semantic: TypeSemantic): String2 {
  if (is(semantic, $.IntegerTypeSemantic)) {
    return `${semantic.value}`;
  }

  if (is(semantic, $.CharTypeSemantic)) {
    return `"${semantic.value}"`;
  }

  if (is(semantic, $.StringTypeSemantic)) {
    return `"${semantic.value}"`;
  }

  if (is(semantic, $.UnionTypeSemantic)) {
    const left = translator.type(semantic.left);
    const right = translator.type(semantic.right);

    return `${left} | ${right}`;
  }

  if (is(semantic, $.IntersectionTypeSemantic)) {
    const left = translator.type(semantic.left);
    const right = translator.type(semantic.right);

    return `${left} & ${right}`;
  }

  if (is(semantic, $.IdTypeSemantic)) {
    return semantic.name;
  }

  if (is(semantic, $.ArrayTypeSemantic)) {
    const items = semantic.items.map((x) => translator.type(x)).join(', ');

    return `[${items}]`;
  }

  if (is(semantic, $.FunctionTypeSemantic)) {
    const parameters = semantic.parameters.map((x) => translator.valueDeclaration(x)).join(', ');
    const result = translator.type(semantic.result);

    return `(${parameters}) => ${result}`;
  }

  return translator.error();
}
