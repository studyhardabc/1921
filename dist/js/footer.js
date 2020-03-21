require.config({
    paths: {
      "jquery":"jquery-1.11.3",
      "productList2":"productList2"
    },
    // shim:{
    //   "MyautoMove":{
    //     exports:"_"
    //   }
    // }
  })
  




  require(["productList2"],function (productList2){
    productList2.ajax();
    productList2.ajax2();
    // productList2.goods();
    // productList1.sc_num();
    productList2.Mygoods();
    productList2.lis();
  })