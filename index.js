var count=0;

$(".button_style").click(function(){
  count++;
 output();
  });


  function output(){
    if(count%2!==0){
      $(".search_expand").removeClass("search_invisible");
      console.log("expand");
    }
    if(count%2===0){
      $(".search_expand").addClass("search_invisible");
      console.log("contract");
    }

  }
