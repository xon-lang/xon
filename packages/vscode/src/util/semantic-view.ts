import {Nothing, nothing, String2} from '#common';
import {DeclarationSemantic, TypeSemantic} from '#core';
import {$, is} from '#typing';

export function typeSemanticToString(semantic: TypeSemantic): String2 | Nothing {
  if (is(semantic, $.IdTypeSemantic) && semantic.declaration) {
    return semantic.declaration.name;
  }

  if (is(semantic, $.FunctionTypeSemantic)) {
    const parameters = semantic.parameters.map(declarationSemanticHeaderToString).join(', ');

    return `(${parameters}): ${typeSemanticToString(semantic.result)}`;
  }

  return nothing;
}

export function declarationSemanticHeaderToString(semantic: DeclarationSemantic): String2 | Nothing {
  if (is(semantic, $.NominalTypeDeclarationSemantic)) {
    const baseType = semantic.baseType ? ': ' + typeSemanticToString(semantic.baseType) : '';

    return `${semantic.name}${baseType}`;
  }

  if (is(semantic, $.AttributeValueDeclarationSemantic)) {
    const type = semantic.type ? ': ' + typeSemanticToString(semantic.type) : '';

    return `${semantic.name}${type}`;
  }

  return nothing;
}
