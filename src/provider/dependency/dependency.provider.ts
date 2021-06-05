import { Dependency } from './dependency';

export interface DependencyProvider {
  get(scope: string, name: string): Dependency;
}
