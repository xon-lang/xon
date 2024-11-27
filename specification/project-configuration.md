# Project configuration

- Each `project` use `config file` with name `xon.config.json` in the `root` directory

## Structure

```json
{
  "name": "project-name", // dash separated words
  "version": "1.0.0", // semantic versioning
  "author": "project author",
  "description": "project description", // length limited any symbolic text
  "license": "MIT", // license name or license information,
  "keywords": ["syntax", "programming language"], // array of words,
  "dependencies": {
    // list of package manager servers
    "xon": {
      // package manager server
      "@some/package": "version" // package scope/name and version
    },
    "other-package-manager": {
      "@other/package": "version"
    }
  }
}
```
