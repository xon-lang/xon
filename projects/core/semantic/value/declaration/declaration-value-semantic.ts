import {SourceReference} from '../../../source/source-reference';
import {DeclarationSemantic} from '../../declaration/declaration-semantic';
import {$Semantic} from '../../semantic';
import {ValueSemantic} from '../value-semantic';

export interface DeclarationValueSemantic extends ValueSemantic {
  $: $Semantic.DECLARATION_VALUE;
  declaration: DeclarationSemantic;
}

export function declarationValueSemantic(
  reference: SourceReference,
  declaration: DeclarationSemantic,
): DeclarationValueSemantic {
  const semantic: DeclarationValueSemantic = {
    $: $Semantic.DECLARATION_VALUE,
    reference,
    declaration,
    // todo mb we need send it in parameters ???
    type: declaration.type,
  };

  declaration.usages.push(semantic);

  return semantic;
}
