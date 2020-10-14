function handleClick(){
    var name = document.getElementById("name");
    var lastname = document.getElementById("lastname");

    postUser({
        name: name.value,
        lastname: lastname.value
    })
}


function postUser(data){

    axios.post("https://5f861c22c8a16a0016e6aaba.mockapi.io/users",data).then(function(){
        
        var name = document.getElementById("name");
        var lastname = document.getElementById("lastname");
        name.value = "";
        lastname.value = "";

        alert("User created");
        getUsers();
    }).catch(function(){
        alert("oops we can't create a user.");
    });
}


function getUsers(){
    axios.get("https://5f861c22c8a16a0016e6aaba.mockapi.io/users").then(function(response){
        let stringContent = "";
        console.log(response.data)
        response.data.forEach(element => {
            stringContent += "<tr><td>"+element.name+"</td><td>"+element.lastname+"</td></tr>";
        });
        var table = document.getElementById("table");
        table.innerHTML = stringContent;
    }).catch(function(){
        alert("Oops! we can't found users");
    })
}


function domReady(fn) {
    // If we're early to the party
    document.addEventListener("DOMContentLoaded", fn);
    // If late; I mean on time.
    if (document.readyState === "interactive" || document.readyState === "complete" ) {
      fn();
    }
  }
  
  domReady(() => {
      getUsers();
  });