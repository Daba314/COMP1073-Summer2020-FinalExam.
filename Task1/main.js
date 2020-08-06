/* 

Using the form displayed in index.html, create the following functionality using JavaScript. 

If the user tries to submit the form without entering any info, display an error message on the page that tells them all info is required. 
When users submit their first name and favourite colour, display a customized welcome message on the page in a new H1 that includes their name. Change the background colour of the page to their favourite colour. 

*/
const form = document.querySelector('form');
const firstName = document.getElementsByClassName('firstname');
const lastName = document.getElementsByClassName('lastname');
const favColor = document.getElementsByClassName('favcolor');

;
 

form.onsubmit = function(e){
    
    if(firstName.value === '' || lastName.value === '' || favColor.value === '')
    {
    
        alert("error");
    }
    else if (firstName.value != '' && favColor.value != ''){
        
        document.body.style.backgroundColor = 'red';
        const H1 = document.createElement('h1');
        H1.innerHTML = firstName.value + lastName.value;
        document.body.appendChild(H1);
    }
}
