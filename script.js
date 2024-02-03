    
   
 
    
    const selectAll = document.getElementById("selectAll");
    const showPassword = document.getElementById("showPassword");
    const mainForm = document.getElementById("regFormMain");
    const formModal  = document.getElementById("formModal")
    let flag = false;
    let editMode =true;
    let aryObjValue = [
      {
          DateOfBrith: "1991-06-01",
          address: "moahli",
          confirmPassword: "Nish@nt123",
          course: "React Native",
          endDate: "2021-06-06",
          firstname: "nishant",
          gender: "male",
          lastname: "Kaushal",
          password: "Nish@nt123",
           phone: "1325468978",
           qualification:"graduation",
           startDate: "2020-06-06",
           userAge: "32",
           userEmail:"n@gmail.com"
      },
      {
          DateOfBrith: "1991-07-06",
          address: "moahli",
          confirmPassword: "Nish@nt123",
          course: "PHP",
          endDate: "2021-06-06",
          firstname: "anil",
          gender: "male",
          lastname: "Kaushal",
          password: "Nish@nt123",
           phone: "1325468971",
           qualification:"12th Standard",
           startDate: "2020-06-06",
           userAge: "32",
           userEmail:"n1@gmail.com"
      }
      ,
      {
          DateOfBrith: "1991-06-06",
          address: "moahli",
          confirmPassword: "Nish@nt123",
          course: "PHP",
          endDate: "2021-06-06",
          firstname: "rohit",
          gender: "male",
          lastname: "bansal",
          password: "Nish@nt123",
           phone: "1325468973",
           qualification:"graduation",
           startDate: "2020-06-06",
           userAge: "32",
           userEmail:"n2@gmail.com"
      }
      ,
      {
          DateOfBrith: "1991-06-06",
          address: "moahli",
          confirmPassword: "Nish@nt123",
          course: "React Native",
          endDate: "2021-06-06",
          firstname: "uday",
          gender: "female",
          lastname: "Khan",
          password: "Nish@nt123",
           phone: "1325448971",
           qualification:"12th Standard",
           startDate: "2020-06-06",
           userAge: "32",
           userEmail:"n3@gmail.com"
      }
      ,
      {
          DateOfBrith: "1991-06-06",
          address: "moahli",
          confirmPassword: "Nish@nt123",
          course: "React Native",
          endDate: "2021-06-06",
          firstname: "uday",
          gender: "male",
          lastname: "Kapoor",
          password: "Nish@nt123",
           phone: "1341478972",
           qualification:"javaScript",
           startDate: "2020-06-06",
           userAge: "32",
           userEmail:"n4@gmail.com"
      }
      ,
      {
          DateOfBrith: "1991-06-06",
          address: "moahli",
          confirmPassword: "Nish@nt123",
          course: "React Native",
          endDate: "2021-06-06",
          firstname: "hinihh",
          gender: "male",
          lastname: "Kaushal",
          password: "Nish@nt123",
           phone: "1311468971",
           qualification:"graduation",
           startDate: "2020-06-06",
           userAge: "32",
           userEmail:"n5@gmail.com"
      }
      ,
      {
          DateOfBrith: "1991-06-06",
          address: "moahli",
          confirmPassword: "Nish@nt123",
          course: "javaScript",
          endDate: "2021-06-06",
          firstname: "angjhgjhgil",
          gender: "female",
          lastname: "Kaushal",
          password: "Nish@nt123",
           phone: "1325668971",
           qualification:"10th Standard",
           startDate: "2020-06-06",
           userAge: "32",
           userEmail:"n6@gmail.com"
      }
      ,
      {
          DateOfBrith: "1991-06-06",
          address: "moahli",
          confirmPassword: "Nish@nt123",
          course: "React js",
          endDate: "2021-06-06",
          firstname: "vikas",
          gender: "male",
          lastname: "mathur",
          password: "Nish@nt123",
           phone: "1225468971",
           qualification:"10th Standard",
           startDate: "2020-06-06",
           userAge: "32",
           userEmail:"n7@gmail.com"
      }
      ,
      {
          DateOfBrith: "1991-06-06",
          address: "moahli",
          confirmPassword: "Nish@nt123",
          course: "React Native",
          endDate: "2021-06-06",
          firstname: "akshay",
          gender: "male",
          lastname: "thakur",
          password: "Nish@nt123",
           phone: "1325433971",
           qualification:"12th Standard",
           startDate: "2020-06-06",
           userAge: "32",
           userEmail:"n9@gmail.com"
      }
      ,
      {
          DateOfBrith: "1991-06-06",
          address: "moahli",
          confirmPassword: "Nish@nt123",
          course: "React js",
          endDate: "2021-06-06",
          firstname: "nishant",
          gender: "male",
          lastname: "kohli",
          password: "Nish@nt123",
           phone: "1325423971",
           qualification:"12th Standard",
           startDate: "2020-06-06",
           userAge: "32",
           userEmail:"n8@gmail.com"
      }
  ];
    let obj;
    //make modal invisible
    formModal.style.setProperty("display","none");
    
    
      //delete row of data in table
      function deleteDataTable(){
     const DeleteUserdata = document.querySelectorAll(".userDeleteButton");

     DeleteUserdata.forEach((el,key)=>{
      el.addEventListener("click",(e)=>{
        e.preventDefault();
        if (confirm("are you sure to delete")) {
        
        
        
        aryObjValue.splice(key,1);
        renderDataIntoTable(aryObjValue);
        makeDeleteAllVisible(aryObjValue,selectAll);
        makeDeleteAllVisible(aryObjValue,deleteSelectedUser);
        deleteDataTable();
        editDataSpecificUser();
        }
      })
      
     })
     
    }
    
    


    let empty = true;
     //delete Selected  user data
    let deleteSelectedUser = document.getElementById("deleteSelectedUser");
    makeDeleteAllVisible(aryObjValue,deleteSelectedUser);
     deleteSelectedUser.addEventListener("click",(e)=>{
      e.preventDefault();
      
      if(confirm("are you sure to delete selected")){
      document.querySelectorAll(".users").forEach((el,key)=>{
               
         
               if(el.checked){
                 console.log(el.parentElement.parentElement.getElementsByClassName("emailData")[0].textContent);
                  aryObjValue.forEach((arrayel,index)=>{
                  if(aryObjValue[index].userEmail == el.parentElement.parentElement.getElementsByClassName("emailData")[0].textContent.toString()){

                    console.log("hii",index);
                    aryObjValue.splice(index,1);
                    renderDataIntoTable(aryObjValue);
                    makeDeleteAllVisible(aryObjValue,selectAll);
                    makeDeleteAllVisible(aryObjValue,deleteSelectedUser);
                    editDataSpecificUser();
                    deleteDataTable()
                    empty = true;
                  }
                 })
                     
                  
                  
                 
                // console.log(aryObjValue);

                
                
               } 
               else if(!el.checked){
                 
                empty = false;
               }
               
      })
      
    }
      
     })
    
     
    
    // all  userdata  deleted

   
        selectAll.addEventListener("click",(e)=>{
          e.preventDefault();
      if(confirm("are you sure to delele all")){
        aryObjValue.forEach((el,key)=>{
          aryObjValue.splice(key);
          renderDataIntoTable(aryObjValue);
          makeDeleteAllVisible(aryObjValue,selectAll);
          makeDeleteAllVisible(aryObjValue,deleteSelectedUser);
          editDataSpecificUser();
          deleteDataTable()
        })
      }
      
      })
      

    // making the password visible
     showPassword.addEventListener("click",(e)=>{
        const password = document.getElementById("password");
        if(password.type =="password"){
        password.type="text"
     }
     else if( password.type == "text"){
        password.type="password"

     }}
     )
   // make your Select all invisible
     function makeDeleteAllVisible(ary,deleteall){
      if(ary.length ==0){
        deleteall.style.setProperty("visibility","hidden")
      }
      else if(ary.length >0){
        deleteall.style.setProperty("visibility","visible")
      }

     }
     makeDeleteAllVisible(aryObjValue,selectAll);




//get mobile number  and verify the unique mobile number 


     function getPhoneData(){
      let vaild= true;
      
       const phoneary = aryObjValue.map((el,key)=>{
              return el.phone;
       })
      //  console.log(phoneary);
      const unvalidPhone =  phoneary.find((el)=>{
        return parseInt(document.forms["regform"]["phone"].value )=== parseInt(el) ;
       })
       if(unvalidPhone){
        vaild = false;
       }
       else{
        vaild = true;
       }
      return vaild;
    }


//get emails  and verify the unique email 

    function getEmailData(){
      let vaild= true;
      
       const emailary = aryObjValue.map((el,key)=>{
              return aryObjValue[key].userEmail;
       })
      //  console.log(emailary);
      const unvalidEmail =  emailary.find((el)=>{
        return document.forms["regform"]["userEmail"].value === el 
          
       })
       if(unvalidEmail){
        vaild = false;
       }
       else{
        vaild = true;
       }
      return vaild;
    }



//get min value of end date of course
     function getMinValueEndDate(){
      document.getElementById("endDate").setAttribute("min",`${document.getElementById("startDate").value}`) 
      
     
   }


//keyup event for dynamic check the error  
   

 document.getElementById("first_name").addEventListener("keyup",(e)=>{
         
  validateFirstName(document.forms["regform"]["firstname"].value, "fnameEr", /[0-9*.-@#$%&^]/g);
      })

  document.getElementById("last_name").addEventListener("keyup",(e)=>{
         
    validateLastName(document.forms["regform"]["lastname"].value, "lnameErr", /[0-9*.-@#$%&^]/g);
            })


  
   document.getElementById("user_email").addEventListener("keyup",(e)=>{
         
    validateEmailAddress(document.forms["regform"]["userEmail"].value, "emailErr", /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/gim);
            })




   document.getElementById("phone_number").addEventListener("keyup",(e)=>{
         
    validatePhone(document.forms["regform"]["phone"].value, "phoneErr", /^\d+$/g);
    })



    document.getElementById("address").addEventListener("keyup",(e)=>{
         
      validateAddress(document.forms["regform"]["address"].value, "addressErr");
      })

      document.getElementById("DateOfBrith").addEventListener("keyup",(e)=>{
         
        validateDateofBrith(document.forms["regform"]["DateOfBrith"].value, "DobErr");
        })

        document.getElementById("password").addEventListener("keyup",(e)=>{
         
          validationPassword(document.forms["regform"]["password"].value, "passwordErr",/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm);
          })
      
          document.getElementById("confirmPassword").addEventListener("keyup",(e)=>{
  
            valildateConfirmPassword(document.forms["regform"]["confirmPassword"].value, document.forms["regform"]["password"].value,
            "confirmPasswordErr",/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
          })



         // function for edit detail for user 
          function editDataSpecificUser(){
  
            const editUserData  = document.querySelectorAll(".userEditButton").forEach((el,key)=>{
             el.addEventListener("click",(e)=>{
               e.preventDefault();
               if (confirm("are you sure to edit")) {
                 
               
               const user = aryObjValue[key]
               filldataInFrom(user)
               renderDataIntoTable(aryObjValue);
               makeDeleteAllVisible(aryObjValue,selectAll);
               makeDeleteAllVisible(aryObjValue,deleteSelectedUser);
               
               deleteDataTable();
               editDataSpecificUser();
               document.getElementById("selectAll").style.setProperty("visibility","hidden")
               document.getElementById("deleteSelectedUser").style.setProperty("visibility","hidden")
              const disabled = document.getElementsByClassName("userDeleteButton");
              formModal.style.setProperty("display","");
              const arydisabledbtns =[...disabled]
              arydisabledbtns.forEach((el)=>{
                 el.style.setProperty("visibility","hidden")
               })
               editMode =false;
               }
             })
           
           
           
           
            })
            return editMode;
           }

          
    



  // function for Main Validation
    function validateFrom() {
      const regText = /[0-9*.-@#$%&^]/g;
      const regPhone =
        /^\d+$/g;
      const regEmail = /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/gim;
      const regPassword =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
      
      const fname = obj.firstname;
      const lastname = obj.lastname;
      const Vemail = obj.userEmail;
      const genderSelect = obj.gender;
      const phone = obj.phone;
      const address = obj.address;
      const Dob = obj.DateOfBrith;
      const qualification = obj.qualification;
 
        

      const password = obj.password;
       
        const Course = obj.course;
       
        const startingDate= obj.startDate;
        const endingDate = obj.endDate;
       
      const confirmPassword = obj.confirmPassword;
      
      


       const v1 = validateFirstName(fname, "fnameEr", regText);
       
       const v2= validateLastName(lastname, "lnameErr", regText);
      const v3 = validateAddress(address, "addressErr");
      const v4 =validateGender(genderSelect, "genderErr");
      let v5 = validateEmailAddress(Vemail, "emailErr", regEmail);
       let v6= validatePhone(phone, "phoneErr", regPhone);
     const v7 = validateDateofBrith(Dob, "DobErr");
     const v8 = validateQualification(qualification,"QualificationErr")
      const v9 = validateCourse(Course,"cousreErr");
      const v10 =validateStartingDate(startingDate,Course,"startDateErr");
      const v11 =validateEndDate(endingDate,startingDate,"endDateErr")
      const v12 =validationPassword(password, "passwordErr", regPassword);
      //  const v13 =valildateConfirmPassword(confirmPassword, password,"confirmPasswordErr",regPassword);
       
       if(!editDataSpecificUser()){
        v5 =true;
        v6 =true;
       }


     
            // console.log(v1 ,v2 ,v3  , v4  , v5  , v6  , v7  , v8  , v9 , v10 , v11 , v12 ,v13);
            if(v1 && v2 && v3 && v4 && v5 && v6 && v7 && v8 && v9 && v10 && v11 && v12  ){
              
              return true;
            }
            else {
              return false;
            }


    }


//  function render the data on table 

 function renderDataIntoTable(ary){
  const table = document.getElementById("userTbody");
  const tableBody = document.createElement("tbody");
  tableBody.id ="userTbody";
    ary.forEach((value,index)=>{
      
    const tableRow = document.createElement("tr");
    tableRow.className="dataRow"

      tableRow.innerHTML = `<td><input  class="users"  type="checkbox" ></td>
    <td class ="fnameData">${ary[index].firstname}</td>
            <td class="lnameData">${ary[index].lastname}</td>
            <td class ="emailData">${ary[index].userEmail}</td>
            <td class ="genderData">${ary[index].gender}</td>
            <td class="phoneData">${ary[index].phone}</td>
            <td class ="addressData">${ary[index].address}</td>
            <td class ="DateOfBrithData">${ary[index].DateOfBrith}</td>
            <td class = "qualificationdata">${ary[index].qualification}</td>
            <td class = "courseData">${ary[index].course}</td>
            <td>${ary[index].startDate} - ${ary[index].endDate}</td>
            <td><button class="userEditButton" type="button">Edit</button></td>
            <td><button class="userDeleteButton" type="button">Delete</button></td>`;
          
           tableBody.appendChild(tableRow);
            
    })
    table.replaceWith(tableBody)
   
 }
 renderDataIntoTable(aryObjValue)
 deleteDataTable();
 editDataSpecificUser()

//function fill the form after clicking on edit 

function filldataInFrom(objectInary){
  
  document.forms["regform"]["firstname"].value =objectInary.firstname 
  document.forms["regform"]["lastname"].value =objectInary.lastname 
   document.forms["regform"]["userEmail"].value =objectInary.userEmail 
  document.forms["regform"]["gender"].value =objectInary.gender 
  document.forms["regform"]["phone"].value =objectInary.phone 
  document.forms["regform"]["address"].value =objectInary.address 
  document.forms["regform"]["DateOfBrith"].value =objectInary.DateOfBrith 
  document.forms["regform"]["qualification"].value =objectInary.qualification 
  document.forms["regform"]["course"].value =objectInary.course 
  document.forms["regform"]["startDate"].value =objectInary.startDate 
  document.forms["regform"]["endDate"].value =objectInary.endDate 
  document.forms["regform"]["password"].value =objectInary.password 
  document.forms["regform"]["confirmPassword"].value =objectInary.confirmPassword 

  document.forms["regform"]["userEmail"].readOnly =true;
  document.forms["regform"]["phone"].readOnly =true;
  document.getElementById("emailErr").innerHTML =
  "* you are in edit mode You can't change email";
  document.getElementById("phoneErr").innerHTML =
  "* you are in edit mode You can't change phone";

  document.getElementById("passwordContainer").style.display ="none"

}



// functions for validation 

    function validateFirstName(inputname, errorSpan, reg) {
      if (!inputname) {
        document.getElementById(`${errorSpan}`).innerHTML =
          "* Please Enter Your First Name";
        flag = false;
      }  else if (reg.test(inputname)) {
        document.getElementById(`${errorSpan}`).innerHTML =
          "* Name only contain Alphabets";
        flag = false;
      }
      else if (inputname.length < 3) {
        document.getElementById(`${errorSpan}`).innerHTML =
          "* Name Must contain more then 2 character";
        flag = false;
      } else if (inputname.length > 15) {
        document.getElementById(`${errorSpan}`).innerHTML =
          "* Name Must contain less then 14 character";
        flag = false;
      } else {
        document.getElementById(`${errorSpan}`).innerHTML = "";
        flag =true
      }
      return flag
    }




    function validateLastName(inputname, errorSpan, reg) {
      if (!inputname) {
        document.getElementById(`${errorSpan}`).innerHTML =
          "* Please Enter Your Last Name";
        flag = false;
      }
      else if (reg.test(inputname)) {
        document.getElementById(`${errorSpan}`).innerHTML =
          "* Name only contain Alphabets";
        flag = false;
      }
      else if (inputname.length < 3) {
        document.getElementById(`${errorSpan}`).innerHTML =
          "* Name Must contain more then 2 character";
        flag = false;
      } else if (inputname.length > 15) {
        document.getElementById(`${errorSpan}`).innerHTML =
          "* Name Must contain less then 14 character";
        flag = false;
      }  else {
        document.getElementById(`${errorSpan}`).innerHTML = "";
        flag =true
      }
      return flag
    }



    function validateAddress(inputname, errorSpan) {
      if (!inputname) {
        document.getElementById(`${errorSpan}`).innerHTML =
          "* Please Select Your Address";
        flag = false;
      } else {
        document.getElementById(`${errorSpan}`).innerHTML = "";
        flag =true
      }
      return flag
    }




    function validateGender(inputname, errorSpan) {
      if (!inputname) {
        document.getElementById(`${errorSpan}`).innerHTML =
          " * Please Select Your Gender";
        flag = false;
      } else {
        document.getElementById(`${errorSpan}`).innerHTML = "";
        flag =true
      }
      return flag
    }



    function validateEmailAddress(inputname, errorSpan, reg) {
      if (!inputname) {
        document.getElementById(`${errorSpan}`).innerHTML =
          "* Please Enter Your Email";
        flag = false;
      } else if (!reg.test(inputname)) {
        document.getElementById(`${errorSpan}`).innerHTML =
          "* Email Must Contain '@'and '.' Example : ex123@gmail.com ";
        flag = false;
      }
      else if (!getEmailData()) {
        document.getElementById(`${errorSpan}`).innerHTML =
          "* Email already registered try another email";
        flag = false;
      }
       else {
        document.getElementById(`${errorSpan}`).innerHTML = "";
        flag =true;
      }
      return flag
    }



   function validateQualification(inputname, errorSpan){
    if (!inputname) {
        document.getElementById(`${errorSpan}`).innerHTML =
          "* Please Choose Your Qualifications";
        flag = false;
      }
      else{
        document.getElementById(`${errorSpan}`).innerHTML = "";
        flag =true
      }
      return flag
   }

   function validateCourse(inputname,errorSpan){
    if(!inputname){

      document.getElementById(`${errorSpan}`).innerHTML =
          "* Please Choose Your Course";
        flag = false;
    }
    else{
      document.getElementById(`${errorSpan}`).innerHTML =
          "";
          flag =true
    }
    return flag
   }


   function validateStartingDate(inputconfirm, inputnameC, errorSpan){

     if(inputnameC && !inputconfirm) {

      document.getElementById(`${errorSpan}`).innerHTML =
          "* please Enter Starting date of your Course";
          flag = false;
    }
    else{
      document.getElementById(`${errorSpan}`).innerHTML =
          "";
          flag =true
    }
    return flag
   }



   function validateEndDate(inputconfirm, inputnameC, errorSpan){

    if(inputnameC && !inputconfirm) {

     document.getElementById(`${errorSpan}`).innerHTML =
         "* please Enter End date of your Course";
         flag = false;
   }
   else{

     document.getElementById(`${errorSpan}`).innerHTML =
         "";
         flag =true
   }
   return flag
  }




    function validatePhone(inputname, errorSpan, reg) {
      if (!inputname) {
        document.getElementById(`${errorSpan}`).innerHTML =
          "* please Enter Your Mobile Number";
        flag = false;
      } else if (!reg.test(inputname)) {
        document.getElementById(`${errorSpan}`).innerHTML =
          "* Mobile Number Only Contain Number";
        flag = false;
      } else if (inputname.length <= 9 ) {
        document.getElementById(`${errorSpan}`).innerHTML =
          "* Mobile Number Must Contain 10 digit ";
        flag = false;
      }
      
      else if (!getPhoneData()) {
        document.getElementById(`${errorSpan}`).innerHTML =
          "* Mobile Number is already registered ";
        flag = false;
      } 
      
      else {
        document.getElementById(`${errorSpan}`).innerHTML = "";
        flag =true
      }
      return flag
    }



    function validateDateofBrith(inputname, errorSpan) {
      if (!inputname) {
        document.getElementById(`${errorSpan}`).innerHTML =
          "* Please Enter your Date of Birth";
        flag = false;
      } else {
        document.getElementById(`${errorSpan}`).innerHTML = "";
        flag =true
      }
      return flag
    }



    function validationPassword(inputname, errorSpan, reg) {
      if (!inputname) {
        document.getElementById(`${errorSpan}`).innerHTML =
          "* Please Enter your Password";
        flag = false;
      } 
      else if (inputname.length < 9) {
        document.getElementById(`${errorSpan}`).innerHTML =
          "* Password Contain Minimum 8 character ";
        flag = false;
      }
      
      else if (!reg.test(inputname)) {
        document.getElementById(`${errorSpan}`).innerHTML =
          "* password contain at least one 'number','special character', 'uppercase character'.";
        flag = false;
      }
       else {
        document.getElementById(`${errorSpan}`).innerHTML = "";
        flag =true
      }
      return flag
    }



    function valildateConfirmPassword(inputconfirm, inputname, errorSpan, reg) {
      if(inputname){
      if (!inputconfirm) {
        document.getElementById(`${errorSpan}`).innerHTML =
          "* Please Re-enter your Password";
          document.getElementById("confirmPassword").className = ""
        flag = false;
      }
      else if (!reg.test(inputconfirm)) {
        document.getElementById(`${errorSpan}`).innerHTML =
          "* password contain at least one 'number','special character', 'uppercase character'.";
          document.getElementById("confirmPassword").className = ""
        flag = false;
      }
      
      else if (inputconfirm.length < 9) {
        document.getElementById(`${errorSpan}`).innerHTML =
          "* Confirm Password Contain Minimum 8 character ";
          document.getElementById("confirmPassword").className = ""
        flag = false;
      } else if (inputname != inputconfirm) {
        document.getElementById(`${errorSpan}`).innerHTML =
          "*Confirm Password should be as  Password";
          document.getElementById("confirmPassword").className = ""
        flag = false;
      }
     
      else {
        document.getElementById(`${errorSpan}`).innerHTML = "";
        document.getElementById("confirmPassword").className = "confirmPasswordClass";
        
        flag =true
      }
    } else{
      document.getElementById(`${errorSpan}`).innerHTML = "* Please Enter Password first"
      flag = false;
    }
      return flag
    
    
      
    }

  
//  on submit form event 
    mainForm.addEventListener("submit", (e) => {
      let unique = true;
      e.preventDefault();
      let form_val = new FormData(e.target);
       obj = Object.fromEntries(form_val);
      console.log(obj);
      deleteDataTable()
 
      aryObjValue.forEach((arrayel,index)=>{
        if(aryObjValue[index].userEmail == obj.userEmail.toString() && aryObjValue[index].phone == obj.phone.toString() && !editDataSpecificUser() && validateFrom()){
          console.log("hii",index);
         const update = aryObjValue[index]
         updateDataInary(update,obj);

         renderDataIntoTable(aryObjValue);
        makeDeleteAllVisible(aryObjValue,selectAll);
        makeDeleteAllVisible(aryObjValue,deleteSelectedUser);
        editDataSpecificUser();
        alert("Editing of user is Success")
      
        emptydata()
        document.getElementById("selectAll").style.setProperty("visibility","visible")
    document.getElementById("deleteSelectedUser").style.setProperty("visibility","visible")
    const enabled = document.getElementsByClassName("userDeleteButton");
    const aryInabledbtns =[...enabled]
    aryInabledbtns.forEach((el)=>{
       el.style.setProperty("visibility","visible");
     })
     
     document.getElementById("passwordContainer").style.display ="initial";
   
        unique = false;
        editMode =true;
        formModal.style.setProperty("display","none");
        
        }
       })
       

      
       
       
      
      if (validateFrom()) {
        
        if(unique){
        aryObjValue.push(obj);
        document.getElementById("emailErr").innerHTML =
        "";
        document.getElementById("phoneErr").innerHTML =
        "";
        editMode =true;
        alert("Registration of user is Success")
      }
        
        renderDataIntoTable(aryObjValue);
        makeDeleteAllVisible(aryObjValue,selectAll);
        makeDeleteAllVisible(aryObjValue,deleteSelectedUser);
        
        console.log(aryObjValue);
        
        mainForm.reset();
        document.getElementById("password").type="password";
        editDataSpecificUser();
      deleteDataTable();
      
      formModal.style.setProperty("display","none");
     
      } else {
        validateFrom();
      
      }
      document.getElementById("confirmPassword").className = ""
    });

 // find the age from  Date of Brith 
    function findAge(){
      const dateofBrith = document.getElementById("DateOfBrith").value; 
      
      if (!dateofBrith) {
        document.getElementById("Age").value = ""
      }else{
      
      const dateB = dateofBrith.split("-")
      const year= dateB[0];
      let month ;
      if(dateB[1] >0) {
       month = parseInt(dateB[1])-1;
        
      }
      else{
        month = dateB[1];
      }
      const day = dateB[2];
       
     
       const diff= Date.now().valueOf() - new Date(year,month,day).valueOf();
        const age = Math.floor(diff/(365*24*3600*1000));
        document.getElementById("Age").value = age
      }
    }

//updating the Mainarray after the edit Submit
   function updateDataInary(upadteObj,obj){
    upadteObj.firstname = `${obj.firstname}`
    upadteObj.lastname = `${obj.lastname}`
    upadteObj.gender = `${obj.gender}`
    // upadteObj.phone = `${obj.phone}`
    // upadteObj.userEmail = `${obj.userEmail}`
    upadteObj.address = `${obj.address}`
    upadteObj.DateOfBrith = `${obj.DateOfBrith}`
    upadteObj.qualification = `${obj.qualification}`
    upadteObj.course = `${obj.course}`
    upadteObj.startDate = `${obj.startDate}`
    upadteObj.endDate = `${obj.endDate}`
    upadteObj.password = `${obj.password}`
    upadteObj.confirmPassword = `${obj.confirmPassword}`



   }

// function for empty the inputfields
function emptydata(){
  document.forms["regform"]["firstname"].value =""
  document.forms["regform"]["lastname"].value =""
   document.forms["regform"]["userEmail"].value =""
  document.forms["regform"]["gender"].value = ""
  document.forms["regform"]["phone"].value =""
  document.forms["regform"]["address"].value =""
  document.forms["regform"]["DateOfBrith"].value ="" 
  document.forms["regform"]["qualification"].value =""
  document.forms["regform"]["course"].value =""
  document.forms["regform"]["startDate"].value ="" 
  document.forms["regform"]["endDate"].value =""
  document.forms["regform"]["password"].value =""
  document.forms["regform"]["confirmPassword"].value =""

  document.forms["regform"]["userEmail"].readOnly =false;
  document.forms["regform"]["phone"].readOnly =false;

}

// click event for Add New User 
document.getElementById("addUserForm").addEventListener("click",(e)=>{
  e.preventDefault();
  formModal.style.setProperty("display","");
})

//click for closing the modal instant

document.getElementById("closeTheModal").onclick =function(){
  if(confirm("Are You Sure You Want To Close")){
    formModal.style.setProperty("display","none");
    mainForm.reset();
    clearError();
    makeDeleteAllVisible(aryObjValue,selectAll);
    makeDeleteAllVisible(aryObjValue,deleteSelectedUser);
    const enabled = document.getElementsByClassName("userDeleteButton");
    const aryInabledbtns =[...enabled]
    aryInabledbtns.forEach((el)=>{
       el.style.setProperty("visibility","visible");
     })
     document.getElementById("passwordContainer").style.display ="initial";
  }
  document.forms["regform"]["userEmail"].readOnly =false;
  document.forms["regform"]["phone"].readOnly =false;

}

// function for clear all error 
function clearError(){
  document.getElementById("fnameEr").innerHTML = "";
  document.getElementById("lnameErr").innerHTML = "";
  document.getElementById("addressErr").innerHTML = "";
  document.getElementById("genderErr").innerHTML = "";
  document.getElementById("emailErr").innerHTML = "";
  document.getElementById("phoneErr").innerHTML = "";
  document.getElementById("DobErr").innerHTML = "";
  document.getElementById("QualificationErr").innerHTML = "";
  document.getElementById("cousreErr").innerHTML = "";
  document.getElementById("startDateErr").innerHTML = "";
  document.getElementById("endDateErr").innerHTML = "";
  document.getElementById("passwordErr").innerHTML = "";
  document.getElementById("confirmPasswordErr").innerHTML = "";
}

function filterInTable(){

let searchFirstName = document.getElementById("searchFirstName").value.toLowerCase();
let searchLastName = document.getElementById("searchLastName").value.toLowerCase();
let searchEmail = document.getElementById("searchEmail").value.toLowerCase();
let searchGender = document.getElementById("searchGender").value.toLowerCase();
let searchMobile = document.getElementById("searchMobile").value.toLowerCase();
let searchQualification = document.getElementById("searchQualification").value.toLowerCase();
let searchCourseName = document.getElementById("searchCourseName").value.toLowerCase();
let searchDateOfBrith = document.getElementById("searchDateOfBrith").value.toLowerCase();

let tr  = document.querySelectorAll(".dataRow");
 tr.forEach((row)=>{
  const FirstNameList = row.querySelector(".fnameData").innerText.toLowerCase();
  // console.log(FirstNameList);
  const LastNameList = row.querySelector(".lnameData").innerText.toLowerCase();
  const EmailList = row.querySelector(".emailData").innerText.toLowerCase();
  const GenderList = row.querySelector(".genderData").innerText.toLowerCase();
  const MobileList = row.querySelector(".phoneData").innerText.toLowerCase();
  const QualificationList = row.querySelector(".qualificationdata").innerText.toLowerCase();
  const CourseNameList = row.querySelector(".courseData").innerText.toLowerCase();
  const DateOfBrithList = row.querySelector(".DateOfBrithData").innerText.toLowerCase();
  if(FirstNameList.includes(searchFirstName) && LastNameList.includes(searchLastName) 
  && EmailList.includes(searchEmail) && (GenderList === searchGender || searchGender === "") && MobileList.includes(searchMobile) 
&& (QualificationList===searchQualification || searchQualification === "" ) && (CourseNameList===searchCourseName || searchCourseName === "" ) && DateOfBrithList.includes(searchDateOfBrith) ){
  // console.log(row);
    row.style.display ="";
    if(searchGender =="male"){

    }
  }
  else{
    row.style.display ="none"; 
  }

 })


}
