export default {
	Button3CopyonClick () {
		const user = tutorPass_.data[0];
		
		if(Email_login.text == "admin@0" && Pass_login.text == "888"){
			Error4.setVisibility(false)
			storeValue("loggedInUser", Email_inp.text);
			navigateTo("AdminPage") ;
		}else if (!user) {
			showAlert("Incorrect Email or Password!", "error");
			Error4.setVisibility(true) ;
		}else {
			Error4.setVisibility(false)
			storeValue("loggedInUser", user);
			navigateTo("TutorPage"); 
		}
	}
}