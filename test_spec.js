var XLSX  =  require('xlsx');


    describe('Read XL Data', function(){
	
	it('TC1', function() {
	  
		var workbook = XLSX.readFile('./testData.xlsx');
		
		var workSheet = workbook.Sheets['Sheet1'];
		
		var a = XLSX.utils.sheet_to_json(worksheet);
		
		a.forEach(function(data){
			console.log("THE USER NAMES ARE: " + data.username);
		}
				
		
		
		)
		
		
		
	}
			
	
	
	)
	
}
		

)





































