# First part in local notepad
# Second part at markdown files

## Define functions
1. use function as keyword
2. define parameters in brackets()
3. implement the function body in braces{}

## to envoke/call the function
function_name();
> using functionname+brackets() -> return function result
> using functionname -> return the whole funtion contents


pass the value through ()
return value in function

> since ECMA-6, function can provide default values

---

## global variables & local variables
defined in function body, 
    with `var let const` - local variable 
    nothing `data = 100` - global variable

    ? console.log(JSON.stringify(objEMployee))?


---
## Objects
### 1.Browse SUPPORT
> page 67/193 in ppt
### 2.Writing calsses
CLassess are a template for creating objects.
    use key word `class` to create a class
    always add a method named `constructor()`
    ```JavaScript
    class ClassName(){
        ...
        constructor(){...}
    }
    ```

class expression(class has its own name) & class declaration() - 2 ways to define class

define constructors

```JavaScript
class Car(){
    ...
    constructor(){

    }

    accelerate(){
        ..
        this.speed++;   // what is this?
    }

}
```



Getter and Setter
Creating Instances or Objects
---
Notes: a js class is not template object

### 3.Instantiating classes

### 4.Inheritance
very similar to Java & C#
key word `extends`

------learn from 
### 5. static methods
?

## Error Handling
?
logic error, runtime error, 
manage runtime errors: 
    to manage runtime errors in JS, the error handling concept:
        1. try
        2. catch
        3. finally



------
# NOde.JS

PS C:\W2JS>
 *  History restored 

PS C:\W2JS> pwd 

Path   
----   
C:\W2JS


PS C:\W2JS> 
 *  History restored 

PS C:\W2JS> node .\helloworld.js
node:internal/modules/cjs/loader:1228
  throw err;
  ^

Error: Cannot find module 'C:\W2JS\helloworld.js'
    at Function._resolveFilename (node:internal/modules/cjs/loader:1225:15)
    at Function._load (node:internal/modules/cjs/loader:1055:27)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:220:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)
    at node:internal/main/run_main_module:36:49 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v22.14.0
PS C:\W2JS> pwd

Path   
----
C:\W2JS


PS C:\W2JS> cd NodeJS_Example
PS C:\W2JS\NodeJS_Example> node .\helloworld.js
Hello, World! Hello Node.js!
PS C:\W2JS\NodeJS_Example> npm --version
10.9.2
PS C:\W2JS\NodeJS_Example> npm --init
npm <command>

Usage:

npm install        install all the dependencies in your project
npm install <foo>  add the <foo> dependency to your project
npm test           run this project's tests
npm run <foo>      run the script named <foo>
npm <command> -h   quick help on <command>
npm -l             display usage info for all commands
npm help <term>    search for help on <term> (in a browser)
npm help npm       more involved overview (in a browser)

All commands:

    access, adduser, audit, bugs, cache, ci, completion,
    config, dedupe, deprecate, diff, dist-tag, docs, doctor,
    edit, exec, explain, explore, find-dupes, fund, get, help,
    help-search, hook, init, install, install-ci-test,
    install-test, link, ll, login, logout, ls, org, outdated,
    owner, pack, ping, pkg, prefix, profile, prune, publish,
    query, rebuild, repo, restart, root, run-script, sbom,
    search, set, shrinkwrap, star, stars, start, stop, team,
    test, token, uninstall, unpublish, unstar, update, version,
    view, whoami

Specify configs in the ini-formatted file:
    C:\Users\Administrator\.npmrc
or on the command line via: npm <comma

Specify configs in the ini-formatted file:
    C:\Users\Administrator\.npmrc
or on the command line via: npm <comma    C:\Users\Administrator\.npmrc
or on the command line via: npm <command> --key=value
    C:\Users\Administrator\.npmrc
or on the command line via: npm <command> --key=value

More configuration info: npm help config
Configuration fields: npm help 7 config

npm@10.9.2 C:\Program Files\nodejs\node_modules\npm
PS C:\W2JS\NodeJS_Example> npm install express

added 67 packages in 4s

14 packages are looking for funding
  run `npm fund` for details
PS C:\W2JS\NodeJS_Example> mkdir nodeapp   


    Directory: C:\W2JS\NodeJS_Example


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----         7/22/2025   9:16 AM                nodeapp


PS C:\W2JS\NodeJS_Example> cd .\nodeapp\
PS C:\W2JS\NodeJS_Example\nodeapp> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (nodeapp) sampleapp
version: (1.0.0)                                                                                                          
description: introduction to backend development using node and express
entry point: (index.js)                                                                                                   
test command: jest
git repository:                                                                                                           
keywords:                                                                                                                 
author: Lynn                                                                                                              
license: (ISC)                                                                                                            
About to write to C:\W2JS\NodeJS_Example\nodeapp\package.json:

{
  "name": "sampleapp",
  "version": "1.0.0",
  "description": "introduction to backend development using node and express",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "author": "Lynn",
  "license": "ISC"
}


Is this OK? (yes) yes

PS C:\W2JS\NodeJS_Example\nodeapp> 