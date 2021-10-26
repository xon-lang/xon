import { AssignmentTree } from '../../tree/assignment/assignment.tree';
import { IdAssignmentTree } from '../../tree/assignment/id-assignment/id-assignment-statement.tree';
import { MetadataHandler } from './metadata-handler';

export class AssignmentHandler extends MetadataHandler {
  handle(tree: AssignmentTree) {
    if (tree instanceof IdAssignmentTree) {
      this.scope.add(tree.id.text, tree)
    } 
     throw new Error('Wrong assignment tree');
  }
}
