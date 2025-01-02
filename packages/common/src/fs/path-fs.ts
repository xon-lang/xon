import {Boolean2, DirectoryFs, FileFs, Nothing, String2, Text, newText, nothing} from '#common';
import {Stats, lstatSync} from 'node:fs';
import {homedir} from 'node:os';
import {join, resolve} from 'node:path';

export class PathFs {
  fullPath: Text;
  stats: Stats | Nothing = nothing;

  constructor(public path: Text) {
    this.fullPath = newText(this.resolve(path.toNativeString()));
    this.setStats();
  }

  setStats(): void {
    try {
      this.stats = lstatSync(this.fullPath.toNativeString());
    } catch (error) {
      //
    }
  }

  isFile(): Boolean2 {
    return this.stats?.isFile() ?? false;
  }

  isDirectory(): Boolean2 {
    return this.stats?.isDirectory() ?? false;
  }

  resolve(importPath: String2): String2 {
    if (importPath[0] === '../..') {
      return join(homedir(), importPath.slice(1));
    }

    return resolve(importPath);
  }

  object(): FileFs | DirectoryFs {
    if (this.stats) {
      if (this.isFile()) {
        return new FileFs(this.fullPath, this.stats);
      }

      if (this.isDirectory()) {
        return new DirectoryFs(this.fullPath, this.stats);
      }
    }

    throw new Error('Not implemented');
  }
}
