// import  { useEffect } from "react";

// const PromiseComponent = () => {
//   const PromiseExample = () => {
//     const friend = new Promise((resolve, reject) => {
//       let IsChocoLate = true;
//       if (IsChocoLate) {
//         resolve("Promise Resolved");
//       } else {
//         reject("Promise Reject");
//       }
//     });
//     friend
//       .then((resolve) => {
//         console.log(`${resolve}`, "Chocolate gate succesfully");
//       })
//       .catch((reject) => {
//         console.log(reject);
//       });
//   };

//   useEffect(() => {
//     PromiseExample()
//   }, []);
//   return <div></div>;
// };

// export default PromiseComponent;


import React, { useEffect } from 'react'

const PromiseComponent = () => {

    const PromiseOne= (paramOne)=>{
        return (new Promise((resolve, reject)=>{
            if(paramOne==="Nishant") resolve("Promise Resolved")


            else{ reject("Promise UnResolved")}

        }))
    }
    const PromiseTwo= (paramTwo)=>{
        return ( new Promise((resolve, reject)=>{
           if (paramTwo==="Promise Resolved"){
            resolve("Nishant is good boy")
           }
           else{ reject("Nishant is still Good boy")}

        }))
    }

    const PromiseMain= ()=>{
        PromiseOne("Nishant")
        .then((res)=>{
            console.log(res)
            return PromiseTwo(res)
        })
        .then((sResponse)=>{
            console.log(sResponse)
        })
    }

    const Async= async ()=>{
        let res = await PromiseOne("Nishant")
        console.log(res)
        let res2= await PromiseTwo(res)
        console.log(res2)

    }


//   useEffect(()=>{
//     PromiseMain()
//     Async()

//   })
  return (
    <div>
      
    </div>
  )
}

export default PromiseComponent
