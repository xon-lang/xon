import {$} from '../../../../../$';
import {Boolean2, Nothing, String2} from '../../../../../../lib/types';
import {DeclarationNode} from '../../../../../analyzer/syntax/node/declaration/declaration-node';
import {toTypeTypescriptNode, TypeTypescriptNode} from '../../type/type-typescript-node';
import {TypescriptTranslatorNode} from '../../typescript-node';

export type TypeDeclarationTypescriptNode = TypescriptTranslatorNode & {
  $: $.TypeDeclarationTypescriptNode;
  isExport?: Boolean2 | Nothing;
  name: String2 | Nothing;
  value: TypeTypescriptNode | Nothing;
};

export function toTypeDeclarationTypescriptNode(node: DeclarationNode): TypeDeclarationTypescriptNode {
  return {
    $: $.TypeDeclarationTypescriptNode,
    isExport: true,
    name: node.id.text,
    value: toTypeTypescriptNode(node.assign?.value),

    translate(): String2 {
      const exportText = this.isExport ? 'export ' : '';

      if (this.value) {
        return `${exportText}type ${this.name} = ${this.value.translate()}`;
      }

      return `// error: ${exportText}type ${this.name} = ???`;
    },
  };
}
