var Myform = document.getElementById("myForm");
 
var formDataArray = [];
Myform.addEventListener('submit', (e) => {
    e.preventDefault();
    var nameValue = e.target[0].value;
    var emailValue = e.target[1].value;
    formDataArray.push({
        name: nameValue,
        email: emailValue
    });
    console.log(formDataArray);
    var divForData = document.createElement('div');
    Myform.appendChild(divForData);
    var p = document.createElement('p');
    divForData.appendChild(p);
    p.classList.add('text-black', 'p-2', 'bg-info');
    p.innerText = "The Name is : " + nameValue + "\n" + "The email is : " + emailValue;
});
