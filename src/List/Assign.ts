import {Assign as OAssign} from '../Object/Assign'
import {List} from './List'
import {ObjectOf} from './ObjectOf'
import {ListOf} from '../Object/ListOf'

/**
Assign a list of [[List]] into **`L`** with `Merge` (last-in overrides)
@param L to assign to
@param Ls to assign
@returns [[Object]]
@example
```ts
```
*/
export type Assign<L extends List, Ls extends List[]> =
    ListOf<ObjectOf<OAssign<L, {[K in keyof Ls]: ObjectOf<Ls[K] & {}>}>>>
    // in the mapped type above, we make sure tuples are not left with array properties
    // ! leaving array properties and using `Object` utilities is known to cause bugs