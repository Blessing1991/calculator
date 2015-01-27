
			$(document).ready(function(){
				 var num1;
				 var num2;
				 var operator;
				 var $result = $("#display");

				 function reset(){
				 	num1 = null;
				 	num2 = null;
				 	operator = null;
				 	$result.val("0");
				 }

				 reset();
				 	
				 $(".value").click(function(){
				 	var clickedVal = $(this).text();
				 	var currentVal = $result.val();
				 	var newVal;

				 	if (currentVal === "0"){
				 		newVal = clickedVal;
				 	}
				 	else {
				 		newVal = currentVal + clickedVal;
				 	}

				 	$result.val(newVal);
				 });

				$(".operator").click(function(){
					operator = $(this).text();
					num1 = parseFloat($result.val());
					$result.val("0");
				});

				$("#equals").click(function(){
					var calc;
					num2 = parseFloat($result.val());

					if (operator === "+"){
						calc = num1 + num2;
					}

					else if (operator === "-"){
						calc = num1 - num2;
					}

					else if (operator === "*"){
						calc = num1 * num2;
					}

					else if (operator === "/"){
						calc = num1 / num2;
					}

					else if (operator ==="%"){
						calc = num1 % num2;
					}

					$result.val(calc);
				});

				$("#clear").click(function(){
					reset();
				});
				
			});

			
