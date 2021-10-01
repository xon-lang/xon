import { ListingTree } from '../../tree/module/listing.tree';
import { BaseInference } from '../base.inference';
import { getDefinitionInference } from '../definition/definition-inference.helper';
import { DefinitionInference } from '../definition/definition.inference';
import { GenericsMap } from '../generics-map';
import { getLibraryInference } from '../library/library-inference.helper';
import { LibraryInference } from '../library/library.inference';

export class ModuleInference extends BaseInference {
  public libraries: LibraryInference[];

  public definitions: DefinitionInference[];

  public constructor(public tree: ListingTree, public genericsMap: GenericsMap) {
    super();

    this.libraries = tree.libraries.map((x) => getLibraryInference(x, genericsMap));
    this.definitions = tree.definitions.map((x) => getDefinitionInference(x, this.genericsMap));
  }
}
