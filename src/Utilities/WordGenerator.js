function GetRandomWord() {

    return fetch("https://random-word-api.herokuapp.com/word?number=1")
        .then(res => res.json())
        .then(data => data[0]);
}

export default GetRandomWord;