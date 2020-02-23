function getJokeButtonClicked() {
    let firstName = document.getElementById("first-name").value
    let lastName = document.getElementById("last-name").value
    if (firstName == "") {
        firstName = "Chuck"
    }
    if (lastName == "") {
        lastName = "Norris"
    }
    let url = "http://api.icndb.com/jokes/random?firstName=" + firstName + "&lastName=" + lastName + "&exclude=explicit";
    fetch(url)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        // console.log(json.value.joke)        
        document.getElementById("output-div").innerHTML = json.value.joke;
    });
}