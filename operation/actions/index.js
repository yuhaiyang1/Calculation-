export const first= (val) => {
    console.log(val);
    return {
        type:'first',
        val:val
    }
   };
export const second= (val) => {
 console.log(val);
   return {
       type:'second',
       val:val
   }
};
export const select= (val) => {
 console.log(val,'select');
   return {
       type:'select',
       val:val
   }
};
