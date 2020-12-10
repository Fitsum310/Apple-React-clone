/* Form checker on submit */
var el = document.getElementById('registration-form');
el.onsubmit = formSubmitChecker; 

/* Form checker first name on blur */
var blalababababn = document.getElementsByName('ertstert');
var elFirstNameElement = blalababababn[0];
elFirstNameElement.onblur = checkIfNameIsEmpty; 

/* Form checker password on blur */
var elPassword = document.getElementsByName('password');
var elPasswordElement = elPassword[0];
elPasswordElement.onblur = checkIfPasswordQualifies; 



function changeBackground() {
  document.body.style.backgroundColor = "red";
}


function removeBackground() {
  document.body.style.backgroundColor = "";
}

function formSubmitChecker(e) {
	// Put elements in variable 
	
	var errors = []; 
	var elErrorsDisplay = document.getElementById('errorsDisplay');
	elErrorsDisplay.innerHTML = "";

	var elFirstName = document.getElementsByName('first-name');
	var elPassword = document.getElementsByName('password');
	// Get their values 
	var elFirstNameValue = elFirstName[0].value; 
	var elPasswordValue = elPassword[0].value; 

	
	if (!elFirstNameValue) {
		errors.push("First name field is required"); 
	}
	
	if (elPasswordValue.length < 5) {
		errors.push("Password not strong enough"); 
	}

	// console.log(errors);
	if(errors.length > 0) {
		e.preventDefault();
		elErrorsDisplay.style.display = "block";
		for (var i = 0; i < errors.length; i++) {
			elErrorsDisplay.innerHTML += errors[i] + "<br>";
		}
		
	}
}

function checkIfNameIsEmpty() {
	var elErrorsDisplay = document.getElementById('errorsDisplay');
  var elFirstName = document.getElementsByName('first-name');
  var elFirstNameElement = elFirstName[0];
  var elFirstNameElementValue = checkIfNameIsEmpty.value;
  if(!elFirstNameElementValue){
  	elErrorsDisplay.style.display = "block";
  	elErrorsDisplay.innerHTML += "First name field is required <br>";
  	elFirstNameElement.style.border = "1px solid pink";
  }
}

function checkIfPasswordQualifies() {
	var elErrorsDisplay = document.getElementById('errorsDisplay');
  var elPassword = document.getElementsByName('password');
  console.log(elPassword);

  var elPasswordElement = elPassword[0]; 
	var elPasswordValue = elPassword[0].value; 
  if(elPasswordValue.length < 5){
  	elErrorsDisplay.style.display = "block";
  	elErrorsDisplay.innerHTML += "Password not strong enough <br>";
  	elPasswordElement.style.border = "1px solid pink";
  }
}

  
  /* 
  	Traditional DOM Event handlers
  	Syntax: 
  	element.onevent = functionName ;

  	TODO: 
	 	First, select the element you want to bind an event with 
	  Then bind an event with it
	  Finally attach a function on the event 
	  Notice that the event name is precedeed by "on"
	*/


	  // var el = document.getElementById('change-bg1');
	  // el.onclick = changeBackground; 

	  // var el = document.getElementById('removeBgh3');
	  // el.onmouseover = removeBackground; 



	  /* 
	  	How about if we want to use the class name for selection? What would be different? 	
	  */
	  var el = document.getElementsByClassName('dom-change-bg');
	  console.log(el);

	  var firstElemnet = el[0];
	  firstElemnet.onmouseover = changeBackground; 
	  firstElemnet.onmouseout = removeBackground; 


	  /* 
	  	Form controller 
	  	Requirments: 
	  		- Check if the first name and Password fields are left empty when submit button is clicked 
	  		- If left empty, display a warning at the top saying 
	  			- First name field is required 
	  			- Password field is required 
	  			- Prevent default 
	  		- If not empty, but password provided is less than 5 characters, display a message saying "Your password should not be less than 5 characters" 
	  		- Just to be more interactive, provide feedback if user focuses on the first name and password fields and leave with out completing the requirments 
	  		- Also, change the borders of the fields with errors with to red 
	  */ 

	  /* Form checker on submit */
	  var el = document.getElementById('registration-form');
	  el.onsubmit = formSubmitChecker; 

	  /* Form checker first name on blur */
	  var elFirstName = document.getElementsByName('first-name');
	  var elFirstNameElement = elFirstName[0];
	  elFirstNameElement.onblur = checkIfNameIsEmpty; 

	  /* Form checker password on blur */
	  var elPassword = document.getElementsByName('password');
	  var elPasswordElement = elPassword[0];
	  elPasswordElement.onblur = checkIfPasswordQualifies; 


  /* 
  	Event listeners 
  	Syntax: 
  	element.addEventlistener('event', functionName [, Boolean]);

  	TODO: 
	 	First, select the element you want to bind an event with 
	  Then bind an event with it
	  Finally attach a function on the event 
	  Notice that the event name is precedeed by "on"
	*/  
	  /* Form checker on submit */


	  // document.getElementById("submitButton").addEventListener("click", formSubmitChecker);
