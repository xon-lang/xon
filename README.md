# xon
The xon is an open-source programming language

# build

`cd xon`

`npm i`

`npm run build`

# compile

`npm run parse -- examples/statement/app.xon`

`app.xon` source content:

```go
a: 5 + 6
b: a + 3

s: 'Привет 日本国'
wprintf(s)
```

`dist/app.c` transpilation content:

```c
#include <stdio.h>
#include "stdlib.h"
#include <wchar.h>
#include <locale.h>
#include <fcntl.h>
#include <io.h>

int main() {
    _setmode(_fileno(stdout), 0x00020000);
    
    int a = 5 + 6;
    int b = a + 3;
    wchar_t * s = L"Привет 日本国\n";
    wprintf(s);
    return 0;
}
```
