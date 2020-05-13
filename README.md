# accessibility-checker-dep-issue

Repo to demonstrate dependency issue with `accessibility-checker` package.

1. Clone repo
2. `npm install`
3. `npm start`

The following error will appear:
```
% npm start

> accessibility-checker-dep-issue@1.0.0 start /Users/drstanic@us.ibm.com/code/accessibility-checker-dep-issue
> node index.js

internal/modules/cjs/loader.js:638
    throw err;
    ^

Error: Cannot find module 'request'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:636:15)
    at Function.Module._load (internal/modules/cjs/loader.js:562:25)
    at Module.require (internal/modules/cjs/loader.js:690:17)
    at require (internal/modules/cjs/helpers.js:25:18)
    at Object.<anonymous> (/Users/drstanic@us.ibm.com/code/accessibility-checker-dep-issue/node_modules/accessibility-checker/lib/ACHelper.js:17:17)
    at Module._compile (internal/modules/cjs/loader.js:776:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:787:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! accessibility-checker-dep-issue@1.0.0 start: `node index.js`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the accessibility-checker-dep-issue@1.0.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/drstanic@us.ibm.com/.npm/_logs/2020-05-13T13_43_46_510Z-debug.log
```