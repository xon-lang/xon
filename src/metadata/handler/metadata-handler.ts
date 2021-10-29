import { HandlerScope } from './handler-scope';

export abstract class MetadataHandler {
  public constructor(public scope: HandlerScope) {}
}
