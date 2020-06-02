function myFunction() { 

  if(document.getElementById("true").checked){
      document.getElementById("answerResponse").innerHTML="Hahaha";
      document.getElementById("true").checked=false;
  }
  if(document.getElementById("false").checked){
      document.getElementById("answerResponse").innerHTML="No u";
      document.getElementById("false").checked=false;
  }
  
}
function myFunction2() { 

  if(document.getElementById("true").checked){
      document.getElementById("answerResponse").innerHTML="Nice";
      document.getElementById("true").checked=false;
  }
  if(document.getElementById("false").checked){
      document.getElementById("answerResponse").innerHTML="Again?! lol";
      document.getElementById("false").checked=false;
  }
  
}
function myFunction3() { 

  if(document.getElementById("true").checked){
      document.getElementById("answerResponse").innerHTML="Yessir";
      document.getElementById("true").checked=false;
  }
  if(document.getElementById("false").checked){
      document.getElementById("answerResponse").innerHTML="You be trolling to much lol";
      document.getElementById("false").checked=false;
  }
  
}
function checkTwice(num){
  if(num==1){
    document.getElementById("false").checked=false;
  }else{
    document.getElementById("true").checked=false;
  }
}