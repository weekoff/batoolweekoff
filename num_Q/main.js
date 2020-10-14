//week1E2 Addition exercise

function reversesNumber(number){
   /* solution1*/

	// number=number+""
	// return parseInt(number.split("").reverse().join(''));

	 /* solution2*/
	var mod;
	var reversesNum=0;

	while(number>0)
	{
		mod=number%10;
		reversesNum=reversesNum*10+mod
		number=Math.floor(number/10);

	}
	return reversesNum;
}

function palindrome(string){

	var newString=string.split("").reverse().join('');

	if(newString===string){
		return "the string is palindrome "
	}

	return "the string isn't palindrome "
}

function firstChar(string){

	var newString=string.split(" ");

	for(var index = 0; index < newString.length; index++){


		newString[index]=newString[index].replace(newString[index].charAt(0),newString[index].charAt(0).toUpperCase());
		
	}

	return newString.join(' ');
}

function longestWord(string){
	var newString=string.split(" ");
	var max=newString[0];

	for(var index = 0; index < newString.length; index++){

		if(max.length<newString[index].length)
			max=newString[index];
	}

	return max;

}



function vowels(string){
	var count=0;
	var vowels="AaEeIiOoUu";
	for(var index = 0; index < string.length; index++){
		if(vowels.indexOf(string.charAt(index))!==-1)
			count++;
	}
	return count;

}




function multiplyBetween(num1,num2){
	var prpduct=1;
	for(var index=num1;index<num2;index++){
		prpduct=prpduct*index;

	}
	return prpduct;
}

function productFrom5toN(num){
	var n=5;

	if(num<5){
		var temp=n;
		n=num;
		num=temp;
	}

	var prpduct=1;
	for(var index=n;index<=num;index++){
		prpduct=prpduct*index;

	}
	return prpduct;
}




function allCharUnique(string){
	var newstring="";
	for(var index=0; index<string.length; index++){
		if(newstring.indexOf(string.charAt(index))===-1)
			newstring=newstring+string.charAt(index);
	}
	return newstring;
}


function getindexOf(char,string){

	
		 return string.indexOf(char);
			
}

function drawStar(n){
	
	var string=""
	for(var i=1;i<=n;i++){
		string=string+"*".repeat(i)+"\n";

	}
	return string;

	//or we can use neasted loop
}

function greatestCommonDivisor(num1,num2){
	while(num2)
	{
		var temp=num2;
		num2=num1%num2;
		num1=temp;
	}

	return num1;
}


function meetAndGreet(num){
	var string="";
	for(var i=1;i<=num;i++){
		if(i===1){
			string=string+"Welcome"+i+"\n";
		}
		else if(i===2){
			string=string+"Welcome"+i+",meet"+(i-1)+"\n";
		}

		else
		{
			string=string+"Welcome"+i+",meet";
			for(var j=1;j<i-1;j++){
				string=string+j+","
			}
			string=string+"and"+(i-1)+"\n";
		}

			
	}
	return string;

	}

function fencePostLoop(num){
	var string="";
	for(var i=1;i<num;i++){
		string=string+i+",";
	}
	return string+num;
}