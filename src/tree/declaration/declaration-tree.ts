import { DeclarationContext } from '~/grammar/xon-parser';
import { DeclarationMetadata } from '~/metadata/declaration/declaration-metadata';
import { Tree } from '~/tree/tree';

export abstract class DeclarationTree extends Tree {
  abstract ctx: DeclarationContext;
  metadata: DeclarationMetadata | null = null;
}
