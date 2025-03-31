export default {
	Select1onOptionChange () {
		if(Select1.selectedOptionValue == "OnlineModal"){
			FindOnline.run() ;
		}else if(Select1.selectedOptionValue == "OnsiteModal"){
			FindOnsite.run() ;
		}
		showModal(Select1.selectedOptionValue)
	}
}