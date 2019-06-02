let dataForm = {
    regexpFirstName : /^\w+ +\w+ +\w+$/,
    strFirstName : '',
    verifyFirstnName :  false,
    regexpLastName : /^\w+(-| )\w+$/,
    strLastName : '',
    verifyLastName : false,
    regexpTelNumbet : /^\+(( |-)?\d){12}$/,
    strTelNumber : '',
    verifyTelNumber : false,
}




window.onbeforeunload = () => { return "New reqest?"}// Delay

let form  = document.forms[0];
form.addEventListener('submit', logSubmit);


function logSubmit(){
    dataForm.strFirstName = (form.children[0]).children[1].value;
    dataForm.verifyFirstnName = dataForm.regexpFirstName.test(dataForm.strFirstName);
   
    dataForm.strLastName = (form.children[0]).children[3].value;
    dataForm.verifyLastName = dataForm.regexpLastName.test(dataForm.strLastName);

    dataForm.strTelNumber = (form.children[0]).children[5].value;
    dataForm.verifyTelNumber = dataForm.regexpTelNumbet.test(dataForm.strTelNumber);
    console.log(dataForm);
    dataForm.strTelNumber.replace( /-/, " " );
    dataForm.strTelNumber = dataForm.strTelNumber.replace( /-| /g, "" );
    dataForm.strTelNumber = dataForm.strTelNumber.replace( /(\d{3})(\d{3})/g, "$1-$2-" );
    console.log(`Your number: ${dataForm.strTelNumber}`);
    //console.log('E123-F456'.replace(/([A-Z])(\d)/g, '$1-$2'));
    showResults(dataForm);
 };



function showResults(dataForm){

let fragment = document.createDocumentFragment();
fragment.appendChild(document.createElement('ul'));


for (var key in dataForm) {
    console.log(dataForm[key]);
    let liElem = document.createElement('li');
    if (dataForm[key] === false) liElem.setAttribute('class','error');
    if (dataForm[key] === true) liElem.setAttribute('class','success');
    liElem.textContent = `${key} : ${dataForm[key]}`;
    fragment.children[0].insertAdjacentElement("beforeEnd",liElem);
};
document.body.lastElementChild.appendChild(fragment);

console.log(document.body.lastElementChild);

 };