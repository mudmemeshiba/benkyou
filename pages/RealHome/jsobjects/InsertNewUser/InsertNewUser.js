export default {
	Button3onClick () {
		if(Email_inp.text == ""||Nat_ID.text == ""){
			showAlert("You need atleast Email and National ID" , "error");
			Error2.setVisibility(true) ;
			Text3.setVisibility(false) ;
		}else if (CheckEmail.data[0] != null){
			showAlert("Email already registered!" , "error");
			Error2.setVisibility(false) ;
			Text3.setVisibility(true) ;
		}else if (CheckID.data[0] != null){
			showAlert("National ID already registered!" , "error");
			ErrorID.setVisibility(true) ;
			Text3.setVisibility(false) ;
		}else {
			Error2.setVisibility(false) ;
			Text3.setVisibility(false);
			ErrorID.setVisibility(false) ;
			Register_.run() ;
			UpdateID.run()
			storeValue("CurrentNat" , Nat_ID.text)
			resetWidget("Register" , true) ;
			showModal("PasswordSet") ;
		}
	}
}