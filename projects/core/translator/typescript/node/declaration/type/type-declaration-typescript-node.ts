import {$} from '../../../../../$';
import {Nothing, String2} from '../../../../../../lib/types';
import {DeclarationSemantic} from '../../../../../analyzer/semantic/node/declaration/declaration-semantic';
import {TypescriptTranslatorNode} from '../../typescript-node';

export type TypeDeclarationTypescriptNode = TypescriptTranslatorNode & {
  $: $.TypeDeclarationTypescriptNode;
};

export function toTypeDeclarationTypescriptNode(
  semantic: DeclarationSemantic | Nothing,
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
