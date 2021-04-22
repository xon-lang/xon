import { LibraryMemberTree } from '../../tree/library/library-member.tree';
import { LibraryTree } from '../../tree/library/library.tree';
import { GenericsMap } from '../generics-map';
import { StatementInference } from '../statement/statement.inference';

export class LibraryInference extends StatementInference {
  public scope: string;

  public name: string;

  public members: LibraryMemberTree[];

  public constructor(public tree: LibraryTree, public genericsMap: GenericsMap) {
    super();

    this.name = tree.name;
    this.scope = tree.scope;
    this.members = tree.members;
  }
}
