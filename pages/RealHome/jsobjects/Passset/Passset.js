export default {
	Set_onClick () {
		if(Pass1.text != Pass2.text){
			ErrorPass.setVisibility(true) ;
		}else{
			ErrorPass.setVisibility(false) ;
			PassSet.run() ;
			showAlert("Password set!" , "success") ;
			resetWidget("PasswordSet" , true) ;
			closeModal("PasswordSet") ;
			showModal("Login")
		}

	}
}