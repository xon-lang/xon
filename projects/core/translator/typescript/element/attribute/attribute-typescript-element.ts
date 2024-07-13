import {String2} from '../../../../../lib/types';
import {TypescriptElement} from '../typescript-element';

export enum AttributeTypescriptModifier {
  PUBLIC = 'public',
  PRIVATE = 'private',
}

export type AttributeTypescriptElement = TypescriptElement & {
  modifier: AttributeTypescriptModifier;
  name: String2;
  type: String2;
  value: String2;
};
