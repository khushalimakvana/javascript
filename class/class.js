{
    // function person(){
    //     this.anme='jeel',
    //     this.age=20

    // }
    // const person1 =new person();
}

{
//     class persone{
//         constructor(name){
//             this.name=name;
//         }
//   }
// }
//   {
//     class persone{
//         constructor(name){
//             this.name=name;
//         }
//     }
//     const person1=new persone('jeel');
//     const person2=new persone('chauhan');

//     console.log(person1.name);
//     console.log(person2.name);
  }

//   javascript class method

{
//     function persone(name){
//         this.name=name;

//         this.greet=function(){
//             return ('hello'+ ''+ this.name);
//         }
//     }
// }

// {
//     class persone{
//         constructor(name){
//             this.name = name;
//         }
//         greet(){
//             console.log(`hello ${this.name}`);
//         }
//     }
//     let person1=new persone('jeel');

//     console.log(person1.name);

//     person1.greet();
}

// getters and setters

{
      class person{
          constructor(name){
            this.name=name;
          }
          get personname(){
            return this.name;
          }
          set personname(x){
            this.name=x;
          }
      }

      let person1 = new person('jeel');
      console.log(person1.name);

      person1.personname='sarah';
      console.log(person1.name);
}

{
  const p= new person();

  class person{
    constructor(name){
      this.name=name;
    }
  }
}