import { TypeContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { DefinitionTree } from '../definition/definition.tree';

export abstract class TypeTree extends BaseTree {
  ctx?: TypeContext;

  name: string | number = NaN;

  abstract eq(anotherType: TypeTree): boolean;

  typeDefinition: DefinitionTree;
}
