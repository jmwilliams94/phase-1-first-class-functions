function receivesAFunction(customFunction){
    customFunction()
}

function returnsANamedFunction() {
    const namedFn = () => console.log("this is a named function");
    return namedFn;
}

function returnsAnAnonymousFunction() {
    return () => console.log("this is an anonymous function");
}