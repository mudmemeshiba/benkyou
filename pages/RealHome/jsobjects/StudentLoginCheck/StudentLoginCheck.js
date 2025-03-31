export default {
	Button3CopyonClick () {
		const user = Pass_.data[0];
		
		if(Email_login.text == "admin@0" && Pass_login.text == "888"){
			Error3.setVisibility(false)
			storeValue("loggedInUser", Email_inp.text);
			navigateTo("AdminPage") ;
		}else if (!user) {
			showAlert("Incorrect Email or Password! Please create a new account", "error");
			Error3.setVisibility(true) ;
		}else {
			Error3.setVisibility(false)
			storeValue("loggedInUser", user);
			navigateTo("Main"); 
		}
	}
}