// json syntax
{
    // "name":"khushi",
    // "lastname" : "makvana" ,
    // "age": 19,
}

{
    // ["apple","mango","banana"]

    // [
    //     {"name":"john","age":22},
    //     {"name":"patel","age":20},
    //     {"name":"mark","age":23}
    // ]
}
{
    const date ={
        "name": "john",
        "age" :  19 ,
        "hobby": {
            "reading": true ,
            "gaming" : false,
             "sport" : "football"
        },
        "class":["javascript","html","css"]
    }
    console.log(date.name);
    console.log(date.hobby);

    console.log(date.hobby.sport);
    console.log(date.class[1]);
}

{
    // const date={
    //     "name":"john",
    //     "age": 22,

    // }
    // console.log(date["name"]);
}

{
    // const jsonDAte='{"name":"john", "age":22}'
    
    // const obj = JSON .stringify(jsonDAte);

    // console.log(obj);
}
