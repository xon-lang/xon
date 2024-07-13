import {$} from '../../../../$';
import {Boolean2, Nothing, String2} from '../../../../../lib/types';
import {TypescriptElement} from '../typescript-element';

export type TypeTypescriptElement = TypescriptElement & {
  $: $.TypeTypescriptElement;
  isExport?: Boolean2 | Nothing;
  name: String2 | Nothing;
  value: String2 | Nothing;
};

export function createTypeTypescriptElement(
  params: Omit<TypeTypescriptElement, '$' | 'translate'>,
): TypeTypescriptElement {
  return {
    $: $.TypeTypescriptElement,
    ...params,

    translate(): String2 {
      const exportText = this.isExport ? 'export ' : '';

      return `${exportText}type ${this.name} = ${this.value}`;
    },
  };
}
