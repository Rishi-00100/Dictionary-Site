const input = document.querySelector('input')
const btn = document.querySelector('button')
const dict = document.querySelector('.dictionary-app')

async function dictionaryFn(word){
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    const data = await res.json()
    return data[0]
}

btn.addEventListener('click', fetchAndCreateCard)

async function fetchAndCreateCard() {
    try {
        const data = await dictionaryFn(input.value)

        // Add this check
        if(!data || !input.value.trim()){
            dict.innerHTML = `
                <div class="card">
                    <div class="property">
                        <span>Please enter a valid word!</span>
                    </div>
                </div>
            `
            return
        }

        let partOfSpeechArray = []
        for(let i = 0; i < data.meanings.length; i++){
            partOfSpeechArray.push(data.meanings[i].partOfSpeech)
        }

        dict.innerHTML = `
            <div class="card">
                <div class="property">
                    <span>Word:</span>
                    <span>${data.word}</span>
                </div>
                <div class="property">
                    <span>Phonetics:</span>
                    <span>${data.phonetic || data.phonetics[1]?.text || 'Not available'}</span>
                </div>
                <div class="property">
                    <span>Audio:</span>
                    <audio controls src="${data.phonetics.find(p => p.audio)?.audio || ''}"></audio>
                </div>
                <div class="property">
                    <span>Definition:</span>
                    <span>${data.meanings[0].definitions[0].definition}</span>
                </div>
                <div class="property">
                    <span>Example:</span>
                    <span>${data.meanings[0].definitions[0].example || 'No example available'}</span>
                </div>
                <div class="property">
                    <span>Parts of Speech:</span>
                    <span>${partOfSpeechArray.join(', ')}</span>
                </div>
            </div>
        `
    } catch(error) {
        dict.innerHTML = `
            <div class="card">
                <div class="property">
                    <span>Word not found! Please try again.</span>
                </div>
            </div>
        `
    }
}
