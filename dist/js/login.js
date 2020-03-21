require.config({
    paths: {
      "jquery":"jquery-1.11.3",
      "login1":"login1"
    },
    // shim:{
    //   "MyautoMove":{
    //     exports:"_"
    //   }
    // }
  })
  




  require(["login1"],function (login1){
    login1.banner();
  })