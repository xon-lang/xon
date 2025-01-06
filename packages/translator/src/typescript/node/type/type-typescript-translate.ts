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
} from '#analyzer';
import {newText, Text} from '#common';
import {TypescriptTranslator} from '#translator';
import {is} from '#typing';

export function typeTypescriptTranslate(translator: TypescriptTranslator, semantic: TypeSemantic): Text {
  if (is(semantic, $IntegerTypeSemantic)) {
    return newText(`${semantic.value}`);
  }

  if (is(semantic, $CharTypeSemantic)) {
    return newText(`"${semantic.value}"`);
  }

  if (is(semantic, $StringTypeSemantic)) {
    return newText(`"${semantic.value}"`);
  }

  if (is(semantic, $UnionTypeSemantic)) {
    const left = translator.type(semantic.left);
    const right = translator.type(semantic.right);

    return newText(`${left} | ${right}`);
  }

  if (is(semantic, $IntersectionTypeSemantic)) {
    const left = translator.type(semantic.left);
    const right = translator.type(semantic.right);

    return newText(`${left} & ${right}`);
  }

  if (is(semantic, $IdTypeSemantic)) {
    return semantic.name;
  }

  if (is(semantic, $ArrayTypeSemantic)) {
    const items = semantic.items
      .map((x) => translator.type(x))
      .toNativeArray()
      .join(', ');

    return newText(`[${items}]`);
  }

  if (is(semantic, $FunctionTypeSemantic)) {
    const parameters = semantic.parameters
      .map((x) => {
        if (is(x, $ValueDeclarationSemantic)) {
          return translator.valueDeclaration(x);
        }

        return translator.typeDeclaration(x);
      })
      .toNativeArray()
      .join(', ');
    const result = translator.type(semantic.result);

    return newText(`(${parameters}) => ${result}`);
  }

  if (is(semantic, $InvokeTypeSemantic)) {
    const instance = translator.type(semantic.instance);
    const args = semantic.args
      .map((x) => translator.type(x))
      .toNativeArray()
      .join(', ');

    // todo check whole semantic than an args length
    if (args.length > 0) {
      return newText(`${instance}<${args}>`);
    }

    // todo fix it
    return newText(`${instance.toNativeString()}[${args}]`);
  }

  return translator.error(semantic.nodeLink);
}
