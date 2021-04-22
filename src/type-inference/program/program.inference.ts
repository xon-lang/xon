import { ProgramTree } from '../../tree/program/program.tree';
import { BaseInference } from '../base.inference';
import { definitionCache } from '../definition-storage';
import { getDefinitionInference } from '../definition/definition-inference.helper';
import { DefinitionInference } from '../definition/definition.inference';
import { GenericsMap } from '../generics-map';
import { getLibraryInference } from '../library/library-inference.helper';
import { LibraryInference } from '../library/library.inference';
import { getStatementInference } from '../statement/statement-inference.helper';
import { StatementInference } from '../statement/statement.inference';

export class ProgramInference extends BaseInference {
  public libraries: LibraryInference[];

  public statements: StatementInference[];

  public definitions: DefinitionInference[];

  public constructor(public tree: ProgramTree, public genericsMap: GenericsMap) {
    super();

    this.libraries = tree.libraries.map((x) => getLibraryInference(x, genericsMap));
    tree.definitions.forEach((x) => definitionCache.set(x.name, x));
    this.definitions = tree.definitions.map((x) => getDefinitionInference(x, this.genericsMap));
    this.statements = tree.statements.map((x) => getStatementInference(x, this.genericsMap));
  }
}
