
function phoneNum(){
	this.phoneInput=[];
}

// part one
phoneNum.prototype={

	checkphone: function(input){

		var val = input.value.replace(/\D/g,'');
		var lastval = '';

		lastval = val;

		if(val.length >2 && val.length <6 )
		{
			lastval = val.substring(0,3)+'-';
			lastval += val.substring(3);
		}

		if( val.length > 5 && val.length < 11)
		{
			lastval = val.substring(0,3) + '-';
			lastval += val.substring(3,6) + '-';
			lastval += val.substring(6);
			
		}
		
		input.value = lastval;

	}

};

var phoneInput =document.getElementById('phone');
phoneInput.phoneNum = new phoneNum();


phoneInput.addEventListener('keyup', function(){

	phoneInput.phoneNum.checkphone(this);
})



////// part two
function phoneNum2(){
	this.phoneInput2=[];
}


phoneNum2.prototype={

	checkphone2: function(input){

		var val = input.value.replace(/\D/g,'');
		var lastval = '';

		lastval = val;

		if(val.length > 0 && val.length < 4)
		{
			lastval= '(' + val;
		}

		if(val.length >3 && val.length <7 )
		{
			lastval = '('+val.substring(0,3)+')';
			lastval += val.substring(3);
		}

		if( val.length > 6 && val.length < 11)
		{
			lastval = '('+ val.substring(0,3) + ')';
			lastval += val.substring(3,6) +'-';
			lastval += val.substring(6);
			
		}

		input.value = lastval;

	}

};

var phoneInput2 =document.getElementById('phone2');
phoneInput2.phoneNum2 = new phoneNum2();


phoneInput2.addEventListener('keyup', function(){

	phoneInput2.phoneNum2.checkphone2(this);
})



//part three
function myKeyPress(f){

  		var val = f.value.replace(/\D/g,'');
		var lastval = '';

		lastval = val;

		if(val.length >2 && val.length <6 )
		{
			lastval = val.substring(0,3)+'-';
			lastval += val.substring(3);
		}

		if( val.length > 5 && val.length < 11)
		{
			lastval = val.substring(0,3) + '-';
			lastval += val.substring(3,6) + '-';
			lastval += val.substring(6);
		}

		if(val.length > 10)
		{
			lastval = val.substring(0,3) + '-';
			lastval += val.substring(3,6) + '-';
     		lastval += val.slice(6,10);
    	}

		f.value = lastval;
}









