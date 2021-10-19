import * as fs from 'fs';
import * as glob from 'glob';
import { DependencyFolder } from './dependency-folder';

class DependencyRegistry {
  public name: string;


  constructor(public location: string) {

  }
  
}

export const dependencyRegistry = new DependencyRegistry('ast.xon/lib');
