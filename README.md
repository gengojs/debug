# gengojs-debug
The debugger console for gengo.js

## Usage

#### ES6
```javascript
import {debugify as debug} from 'gengojs-debug';

debug(namespace:string, level:string, args:*);
```
#### ES5
```javascript
var debug = require('gengojs-debug');

debug(namespace:string, level:string, args:*);
```

In terminal:

```bash
# In OSX, set the namespace and the debug level then run a file:

DEBUG=core, node index.js

# In Windows, set the namespace and the debug level:
DEBUG=gengo.core:warn
# Run the file
node index.js
```

## Namespaces
The available namespaces are:

* core
* plugins
* parser
* router
* backend
* api
* localize
* header

## Levels

The available levels are:

* debug
* warn
* error
* info
* verbose
* silly
