import { IdToken } from '../../../util/id-token';
import { SourceReference } from '../../../util/source-reference';
import { ExpressionTree } from '../expression-tree';

export class InfixExpressionTree implements ExpressionTree {
  sourceReference: SourceReference;

  constructor(public id: IdToken, public left: ExpressionTree, public right: ExpressionTree) {
    this.sourceReference = this.sourceReferenceFromLeftAndRight();
  }

  private sourceReferenceFromLeftAndRight() {
    const ref = new SourceReference();
    ref.sourceName = this.left.sourceReference.sourceName;
    ref.startIndex = this.left.sourceReference.startIndex;
    ref.stopIndex = this.right.sourceReference.stopIndex;
    ref.line = this.left.sourceReference.line;
    ref.column = this.left.sourceReference.column;
    ref.text = this.left.sourceReference.text + this.id.text + this.right.sourceReference.text;
    ref.inputText = this.left.sourceReference.inputText;
    return ref;
  }

  toString(): string {
    return `${this.left} ${this.id} ${this.right}`;
  }
}
