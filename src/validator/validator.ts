import { Issue } from './issue';

export abstract class Validator {
  public abstract issues(): Issue[];
}
