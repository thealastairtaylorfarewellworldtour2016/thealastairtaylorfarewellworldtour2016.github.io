var i=0;

var dataRef = new Firebase("https://adultcatfinder.firebaseio.com/rooms");

var myRoomRef = dataRef.push();

window.setInterval(function(){
  var chat=document.getElementById("chat");
  if (i==0){chat.innerHTML +="<p style='color:blue'>Local Cat: meow meow <i>meow</i>?</p>";}
  else if (i==1){chat.innerHTML +="<p style='color:blue'>Local Cat: moew meow meow meow!!</p>";}
  else if (i==2){chat.innerHTML +="<p style='color:blue'>Local Cat: moew <b>meow meow</b> meow</p>";}
  else if (i==3){chat.innerHTML +="<p style='color:blue'>Local Cat: meow meow!! <b>meow</b></p>";}
  else if (i==4){chat.innerHTML +="<p style='color:blue'>Local Cat: moew?! MEOW meow!?!? meow</p>";}
  else if (i==5){chat.innerHTML +="<p style='color:blue'>Local Cat: meow meow <b><i>meow</i></b> meow</p>";}
  else if (i==6){chat.innerHTML +="<p style='color:blue'>Local Cat: <i>meow</i> meow meow meow</p>";}
  else if (i==7){chat.innerHTML +="<p style='color:blue'>Local Cat: meow meow!! <b>meow</b> meow</p>";}
  else if (i==7){chat.innerHTML +="<p style='color:blue'>Local Cat: meow meow meow MEOW!!</p>";}
  chat.scrollTop=chat.scrollHeight;
  i=i + 1;
  if (i>7) i=0;
},3000);

function addNewText(origin){
  myRoomRef.push({origin:0, text: document.getElementById("chattext").value, time: new Date().valueOf()});
}

function handleKeyPress(e,form){
  var key=e.keyCode || e.which;
  if (key==13) {addNewText(0);}
}

myRoomRef.on('child_added', function (snapshot) {
  var message = snapshot.val();
  console.log(message);
  var chat=document.getElementById("chat");

  if (message.origin == 0) {
    var myColor = "red";
    var name = "You: ";
    document.getElementById("chattext").value = "";
  }
  else {
    var myColor = "blue";
    var name = "Local Cat: ";
  }
  chat.innerHTML +="<p style='color:" + myColor + "'>" + name + message.text + "</p>";
  chat.scrollTop=chat.scrollHeight;
});

function randomStr(m) {
  var m = m || 9; s = '', r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i=0; i < m; i++) { s += r.charAt(Math.floor(Math.random()*r.length)); }
  return s;
}

// Chartbeat
var _sf_async_config={uid:39592,domain:"adultcatfinder.com"};(function(){function e(){window._sf_endpt=(new Date).getTime();var e=document.createElement("script");e.setAttribute("language","javascript");e.setAttribute("type","text/javascript");e.setAttribute("src","//static.chartbeat.com/js/chartbeat.js");document.body.appendChild(e)}var t=window.onload;window.onload=typeof window.onload!="function"?e:function(){t();e()}})()
