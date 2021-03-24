document.querySelector('button').addEventListener('click', getJoke)
const jokeID = document.querySelector('#jokeID')
const question = document.getElementById('question')
const answer1 = document.getElementById('answer1')
const answer2 = document.getElementById('answer2')

async function getJoke() {
    try {
        const res = await fetch('http://localhost:8000/api/joke/'+jokeID.value)
        const data = await res.json()
        console.log(data)
        question.innerText = data.question
        answer1.innerText = data.answer1
        answer2.innerText = data.answer2

    } catch (err) {
        console.log(err)
    }

}
