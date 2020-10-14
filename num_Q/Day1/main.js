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