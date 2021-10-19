import { glob } from 'glob';
import * as path from 'path';
import { ListingTree } from '../tree/listing/listing-tree';
import { parseListingFromFile } from '../tree/parse';
import { MethodMetadata } from './module-member/method-metadata';
import { ModuleMember } from './module-member/module-member-metadata';
import { PropertyMetadata } from './module-member/property-metadata';
import { TypeMetadata } from './module-member/type-metadata';

export class Module {
  // public types: TypeMetadata[];
  // public properties: PropertyMetadata[];
  // public methods: MethodMetadata[];
  // public extensionMembers: ExtensionMemberMetadata[];

  public members: Map<string, ModuleMember[]> = new Map<string, ModuleMember[]>();

  constructor(location: string) {
    const files = glob.sync(path.resolve(location, '**/*.xon'));
    for (const file of files) {
      const sourceFile = path.resolve(__dirname, file);
      const listingTree = parseListingFromFile(sourceFile);
      this.handleListing(file, listingTree);
    }
  }

  private handleListing(location: string, listing: ListingTree) {
    const locationImport = location.replace(/[\/\\]/, '.');
    for (const member of listing.definitions) {
      this.addMember(`${locationImport}.${member.name}`, new TypeMetadata(member));
    }
    for (const member of listing.properties) {
      this.addMember(`${locationImport}.${member.name}`, new PropertyMetadata(member));
    }
    for (const member of listing.methods) {
      this.addMember(`${locationImport}.${member.name}`, new MethodMetadata(member));
    }
    for (const member of listing.methods) {
      this.addMember(`${locationImport}.${member.name}`, new MethodMetadata(member));
    }
  }

  private addMember(location, member: ModuleMember) {
    const value = this.members.get(location) || [];
    value.push(member);
    this.members.set(location, value);
  }
}
