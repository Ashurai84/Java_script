// function myDisplayer(some) {
//     console.log(some)

    
// }

// let myPromise = new Promise (function ( myResolve , myReject){
//     let x = 0 ;


//     if ( x==0) {
//         myResolve("ok")

        
//     } else {
//         myReject("failed ")

        
//     }
// }

// );

// myPromise.then(
//     function(value){myDisplayer(value);},
//     function(error){myDisplayer(error);}
//     )




    //  myPromise that i have make 
    // function myDisplayer(result) {
    //     console.log(result);
    // }
    

    // function checkNumberLogic(x, resolve, reject) {
    //     if (x > 0) {
    //         resolve("✅Positive");
    //     } 
    //     else if (x == 0) {
    //         resolve(" Neutral (Zero)");
    //     } 
    //     else {
    //         reject("Error: Negative Number");
    //     }
    // }
    

    // let Sir_checker_be = new Promise(function(myResolve, myReject) {
    //     let x = -5;  
    //     checkNumberLogic(x, myResolve, myReject);  
    // });
    

    // Sir_checker_be.then(
    //     function(value) { myDisplayer(value); },
    //     function(error) { myDisplayer(error); }
    // );
    



// await and aync  function 

    // function boilWater() {
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve("Water boiled");
    //         }, 3000);
    //     });
    // }
    
    // async function makeTea() {
    //     console.log("1. Starting the kettle...");
    //     let water = await boilWater(); // waits 3 sec
    //     console.log("2. " + water);
    //     console.log("3. Making tea...");
    // }
    
    // makeTea();
    






    async function myFunction() {
        let pro = new Promise ((resolve , reject)=>{
            setTimeout(() =>{
                resolve("hello world")
                console.log("hello world")

            },2000)  // Await waiting for 2 sec


        });

        let result = await pro;
        console.log(result)
        
    }

    myFunction().then(
        function(value){console.log(value)},
        function(error){console.log(error);}
    )