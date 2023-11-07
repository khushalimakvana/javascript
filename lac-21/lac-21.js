{
    // const numberator = 100 , denominator ='a';

    // try{
    //     console.log(numberator/denominator);
    //     console.log(a);

    // }
    // catch(error){
    //     console.log('An error caught');
    //     console.log('error massage:'+ error);

    // }
}

{

    // const numberator=100; denominator='a';
    // try{
    //     console.log(numberator/denominator);
    //     console.log(a);
    // }
    // catch(error){
    //   console.log('an error caught');
    //   console.log('error message :'+ error);
    // }
    // finally{
    //     console.log('finally will execute every time');
    // }
}

{
    // const number = 40;
    // try{
    //     if(number>50){
    //         console.log('success');
    //     }
    //     else{
    //         throw new Error('the number is low');
    //     }
    //     console.log('hello');
    // }
    // catch(error){
    //     console.log('an error caught');
    //     console.log('error message' + error);
    // }
}

{
    const number= 5;
    try{
        throw new Error('this is the throw');
    }

    catch(error){
        console.log('an error caught');
        if(number + 8 > 10){

            console.log('error message:'+error);
            console.log('error resolved');
        }
        else{

            throw new Error('the value is low');
        }
    }
}