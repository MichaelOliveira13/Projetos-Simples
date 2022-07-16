const darkModeClass = 'dark-mode';
const button = document.getElementById('selecionar');
const h1 = document.getElementById('page-inic');
const body = document.getElementsByTagName('body')[0]; 
const footer = document.getElementsByTagName('footer')[0]; 
//[0] -> usado para não retornar um array quando se pega elementos pela TagName

//evento de clicar o mouse
button.addEventListener('click', changeMode);

//função usada para chamar outras funções
function changeMode(){
    changeClass();
    changeText();
}//uma função só pode exercer uma único "trabalho"

//função que altera as classes da página
function changeClass(){
    //toggle = interruptor (liga ou desliga)
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

//função que altera o texto da página
function changeText(){
    const ligarluz = "Ligar a Luz!";
    const desligaluz = "Desligar a Luz!";
    if (body.classList.contains(darkModeClass)) {
        button.innerHTML = ligarluz;
        return;
    }
    button.innerHTML = desligaluz;
}