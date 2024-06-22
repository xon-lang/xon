import {Nothing} from '../../../../lib/types';
import {$Semantic, SemanticNode} from '../node/semantic-node';
import {TypeSemantic} from '../type/type-semantic';

export interface ValueSemantic<T extends $Semantic = $Semantic, U extends TypeSemantic = TypeSemantic>
  extends SemanticNode<T> {
  type: U | Nothing;
}
