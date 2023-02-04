document.querySelector('button').addEventListener('click', getJazzFacts)

function getJazzFacts() {
fetch("https://binaryjazz.us/wp-json/genrenator/v1/genre/")
.then(res => res.json())
.then(data => {
    console.log(data)
    document.querySelector('p').innerText = data += data
})
}