import { BodyContext } from '~/grammar/xon-parser';
import { BodyTree } from '~/tree/body/body-tree';

export function getBodyTree(ctx: BodyContext): BodyTree {
  return new BodyTree(ctx);
}
