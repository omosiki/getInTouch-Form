
 const formY = document.querySelector("#myform")
 
    formY.addEventListener("submit", (event) =>{
        event.preventDefault()
     

            const fullname = document.getElementById('fullname').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById("phone").value;
            const company = document.getElementById("company").value;
            const jobTittle = document.getElementById("job-title").value;
            const message = document.getElementById("message").value;
            const interest = document.getElementById("interest").value;

            // create a data object
               const formData = {
            fullname: fullname,
            email: email,
            phone: phone,
            company: company,
            jobTitle: jobTittle, // Corrected key name
            message: message,
            interest: interest
        };
            console.log("Data to be saved", formData)
            // savetoLocalStorage()
                   // Save to loacal storage
    localStorage.setItem("Data", JSON.stringify(formData))
    console.log("Save local storage")
    
    
    })
    // function display on a table
    function displayData(){
        const tableData = document.querySelector("#dataTable tbody")
            // Get data from local storage
        const saveData = localStorage.getItem("Data")
        if(!saveData){
            console.log("No data found in local storge")
            return;
        }
        const data = JSON.parse(saveData);
        // create Table row
        const row = document.createElement("tr")
        row.innerHTML = `
        <td>${data.fullname}</td>
        <td>${data.email}</td>
        <td>${data.phone}</td>
        <td>${data.company}</td>
        <td>${data.jobTIttle}</td>
        <td>${data.interest}</td>
        `
        tableData.appendChild(row)
    }
    displayData()
    




// const consent = document.getElementById("consent")
// const btn = document.getElementById("submit-btn")
