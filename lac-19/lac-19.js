// javascript async/await
{
    // async function example

    // async function f(){
    //     console.log('async function');
    //     return Promise.resolve(1);
    // }
    // f();
}

{
    // async function f(){
    //     console.log('khushi mak');
    //     return Promise.resolve(1);
    // }

    // f().then(function(result){

    //     console.log(result)
    // });
}

{
    // a Promise

    let Promise =new Promise(function(resolve,reject){
        setTimeout(function(){
         resolve('promise resolved')},4000);
        });

        async function asyncFunc(){

            let result =await Promise;

            console.log(result);
            console.log('hello');
        }
        asyncFunc();
    }

