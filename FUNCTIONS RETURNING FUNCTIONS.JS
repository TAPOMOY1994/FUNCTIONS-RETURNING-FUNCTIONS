function two(){

    return function(){
        console.log('two');
    }
}


let myFunction=two();
myFunction();






function num(){

    return function(){
        console.log(7);
    }
}


let number=num();
number();

