let showMessage = '';
let question = '';
let result;
let mailDetect = ''

updateView();
function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <div class="grid">
    <div class="main">
    <h1>Epost sjekker 2000</h1>
            <div class="question">
                <input type="text" onchange="getAnswer(this.value)" value="${question}">
                <div class="detect">${mailDetect}</div>
            </div>
            <div>${showMessage}</div>
        </div>
    </div>
`;
}

function getAnswer(text) {
    mailDetect = '';
    question = text;
    showMessage = '';
    result = question.indexOf('@') + 1;
    if (question.includes('@')) {
        mailDetect = 'email'
        if (question.includes('.', `${result}`) && !question.includes(' ')) {
            showMessage = `<button onclick="sendMail()">Send epost</button>`;
        } else {
            showMessage = 'Må ha punktum, og ingen mellomrom'
        }
    } else {
        showMessage = 'er ikke @'
    }
    updateView();
}
function sendMail() {
    if (confirm('Vil du sende epost?') == true) {
        alert('Beklager, har ikke funksjonalitet for dette enda')
        mailDetect = '';
        showMessage = '';
        question = '';
        updateView();
    } else {
        updateView();
        alert('nei, så drit i det da')

    }
}