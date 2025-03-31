export default {
	Button3onClick () {
		removeValue("Sums")
		let Sums = appsmith.store.X.price
		if(!CheckCode.data[0]){
			Error1.setVisibility(true)
			Error2.setVisibility(false)
			storeValue("Sums" , Sums)
			return ;
		}
		const CodeInfo = CheckCode.data[0]
		const Today = new Date()
		const CheckDay = new Date(CodeInfo.ExpireDate)

		if(Today > CheckDay){
			Error1.setVisibility(false)
			Error2.setVisibility(true)
		}else if(CodeInfo.Type == "PERCENT"){
			Error2.setVisibility(false)
			Error1.setVisibility(false)
			Sums = Sums*((100-CodeInfo.Discount)/100)
		}else{
			Error2.setVisibility(false)
			Error1.setVisibility(false)
			Sums = Sums - CodeInfo.Discount
		}
		storeValue("Sums" , Sums)
		
	}
}