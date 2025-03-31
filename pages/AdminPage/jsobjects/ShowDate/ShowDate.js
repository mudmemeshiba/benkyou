export default {
	ModeClick(){
		if(mode.selectedOptionValue == "ONSITE"){
			Day.setVisibility(true) ;
			Time.setVisibility(true) ;
		}else{
			Day.setVisibility(false) ;
			Time.setVisibility(false) ;
		}
		
	}

}