  function sendData() {
    $.post( "/fun", a , function( returnData ) {
      console.log(returnData);
    });
  }
  
  var a = {
      "name" : "Spencer",
      "age" : 21
    };