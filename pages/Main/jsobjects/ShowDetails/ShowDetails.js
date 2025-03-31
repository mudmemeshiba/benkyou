export default {
	DetailsClick () {
		let current = Table2.triggeredRow
		storeValue("X" , current)
		Find_Tutor_info.run()
		Find_Sub_info.run()
		if(current.mode == "ONLINE"){
			showModal("OnlineDetails")
		}else {
			showModal("OnsiteDetails")
		}
	}
}