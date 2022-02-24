import { BodyContext } from '../../grammar/xon-parser';
import { Metadata } from '../../metadata/metadata';
import { BodyTree } from '../../tree/body/body-tree';

export class BodyNode {
  context: BodyContext;
  tree: BodyTree;
  metadata: Metadata;
}
