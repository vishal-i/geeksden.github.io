console.log("ll");





function ValidateEmail(inputText)
{
	var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if(inputText.value.match(mailformat))
	{
		return true;
	}
	else
	{
		return false;
	}
}



function ValidateName(inputText)
{

	var mailformat = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
	if(inputText.value.match(mailformat))
	{
		return true;
	}
	else
	{
		return false;
	}
}

function ValidateMob(inputText)
{
var mailformat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	if(inputText.value.match(mailformat))
	{
	return true;
	}
	else
	{
	return false;
	}
}
function doFooterValidation()
{
	var inputText=document.getElementById("semail");
	var inputMob=document.getElementById("smob");
	var check=ValidateEmail(inputText);
	var checksmob=ValidateMob(inputMob);
	if(check && checksmob)
	{
		var playersRef = firebase.database().ref("B");
		playersRef.once('value', function(snapshot) {
    				playersRef.child(document.getElementById("smob").value).set({
     				 
    				  email:document.getElementById("semail").value,
     				 mob:document.getElementById("smob").value
     				 
  				 }).then(function() {
    					console.log("We will reach you soon!");
					   // alert("We will reach you soon!");
					   document.getElementById("semail").value=null;
					   document.getElementById("smob").value=null;
					   document.getElementById("falert").innerHTML="Sent! We will reach you soon! "
 				 })
 				 .catch(function(error) {
    					console.error("Error writing document: ", error);
  				});;
  
  				
		});

		
	}
	else
	{
		if(!check)
		{
		document.getElementById("semail").value="";
		document.getElementById("semail").placeholder="Invalid ! Enter again";
		}
		if(!checksmob)
		{
			document.getElementById("smob").value="";
			document.getElementById("smob").placeholder="Invalid ! Enter again";
		}

	}

}

function doValidation()
{	var inputMob=document.getElementById("mob");
	var inputEmail=document.getElementById("mail");
	var inputName=document.getElementById("nam");
	var checkMob=ValidateMob(inputMob);
	var checkMail=ValidateEmail(inputEmail);
	var checkName=ValidateName(inputName);
	if(checkMob && checkMail && checkName)
	{
		 var playersRef = firebase.database().ref("A");
 		 var mob=document.getElementById("mob").value;
		 var milisec=Date.now();
		 var newkey=mob+"-"+milisec;
  		 playersRef.once('value', function(snapshot) {
    				playersRef.child(newkey).set({
     				 name: document.getElementById("nam").value,
    				  email:document.getElementById("mail").value,
     				 mob:document.getElementById("mob").value,
      				sub:document.getElementById("sub").value,
      				msg:document.getElementById("msg").value
     				 
  				 }).then(function() {
    					console.log("We will reach you soon!");
					//	alert("We will reach you soon!");
						document.getElementById("nam").value=null;
						document.getElementById("mail").value=null;
						document.getElementById("mob").value=null;
						document.getElementById("sub").value=null;
						document.getElementById("msg").value=null;
						document.getElementById("formalert").innerHTML="Thank You for contacting us! We'll be in touch soon.";
 				 })
 				 .catch(function(error) {
    					console.error("Error writing document: ", error);
  				});;
  
  				
		});
	}
	else
	{
		if(!checkMob)
		{
			document.getElementById("mob").value="";
			document.getElementById("mob").placeholder="Invalid ! Enter again";
		}
		if(!checkMail)
		{
			document.getElementById("mail").value="";
			document.getElementById("mail").placeholder="Invalid ! Enter again";
		}
		if(!checkName)
		{
			document.getElementById("nam").value="";
			document.getElementById("nam").placeholder="Invalid ! Enter again";
		}

	}
 

}

