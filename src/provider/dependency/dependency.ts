import { DefinitionTree } from '../../tree/definition/definition.tree';
import { ExtensionMethodTree } from '../../tree/extension-method/extension-method.tree';
import { ExtensionPropertyTree } from '../../tree/extension-property/extension-property.tree';
import { FunctionTree } from '../../tree/function/function.tree';
import { ModuleTree } from '../../tree/module/module.tree';

export class Dependency {
  public definitions: DefinitionTree[] = [];

  public functions: FunctionTree[] = [];

  public extensionMethods: ExtensionMethodTree[] = [];

  public extensionProperties: ExtensionPropertyTree[] = [];

  public constructor(public modules: ModuleTree[]) {
    modules.forEach((x) => {
      this.definitions.push(...x.definitions);
      this.functions.push(...x.functions);
      this.extensionMethods.push(...x.extensionMethods);
      this.extensionProperties.push(...x.extensionProperties);
    });
  }

  // eslint-disable-next-line class-methods-use-this
  public dependencies(): Dependency[] {
    return [];
  }
}
