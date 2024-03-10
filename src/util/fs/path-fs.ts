import {lstatSync, Stats} from 'fs';
import {homedir} from 'os';
import {join, resolve} from 'path';
import {Boolean2, nothing, Nothing, String2} from '../../lib/core';
import {DirectoryFs} from '../../util/fs/directory-fs';
import {FileFs} from '../../util/fs/file-fs';

export class PathFs {
  fullPath: String2;
  stats: Stats | Nothing = nothing;

  constructor(public path: String2) {
    this.fullPath = this.resolve(path);
    this.setStats();
  }

  setStats(): void {
    try {
      this.stats = lstatSync(this.fullPath);
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
