// make the <header> stretch across the entire screen
$(document).ready(function(){
  $('.header').height($(window).height());
})

// create Array of object to save the common Symptoms of Covid-19
var commonSymptoms=[{symptom:"Q1: Is your body temperature greater than 37.8?",
                     choices:["Yes","No"]},
                     {symptom:"Q2: Have a dry cough?",
                     choices:["Yes","No"]},
                     {symptom:"Q3: Do you feel tiredness?",
                     choices:["Yes","No"]}];

// create Array of object to save the other Symptoms of Covid-19
var otherSymptoms= [{symptom:"Q1: Do you have a chills",
                    choices:["Yes","No"]},
                    {symptom:"Q2: Do you have muscle or body pain?",
                    choices:["Yes","No"]},
                    {symptom:"Q3: Do you have a sore throat?",
                    choices:["Yes","No"]},
                    {symptom:"Q4: do you have a runny nose?",
                    choices:["Yes","No"]},
                    {symptom:"Q5: do you have a headache?",
                    choices:["Yes","No"]},
                    {symptom:"Q6: do you have a chest pain?",
                    choices:["Yes","No"]},
                    {symptom:"Q7: do you have a Pink eye (conjunctivitis)?",
                    choices:["Yes","No"]},];

// create Array  to save the dangerous Symptoms of Covid-19
var dangerousSymptoms=["Trouble breathing","Persistent chest pain or pressure","Inability to stay awake","New confusion","Blue lips or face"];

//create afunction to display a Common Symptoms of covid-19
function displayCommonSymptoms(){

	var pids=["#QC1","#QC2","#QC3"]
	for(var index = 0; index < commonSymptoms.length; index++)
	{
		$(pids[index]).text(commonSymptoms[index].symptom)
		$(".Qcommon1").text(commonSymptoms[index].choices[0])
		$(".Qcommon2").text(commonSymptoms[index].choices[1])
		    
	}
}

//create afunction to display a other Symptoms of covid-19

	function displayOtherSymptoms(){

		var pids=["#AC1","#AC2","#AC3","#AC4","#AC5","#AC6","#AC7"];

		for(var index = 0; index < otherSymptoms.length; index++){
			 $(pids[index]).text(otherSymptoms[index].symptom)
			 $(".Qcommonc1").text(otherSymptoms[0].choices[0])
			 $(".Qcommonc2").text(otherSymptoms[0].choices[1])
		    
		}

}

//create afunction to display a dangerous Symptoms of covid-19

function dangerousOtherSymptoms()
{
	var pids=["#DS1","#DS2","#DS3","#DS4","#DS5"];

	for(var index=0;index<dangerousSymptoms.length;index++){
		 $(pids[index]).text(dangerousSymptoms[index])    
	}

}

$(".btn1").on("click",function(){
		$("#secondDiv").css("display","block");
		$(".btn2").css("display","block");
		$(".description").css("display","none");
		$(".header").css("display","none");
		$(".overlay").css("display","none");

	     displayCommonSymptoms();
		 displayOtherSymptoms()
		 dangerousOtherSymptoms();
		 
});


function ckeckresult(){

	var firstcheck=0;
	var secondcheck=0;
	var thirdcheck=0;
	var check1=true;
	var check2=true;
	var result="";
	var valueCommonSymptoms=["#formQC1","#formQC2","#formQC3"];
	var valueOtherSymptoms=["#formAQ1","#formAQ2","#formAQ3","#formAQ4","#formAQ5","#formAQ6","#formAQ7"];
	
	//to get avalue from raido input
	for(var index = 0; index < commonSymptoms.length; index++){
	
		var choice=$(" :checked",valueCommonSymptoms[index]).val();

		if(choice===undefined){

			alert("You didn't answer all question");
			check1=false;
			break;

		}else{
		
			if(choice==="Yes"){
			  firstcheck++;
			}
		}
    }

    //to get avalue from raido input
	for(var index = 0; index < otherSymptoms.length; index++){

		var choice=$(" :checked",valueOtherSymptoms[index]).val();

		if(choice===undefined){
		
			alert("You didn't answer all question");
			check2=false;
			break;

		}else{
			if(choice==="Yes"){	
			  secondcheck++;
		    }
	    }
	    
	}

	//to get avalue from checkbox input
	var array = []
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

   for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value)
   }

  thirdcheck=array.length;
 
   if(thirdcheck>0){
  
	  	result="You are infected with Covid-19 virus\nFollow these instructions:\n"+	  	
	  	       "Call your health care provider in advance, so he/she can direct you to\n the right health facility."
  }

  else if(firstcheck === 3 && secondcheck >= 1 && check1 && check2){
  
  	 result="You are infected with Covid-19 virus\nFollow these instructions:\n"+
  	"1-Stay at home.\n2-Self-isolate and monitor your symptoms.\n3-Follow national guidance on self-isolation."
  }

  else if(check1&&check2){
  	result="You are not infected with the Covid-19 virus, but take care to protect \nyourself and your family"
  }

  return result;

}



//Result Button
$(".btn2").click(function(){
		$("#p2").text(ckeckresult());
		$("#p2").css("display","block");
		$("#secondDiv").css("display","none");
		$(".btn2").css("display","none");
		$(".btn1").css("display","none");
		$(".form-group").css("display","none");
		$(".btn").css("display","none");


	     
});


//Home in nav-bar
$(".nav1").click(function(){
	//clear radio box
	$('input[name=CS]').prop('checked', false);
	$('input[name=AS]').prop('checked', false);

	//clear checkbox
	$('input[type=checkbox]').each(function(){ 
        this.checked = false; 
    });

    $(".navbar").css("display","block");
	$(".description").css("display","block")
	$(".btn1").css("display","block")
	$(".header").css("display","block")
	$(".overlay").css("display","block")
	$(".btn1").css("margin","auto");
	$("#p2").css("display","none");
	$(".form-group").css("display","block");
	$(".btn").css("display","block");


	
});


// this function about.html file

$(document).ready(function(){
  $(".div1").click(function(){
    $(".p1").slideToggle("slow");
  })
});

$(document).ready(function(){
  $(".div2").click(function(){
    $(".p2").slideToggle("slow");
  })
});


$(document).ready(function(){
  $(".div3").click(function(){
    $(".p3").slideToggle("slow");
  })
});


$(document).ready(function(){
  $(".div4").click(function(){
    $(".p4").slideToggle("slow");
  })
});
$(document).ready(function(){
  $(".div5").click(function(){
    $(".p5").slideToggle("slow");
 })
});

//whe I click on About in navbar
  $(".nav2").click(function(){
    	window.open("about.html");
    })