import {String2} from '#common';
import {
  $ArrayTypeSemantic,
  $CharTypeSemantic,
  $FunctionTypeSemantic,
  $IdTypeSemantic,
  $IntegerTypeSemantic,
  $IntersectionTypeSemantic,
  $InvokeTypeSemantic,
  $StringTypeSemantic,
  $UnionTypeSemantic,
  $ValueDeclarationSemantic,
  TypeSemantic,
} from '#core';
import {TypescriptTranslator} from '#translator';
import {is} from '#typing';

export function typeTypescriptTranslate(translator: TypescriptTranslator, semantic: TypeSemantic): String2 {
  if (is(semantic, $IntegerTypeSemantic)) {
    return `${semantic.value}`;
  }

  if (is(semantic, $CharTypeSemantic)) {
    return `"${semantic.value}"`;
  }

  if (is(semantic, $StringTypeSemantic)) {
    return `"${semantic.value}"`;
  }

  if (is(semantic, $UnionTypeSemantic)) {
    const left = translator.type(semantic.left);
    const right = translator.type(semantic.right);

    return `${left} | ${right}`;
  }

  if (is(semantic, $IntersectionTypeSemantic)) {
    const left = translator.type(semantic.left);
    const right = translator.type(semantic.right);

    return `${left} & ${right}`;
  }

  if (is(semantic, $IdTypeSemantic)) {
    return semantic.name;
  }

  if (is(semantic, $ArrayTypeSemantic)) {
    const items = semantic.items.map((x) => translator.type(x)).join(', ');

    return `[${items}]`;
  }

  if (is(semantic, $FunctionTypeSemantic)) {
    const parameters = semantic.parameters
      .map((x) => {
        if (is(x, $ValueDeclarationSemantic)) {
          return translator.valueDeclaration(x);
        }

        return translator.typeDeclaration(x);
      })
      .join(', ');
    const result = translator.type(semantic.result);

    return `(${parameters}) => ${result}`;
  }

  if (is(semantic, $InvokeTypeSemantic)) {
    const instance = translator.type(semantic.instance);
    const args = semantic.args.map((x) => translator.type(x)).join(', ');

    // todo check whole semantic than an args length
    if (args.length > 0) {
      return `${instance}<${args}>`;
    }

    // todo fix it
    return `${instance}[${args}]`;
  }

  return translator.error(semantic.nodeLink);
}
