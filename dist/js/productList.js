require.config({
    paths: {
      "jquery":"jquery-1.11.3",
      "productList1":"productList1"
    },
    // shim:{
    //   "MyautoMove":{
    //     exports:"_"
    //   }
    // }
  })
  




  require(["productList1"],function (productList1){
    productList1.ajax();
    productList1.ajax1();
    productList1.ajax2();
    productList1.goods();
    // productList1.sc_num();
    productList1.Mygoods();
    productList1.lis();
  })