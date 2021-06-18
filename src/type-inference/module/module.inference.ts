import { ModuleTree } from '../../tree/module/module.tree';
import { BaseInference } from '../base.inference';
import { getDefinitionInference } from '../definition/definition-inference.helper';
import { DefinitionInference } from '../definition/definition.inference';
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

  public definitions: DefinitionInference[];

  public constructor(public tree: ModuleTree, public genericsMap: GenericsMap) {
    super();

    this.libraries = tree.libraries.map((x) => getLibraryInference(x, genericsMap));
    this.definitions = tree.definitions.map((x) => getDefinitionInference(x, this.genericsMap));
    this.functions = tree.functions.map((x) => getFunctionInference(x, this.genericsMap));
    this.statements = tree.statements.map((x) => getStatementInference(x, this.genericsMap));
  }
}
