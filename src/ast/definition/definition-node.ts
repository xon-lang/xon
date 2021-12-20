import { IdToken } from '../id-token';
import { Node } from '../node';

export abstract class DefinitionNode extends Node {
  abstract id: IdToken;

  get isPrivate(): boolean {
    return this.id.text.startsWith('_');
  }
}
