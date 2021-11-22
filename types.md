# Typing

## Type to Value

| Type     | Value      |
| -------- | ---------- |
| 1        | 1          |
| 1 \|\| 2 | 1, 2       |
| 1..5     | 1, 2, 3, 4 |
| `[ T ]`  | [T]        |
| `[ T ]`  | [T]        |

## Type to Expression

| Type       |           Expression |
| :--------- | -------------------: |
| `1`        |             `x is 1` |
| `String`   |        `x is String` |
| `1 \|\| 2` | `x is 1 \|\| x is 2` |
| `1..5`     |          `x in 1..5` |
| `[ T ]`    |                `[T]` |
| `[ T ]`    |                `[T]` |
