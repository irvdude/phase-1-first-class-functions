function receivesAFunction(callback){
    return callback()
}

function returnsANamedFunction(){
   function namedFunction(){
    console.log("before all");
   }
   return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function() {
      // This is the anonymous function that will be returned
    };
  }

