# unityvector2

An unofficial implementation of the [Unity Vector2](https://docs.unity3d.com/ScriptReference/Vector2.html) API as a standalone JS module. In case you just really wanted a Vector2 for doing data visualization or something. :)

## Installation

```js
npm install --save unityvector2
```

## Usage

This supports [most of the Unity methods](https://github.com/mispy/unityvector2/blob/master/src/unityvector2.js). Since JS doesn't yet support operator overloading, the operators are functions instead.

```js
import Vector2 from 'unityvector2'

let a = new Vector2(0, 1)
let b = new Vector2(2, 0)

let c = a.Add(b) // (2, 1)
let d = a.Subtract(b) // (-2, 1)
let e = a.Multiply(2) // (0, 2)
let f = a.Divide(2) // (0, 0.5)
```
