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
	var inputMob=document.getElementById("sphone");
	var check=ValidateEmail(inputText);
	var checksmob=ValidateMob(inputMob);
	if(check && checksmob)
	{
           
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
			document.getElementById("sphone").value="";
			document.getElementById("sphone").placeholder="Invalid ! Enter again";
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

