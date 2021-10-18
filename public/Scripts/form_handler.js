//take all the information within the form and send to my email

const submitForm = function() {
    let responses = [];


    responses.push(document.getElementById("userName").value);
    responses.push(document.getElementById("userEmail").value);  
    responses.push(document.getElementById("message").value);  
    responses.forEach(element => { console.log(element)});
    
    window.alert("Message Saved!");

}