import {String2} from '../../../../../../lib/types';
import {TypescriptTranslatorNode} from '../../typescript-node';

export enum AttributeTypescriptModifier {
  PUBLIC = 'public',
  PRIVATE = 'private',
}

export type AttributeTypescriptElement = TypescriptTranslatorNode & {
  modifier: AttributeTypescriptModifier;
  name: String2;
  type: String2;
  value: String2;
};
