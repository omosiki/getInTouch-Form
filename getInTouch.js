
 const formY = document.querySelector("#myform")
    
document.addEventListener("DOMContentLoaded", ()=>{
      if(!formY){
        console.log("Form with id myform not Found")
        return;
      }
    formY.addEventListener("submit", (event) =>{
        event.preventDefault()
     

            const fullname = document.getElementById('fullname').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById("phone").value;
            const company = document.getElementById("company").value;
            const jobTittle = document.getElementById("job-title").value;
            const message = document.getElementById("message").value;
            const interest = document.getElementById("interest").value;
            console.log(fullname,
                email,
                phone,
                company,
                jobTittle, 
                message,
                interest)
    })
})



// const consent = document.getElementById("consent")
// const btn = document.getElementById("submit-btn")
