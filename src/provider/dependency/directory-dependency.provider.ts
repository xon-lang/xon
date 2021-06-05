import * as fs from 'fs';
import * as glob from 'glob';
import * as path from 'path';
import { parseModule } from '../../tree/parse';
import { Dependency } from './dependency';
import { DependencyProvider } from './dependency.provider';

export class DirectoryDependencyProvider implements DependencyProvider {
  public constructor(public libraryDirectory: string) {}

  public get(scope: string, name: string): Dependency {
    const libPath = path.resolve(this.libraryDirectory, scope, name);
    const codeFiles = glob.sync(`${libPath}/**/*.xon`);
    const modules = codeFiles.map((x) => parseModule(fs.readFileSync(x).toString(), x));
    return new Dependency(modules);
  }
}
