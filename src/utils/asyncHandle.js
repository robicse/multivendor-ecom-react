const asyncHandler = (fn) => (result) => Promise.resolve(fn(result))
  .catch((error) => { 
    console.log(error)
   });

export default asyncHandler;