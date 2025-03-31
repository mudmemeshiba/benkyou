export default {
	Button3onClick () {
		if(firstname.text == "" || lastname.text=="" || email.text == "" || PhoneInput1.text == "" || education.text =="" || MultiSelect1.selectedOptionLabels == [] || Password_set.text == ""){
			ErrorTutor.setVisibility(true)
			ErrorEmail.setVisibility(false)
		}else if(TutorEmailCheck.data[0] != null){
			ErrorEmail.setVisibility(true)
			ErrorTutor.setVisibility(false)
		}else{
			InsertTutor_.run()
			UpdateID.run()
			showAlert("Add Tutor success" , "success")
			ErrorEmail.setVisibility(false)
			ErrorTutor.setVisibility(false)
			resetWidget("AddTutor" , true)
			closeModal("AddTutor")
		}
		
	}
}