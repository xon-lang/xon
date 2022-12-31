import { DeclarationContext } from '~/grammar/xon-parser';
import { DeclarationMetadata } from '~/metadata/declaration/declaration-metadata';
import { BodyTree } from '~/tree/body/body-tree';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { Tree } from '~/tree/tree';

export abstract class DeclarationTree extends Tree {
  abstract ctx: DeclarationContext;
  metadata: DeclarationMetadata | null = null;
  type: ExpressionTree | null = null;
  value: ExpressionTree | BodyTree | null = null;
}
