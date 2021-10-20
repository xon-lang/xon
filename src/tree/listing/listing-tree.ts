import { ListingContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { getLibrariesTrees } from '../import/import-tree.helper';
import { ImportTree } from '../import/import.tree';
import { getListingMembersTrees } from './listing-member/listing-member-tree.helper';
import { ListingMemberTree } from './listing-member/listing-member.tree';

export class ListingTree extends BaseTree {
  public imports: ImportTree[];
  public members: ListingMemberTree[];

  public constructor(public ctx?: ListingContext) {
    super();
    if (!ctx) return;

    this.imports = getLibrariesTrees(ctx.library());
    this.members = getListingMembersTrees(ctx.listingMember());
  }

  toString(): string {
    return `<Members ${this.members.length}>`;
  }
}
