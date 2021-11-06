import { SourceTree } from '../../tree/source/source-tree';
import { BaseInference } from '../base.inference';
import { getDefinitionInference } from '../definition/definition-inference.helper';
import { DefinitionInference } from '../definition/definition.inference';
import { GenericsMap } from '../generics-map';
import { getLibraryInference } from '../library/library-inference.helper';
import { LibraryInference } from '../library/library.inference';

export class SourceInference extends BaseInference {
  libraries: LibraryInference[];

  definitions: DefinitionInference[];

  constructor(public tree: SourceTree, public genericsMap: GenericsMap) {
    super();

    this.libraries = tree.imports.map((x) => getLibraryInference(x, genericsMap));
    this.definitions = tree.definitions.map((x) => getDefinitionInference(x, this.genericsMap));
  }
}
