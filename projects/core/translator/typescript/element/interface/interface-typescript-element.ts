import {$} from '../../../../$';
import {Boolean2, Nothing, String2} from '../../../../../lib/types';
import {TypescriptElement} from '../typescript-element';

export type InterfaceTypescriptElement = TypescriptElement & {
  $: $.InterfaceTypescriptElement;
  isExport?: Boolean2 | Nothing;
  name: String2 | Nothing;
  extends?: String2 | Nothing;
};

export function createInterfaceTypescriptElement(
  params: Omit<InterfaceTypescriptElement, '$' | 'translate'>,
): InterfaceTypescriptElement {
  return {
    $: $.InterfaceTypescriptElement,
    ...params,

    translate(): String2 {
      const exportText = this.isExport ? 'export ' : '';

      return `${exportText} interface ${this.name} {}`;
    },
  };
}
