require.config({
  paths: {
    "jquery":"jquery-1.11.3",
    "header":"header"
  },
  // shim:{
  //   "MyautoMove":{
  //     exports:"_"
  //   }
  // }
})


require(["header"],function (header){
    header.ajax1();
    header.nav();
    header.factory('.imgs','.nums').autoMove1();
    header.tab();
    header.ajax2();
    header.tab1();
    header.introduce();
    header.introduce1();
    header.ajax3();
    header.tab2();
    header.ajax4();
    header.ajax5();
    header.ajax6();
    header.tab3();
    header.tab4();
    header.tab5();
    header.hot();
    header.hot1();
    header.lis();
    header.btn2();
})
