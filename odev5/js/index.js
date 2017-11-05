//arrays of names to test
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
var i;
//loops to the array and fetch individual array value
for (i = 0; i < names.length; i++) {
    //catch the first character name and check weather it start with j
    if(names[i].charAt(0).toLowerCase() == "j"){
        //call speakGoodbye function if name start wit j
           speakGoodbye(names[i]);
    }
    else {
        //call speakHello function if name doesnt start with j
          speakHello(names[i]);
    }
}

