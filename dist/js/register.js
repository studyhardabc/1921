require.config({
    paths: {
      "jquery":"jquery-1.11.3",
      "register1":"register1"
    },
    // shim:{
    //   "MyautoMove":{
    //     exports:"_"
    //   }
    // }
  })
  




  require(["register1"],function (register1){
    register1.banner();
  })