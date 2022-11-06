import { lstatSync } from 'fs';
import path from 'path';
import { Boolean2, String2 } from '~/lib/core';
import { DeclarationScope } from '~/metadata/declaration/scope/declaration-scope';

function isDirectory(fullPath): Boolean2 {
  try {
    const stats = lstatSync(fullPath);
    return stats.isDirectory();
  } catch (error) {
    return false;
  }
}

// function isFile(fullPath): Boolean2 {
//   try {
//     const stats = lstatSync(fullPath);
//     return stats.isFile();
//   } catch (error) {
//     return false;
//   }
// }

export class ImportProvider {
  fullPath: String2;

  static cache = new Map<String2, DeclarationScope>();

  constructor(private importPath: String2) {
    this.fullPath = resolvePath(this.importPath);
  }

  isValid(): Boolean2 {
    return isDirectory(this.fullPath);
  }

  scope(): DeclarationScope {
    throw new Error('Not implemented');
  }
}

function resolvePath(importPath: String2): String2 {
  if (importPath[0] === '~') {
    return path.join(os.homedir(), importPath.slice(1));
  }
  return path.resolve(importPath);
}
