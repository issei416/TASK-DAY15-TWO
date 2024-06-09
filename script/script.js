// pincode validation
// checkbox validation
//append to table

let form = document.querySelector("#form")
let bool = 1;

form.addEventListener('submit',(e) => {
    e.preventDefault();

    // let formdata = new FormData(form);  ----->how can i make this work?<-----
    // let data = formdata.entries().toArray();
    // let tr = document.createElement("tr");
    // let [name,email,pincode] = data;
    // console.log(name,email,pincode);
    // for(let arr of data){
    //     let data_value = arr[1];
    //     let td = document.createElement("td");
    //     td.textContent = data_value;
    //     tr.appendChild(td);
    // // }
    // let table = document.querySelector("#table");
    // table.appendChild(tr);
    
    let td_array = [];

    let firstname = document.querySelector("#first-name");
    td_array.push(firstname.value)

    let lastname = document.querySelector("#last-name");
    td_array.push(lastname.value)

    let email = document.querySelector("#email");
    td_array.push(email.value);

    let gender = document.querySelector("#gender:checked");
    td_array.push(gender.value); 

    let address = document.querySelector("#address");
    td_array.push(address.value);

    let pincode = document.querySelector("#pincode");
    if(!Number.isInteger(Number(pincode.value))){
        window.alert("Enter a valid pincode");
        return; //is return correct?
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
    td_array.push(state.value);

    let country = document.querySelector("#country");
    td_array.push(country.value);

    console.log(td_array);

    let tablebody = document.querySelector("#tablebody");
    let tr = document.createElement("tr");

    for(data of td_array){
        let td = document.createElement("td");
        td.textContent = data;
        tr.appendChild(td);
    }

    if (bool == 1) {
        tr.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        bool = 0;
    } else {
        tr.style.backgroundColor = "rgba(225, 225, 225, 0.8)";
        bool = 1;
    }

    tablebody.appendChild(tr);

    e.target.reset();
})
