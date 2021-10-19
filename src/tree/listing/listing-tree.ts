import { ListingContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { getDefinitionsTrees } from '../definition/definition-tree.helper';
import { DefinitionTree } from '../definition/definition.tree';
import { DefinitionExtensionTree } from '../definition-extension/definition-extension-tree';
import { getExtensionMembersTrees } from '../definition-extension/definition-definition-extension.helper';
import { getLibrariesTrees } from '../import/import-tree.helper';
import { ImportTree } from '../import/import.tree';
import { getMethodTrees } from '../method/method-tree.helper';
import { MethodTree } from '../method/method.tree';
import { getPropertiesTrees } from '../property/property-tree.helper';
import { PropertyTree } from '../property/property.tree';
import { getTestTrees } from '../test/test-tree.helper';
import { TestTree } from '../test/test.tree';

export class ListingTree extends BaseTree {
  public imports: ImportTree[];
  public definitions: DefinitionTree[];
  public properties: PropertyTree[];
  public methods: MethodTree[];
  public extensionMembers: DefinitionExtensionTree[];
  public tests: TestTree[];

  public constructor(public ctx?: ListingContext) {
    super();
    if (!ctx) return;

    this.imports = getLibrariesTrees(ctx.library());
    this.definitions = getDefinitionsTrees(ctx.definition());
    this.extensionMembers = getExtensionMembersTrees(ctx.extensionMember());
    this.tests = getTestTrees(ctx.test());
    this.properties = getPropertiesTrees(ctx.property());
    this.methods = getMethodTrees(ctx.method());
  }
}
