// pincode validation
// checkbox validation
//append to table

let form = document.querySelector("#form")
let bool = 1;

form.addEventListener('submit',(e) => {
    e.preventDefault();
    
    let td_array = [];

    let firstname = document.querySelector("#first-name");
    td_array.push(firstname.value)

    let lastname = document.querySelector("#last-name");
    td_array.push(lastname.value)

    let email = document.querySelector("#email");
    td_array.push(email.value);

    let gender = document.querySelector("#gender:checked");
    if(gender!==null){
        td_array.push(gender.value); 
    }
    else{
        td_array.push("-"); 
    }

    let address = document.querySelector("#address");
    if(address.value){
        td_array.push(address.value);
    }
    else{
        td_array.push("-")
    }

    let pincode = document.querySelector("#pincode");
    if(!Number.isInteger(Number(pincode.value))){
        window.alert("Enter a valid pincode");
        return; 
    }else{
        td_array.push(pincode.value);
    }

    let checkbox_entries = document.querySelectorAll(".checkbox:checked");
    let checkbox_array = [];
    for(checkbox of checkbox_entries){
        checkbox_array.push(checkbox.value);
    }
    if(checkbox_array.length<3){
        window.alert("Select atleast 3 food items");
        return;
    }else{
    td_array.push(checkbox_array.join(", "));
    }

    let state = document.querySelector("#state");
    if(state.value){
        td_array.push(state.value);
    }
    else{
        td_array.push("-");
    }

    let country = document.querySelector("#country");
    if(country.value){
        td_array.push(country.value);
    }
    else{
        td_array.push("-");
    }

    console.log(td_array);

    let tablebody = document.querySelector("#tablebody");
    let tr = document.createElement("tr");

    for(data of td_array){
        let td = document.createElement("td");
        td.textContent = data;
        if(!bool){
            td.style.backgroundColor = 'rgba(13,110,253,0.6)';
        }
        tr.appendChild(td);
    }

    bool = !bool;

    tablebody.appendChild(tr);

    e.target.reset();
})
