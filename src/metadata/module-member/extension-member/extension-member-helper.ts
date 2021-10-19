import { DefinitionExtensionTree } from '../../../tree/definition-extension/definition-extension-tree';
import { MethodDefinitionExtensionTree } from '../../../tree/definition-extension/method-definition-extension/method-definition-extension-tree';
import { PropertyDefinitionExtensionTree } from '../../../tree/definition-extension/property-definition-extension/property-definition-extension-tree';
import { ExtensionMemberMetadata } from './extension-member-metadata';
import { MethodExtensionMemberMetadata } from './method-extension-member-metadata copy';
import { PropertyExtensionMemberMetadata } from './property-extension-member-metadata';

export const getExtensionMemberMetadata = (
  ctx: DefinitionExtensionTree,
): ExtensionMemberMetadata => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof PropertyDefinitionExtensionTree)
    return new PropertyExtensionMemberMetadata(ctx);
  if (ctx instanceof MethodDefinitionExtensionTree) return new MethodExtensionMemberMetadata(ctx);

  throw Error(`Member metadata not found for "${ctx.constructor.name}"`);
};
