/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { VoidTypeContext } from '../../../grammar/xon-parser';
import { TypeTree } from '../type.tree';

export class VoidTypeTree extends TypeTree {
  public constructor(public ctx?: VoidTypeContext) {
    super();
  }

  public equals(other: TypeTree): boolean {
    return other instanceof VoidTypeTree;
  }

  public useGenericsMap(genericsMap: Map<string, TypeTree> = new Map()): VoidTypeTree {
    return new VoidTypeTree();
  }

  public getGenericsMap(type: TypeTree): Map<string, TypeTree> {
    return new Map<string, TypeTree>();
  }

  public toString(): string {
    return 'void';
  }
}
