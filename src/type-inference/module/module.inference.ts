import { ModuleTree } from '../../tree/module/module.tree';
import { BaseInference } from '../base.inference';
import { definitionCache } from '../definition-storage';
import { getDefinitionInference } from '../definition/definition-inference.helper';
import { DefinitionInference } from '../definition/definition.inference';
import { getExtensionMethodInference } from '../extension-method/extension-method-inference.helper';
import { ExtensionMethodInference } from '../extension-method/extension-method.inference';
import { getFunctionInference } from '../function/function-inference.helper';
import { FunctionInference } from '../function/function.inference';
import { GenericsMap } from '../generics-map';
import { getLibraryInference } from '../library/library-inference.helper';
import { LibraryInference } from '../library/library.inference';
import { getStatementInference } from '../statement/statement-inference.helper';
import { StatementInference } from '../statement/statement.inference';

export class ModuleInference extends BaseInference {
  public libraries: LibraryInference[];

  public statements: StatementInference[];

  public functions: FunctionInference[];

  public extensionMethods: ExtensionMethodInference[];

  public definitions: DefinitionInference[];

  public constructor(public tree: ModuleTree, public genericsMap: GenericsMap) {
    super();

    this.libraries = tree.libraries.map((x) => getLibraryInference(x, genericsMap));
    tree.definitions.forEach((x) => definitionCache.set(x.name, x));
    this.definitions = tree.definitions.map((x) => getDefinitionInference(x, this.genericsMap));
    this.extensionMethods = tree.extensionMethods.map((x) =>
      getExtensionMethodInference(x, this.genericsMap),
    );
    this.functions = tree.functions.map((x) => getFunctionInference(x, this.genericsMap));
    this.statements = tree.statements.map((x) => getStatementInference(x, this.genericsMap));
  }
}
