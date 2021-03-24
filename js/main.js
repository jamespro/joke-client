document.querySelector('button').addEventListener('click', getJoke)
const jokeID = document.querySelector('#jokeID')
const question = document.getElementById('question')
const answer1 = document.getElementById('answer1')
const answer2 = document.getElementById('answer2')

async function getJoke() {
    try {
        //TODO this needs to check what server you're on,
        //and/or have a way for you to pick which server
        //const res = await fetch('http://localhost:8000/api/joke/'+jokeID.value)
        let localdev = false
        let http_protocol = 'https://'
        let server_name = 'joke-api-jamespro.herokuapp.com'
        if (localdev) {
            //TODO why don't these get defined here? syntax?
            let http_protocol = 'http://'
            let server_name = 'localhost:8000'
        }
        let baseurl = http_protocol+server_name+'/api/joke/'
        const res = await fetch(baseurl+jokeID.value)
        const data = await res.json()
        console.log(data)
        question.innerText = data.question
        answer1.innerText = data.answer1
        answer2.innerText = data.answer2

    } catch (err) {
        console.log(err)
    }

}
