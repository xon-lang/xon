import {$AnalyzerType, AttributeDeclarationSemantic} from '#analyzer';
import {ArrayData, Dictionary, newArrayData, newDictionary, Nothing, Text} from '#common';
import {Brand, Model} from '#typing';

// todo can we merge it with 'SemanticScope' ???
export type AttributeList = Model &
  Brand<'Analyzer.AttributeList'> & {
    _declarations: Dictionary<Text, ArrayData<AttributeDeclarationSemantic>>;

    add(declaration: AttributeDeclarationSemantic): void;
    get(name: Text): AttributeDeclarationSemantic | Nothing;
  };

export const $AttributeList = () => $AnalyzerType<AttributeList>('AttributeList');

export function newAttributeList(
  declarations?: ArrayData<AttributeDeclarationSemantic> | Nothing,
): AttributeList {
  const _declarations = newDictionary<Text, ArrayData<AttributeDeclarationSemantic>>();

  if (declarations) {
    for (const declaration of declarations) {
      const overloads = _declarations.get(declaration.name);

      if (overloads) {
        overloads.addFirstItem(declaration);
      } else {
        _declarations.set(declaration.name, newArrayData([declaration]));
      }
    }
  }

  return {
    $: $AttributeList(),
    _declarations,

    add(declaration: AttributeDeclarationSemantic): void {
      this._declarations ??= newDictionary();

      const overloads = this._declarations.get(declaration.name);

      if (overloads) {
        overloads.addFirstItem(declaration);
      } else {
        this._declarations.set(declaration.name, newArrayData([declaration]));
      }
    },

    get(name: Text): AttributeDeclarationSemantic | Nothing {
      return this._declarations.get(name)?.first();
    },
  };
}
