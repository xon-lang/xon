# Package manager

## Structure

### Author

- Each `author` has a unique name inside a package manager
- `Author` has `scope` list

```
Package manager
|--@author
|  |-- #my-scope
|  `-- #other-scope
`--@other-author

Package manager 2
|--@author
|  |-- #my-scope
|  `-- #other-scope-2
`--@author-2
```

### Scope

- Each `scope` has a unique name inside a package manager
- `Scope` has `package` list

```
my-scope
|-- my-repo
`-- other-repo
```

### Package

- Each `package` has a unique name inside a scope

### Import package

```
import {Number} = "my-scope/my-package"
```

## Features:

- Fund/Sponsor message when installing package if exists
