import { DeclarationSemantic } from '../declaration/declaration-semantic';
import { Semantic } from '../semantic';

export interface UsageSemantic extends Semantic {
  declaration: DeclarationSemantic;
}
