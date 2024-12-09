import {newTextData, Nothing, nothing, Text} from '#common';
import {DeclarationSemantic, TypeSemantic} from '#core';
import {$, is} from '#typing';

export function typeSemanticToString(semantic: TypeSemantic): Text | Nothing {
  if (is(semantic, $.IdTypeSemantic) && semantic.declaration) {
    return semantic.declaration.name;
  }

  if (is(semantic, $.FunctionTypeSemantic)) {
    const parameters = semantic.parameters.map(declarationSemanticHeaderToString).join(', ');

    return newTextData(`(${parameters}): ${typeSemanticToString(semantic.result)}`);
  }

  return nothing;
}

export function declarationSemanticHeaderToString(semantic: DeclarationSemantic): Text | Nothing {
  if (is(semantic, $.NominalTypeDeclarationSemantic)) {
    const baseType = semantic.baseType ? ': ' + typeSemanticToString(semantic.baseType) : '';

    return newTextData(`${semantic.name}${baseType}`);
  }

  if (is(semantic, $.AttributeValueDeclarationSemantic)) {
    const type = semantic.type ? ': ' + typeSemanticToString(semantic.type) : '';

    return newTextData(`${semantic.name}${type}`);
  }

  return nothing;
}
