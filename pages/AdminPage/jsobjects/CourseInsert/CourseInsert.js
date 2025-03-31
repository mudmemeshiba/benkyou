export default {
	Submiton(){
		if(course_name.text == "" || Select2.selectedOptionLabel == "" || tutor.text == "" || price.text == "" || mode.selectedOptionValue == "" || Description.text == "" ){
			Error_.setVisibility(true)
		}else{
			if(mode.selectedOptionValue == "ONLINE"){
				insertCourseOnline.run() ;
			}else{
				if(Time.text == "" ){
					Error_.setVisibility(true)
				}else {
					insertCourseOnsite.run() ;					
				}

			}
			Error_.setVisibility(false) ;
			Day.setVisibility(false) ;
			Time.setVisibility(false) ;
			resetWidget("AddCourse" , true) ;
			closeModal(AddCourse.name) ;

		}

	}
}