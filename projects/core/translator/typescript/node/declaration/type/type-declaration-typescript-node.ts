import {$} from '../../../../../$';
import {Nothing, String2} from '../../../../../../lib/types';
import {TypeDeclarationSemantic} from '../../../../../analyzer/semantic/node/declaration/type/type-declaration-semantic';
import {TypescriptTranslatorNode} from '../../typescript-node';

export type TypeDeclarationTypescriptNode = TypescriptTranslatorNode & {
  $: $.TypeDeclarationTypescriptNode;
};

export function toTypeDeclarationTypescriptNode(
  semantic: TypeDeclarationSemantic | Nothing,
): TypeDeclarationTypescriptNode {
  return {
    $: $.TypeDeclarationTypescriptNode,

    translate(): String2 {
      if (!semantic) {
        return `// error ???`;
      }

      const exportText = true ? 'export ' : '';
      // const valueText = toTypeTypescriptNode(semantic.type).translate();

      return `${exportText}type ${semantic.name} = {}`;
    },
  };
}
