# Project

## Structure

- Each `project` has a one or many local `packages`

```
project
|-- #
|   |-- package-1
|   |-- package-2
|   `-- ...
`-- ...
```

- Each language element in a `package` is available in the whole `project` by `import #package` name (there is no need to specify the exact path of a code file)

`project/#/some/file/a.xon`

```
model A
```

`project/#/some/other/file/b.xon`

```
import {A} = "#some"

model B: A
```
