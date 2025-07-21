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
    