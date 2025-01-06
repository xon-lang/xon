import {
  $AttributeValueDeclarationSemantic,
  $FunctionTypeSemantic,
  $IdTypeSemantic,
  $NominalTypeDeclarationSemantic,
  DeclarationSemantic,
  TypeSemantic,
} from '#analyzer';
import {newText, Nothing, nothing, Text} from '#common';
import {is} from '#typing';

export function typeSemanticToString(semantic: TypeSemantic): Text | Nothing {
  if (is(semantic, $IdTypeSemantic) && semantic.declaration) {
    return semantic.declaration.name;
  }

  if (is(semantic, $FunctionTypeSemantic)) {
    const parameters = semantic.parameters
      .map(declarationSemanticHeaderToString)
      .map((x) => x?.toNativeString() ?? '')
      .toNativeArray()
      .join(', ');

    return newText(`(${parameters}): ${typeSemanticToString(semantic.result)}`);
  }

  return nothing;
}

export function declarationSemanticHeaderToString(semantic: DeclarationSemantic): Text | Nothing {
  if (is(semantic, $NominalTypeDeclarationSemantic)) {
    const baseType = semantic.baseType ? ': ' + typeSemanticToString(semantic.baseType) : '';

    return newText(`${semantic.name.toNativeString()}${baseType}`);
  }

  if (is(semantic, $AttributeValueDeclarationSemantic)) {
    const type = semantic.type ? ': ' + typeSemanticToString(semantic.type) : '';

    return newText(`${semantic.name.toNativeString()}${type}`);
  }

  return nothing;
}
