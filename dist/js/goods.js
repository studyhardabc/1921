require.config({
    paths: {
      "jquery":"jquery-1.11.3",
      "goods1":"goods1"
    },
    // shim:{
    //   "MyautoMove":{
    //     exports:"_"
    //   }
    // }
  })
  




  require(["goods1"],function (goods1){
        goods1.ajax();
        goods1.productList();
        goods1.left();
        goods1.right();
        // goods1.sc_num();
        goods1.rovmer();
        goods1.inp();
        goods1.inp1();
        goods1.li1();
        goods1.inp3();
        goods1.box1();
        goods1.box2();
  })