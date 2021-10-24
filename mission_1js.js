

function display(formulaire)
{
	if (formulaire.username.value=="Admin_GSB")
	{ 
		if (formulaire.password.value=="admin") 
		{              
			let a = document.createElement('a')
			a.href = "index.pdf"
			a.download = "index.pdf"
			document.body.appendChild(a)
			a.click()
			document.body.removeChild(a)

			a.href = "style.pdf"
			a.download = "style.pdf"
			document.body.appendChild(a)
			a.click();
			document.body.removeChild(a)

			a.href = "js.pdf"
			a.download = "js.pdf"
			document.body.appendChild(a)
			a.click()
			document.body.removeChild(a)

		  return true; 
		} 
		else
		{
		 alert("Invalid Password");
		 return false;
		}
	} 
	else 
		{  
			alert("Invalid Username");
			return false;
		}
}