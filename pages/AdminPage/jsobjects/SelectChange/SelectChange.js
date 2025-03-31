export default {
	Select1onOptionChange () {
		if(Select1.selectedOptionValue == "OnlineModal"){
			FindOnline.run() ;
		}else if(Select1.selectedOptionValue == "OnsiteModal"){
			FindOnsite.run() ;
		}else if(Select1.selectedOptionValue == "StudentsModal"){
			FindStudent.run() ;
		}else if(Select1.selectedOptionValue == "TutorsModal"){
			FindTutor.run() ;
		}else if(Select1.selectedOptionValue == "CouponsModal"){
			FindCoupon.run() ;
		}else if(Select1.selectedOptionValue == "PendingModal"){
			FindPending.run() ;
		}else{
			FindSubjects.run()
		}
		showModal(Select1.selectedOptionValue)
	}
}