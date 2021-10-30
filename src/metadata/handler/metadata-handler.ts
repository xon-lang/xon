import { HandlerScope } from './handler-scope';

export abstract class MetadataHandler {
  scope: HandlerScope;
  constructor(scope: HandlerScope = null) {
    this.scope = scope || new HandlerScope();
  }
}
