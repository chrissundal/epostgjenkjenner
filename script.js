let showMessage = '';
let question = '';
let result;
let mailDetect = ''

updateView();
function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <div class="main">
        <div class="question">
            <input type="text" onchange="getAnswer(this.value)" value="${question}">
            <div>${mailDetect}</div>
            <div>valid? ${showMessage}</div>
            
        </div>
    </div>
`;
}

function getAnswer(text) {
    mailDetect = '';
    question = text;
    showMessage = 'false';
    result = question.indexOf('@') + 1;
    if (question.includes('@')) {
        mailDetect = 'email'
        if (question.includes('.', `${result}`) && !question.includes(' ')) {
            showMessage = 'true';
        } else {
            showMessage = 'false'
        }
    } else {
        showMessage = 'false'
    }
    updateView();
}