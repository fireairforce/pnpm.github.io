---
id: outdated
title: pnpm outdated
---

Check for outdated packages. The check can be limited to a subset of the installed
packages by providing arguments (patterns are supported).

Examples:

```
pnpm outdated
pnpm outdated gulp-* @babel/core
```

## Options

### -r

Check for outdated dependencies in every package found in subdirectories
or in every workspace package, when executed inside a workspace.