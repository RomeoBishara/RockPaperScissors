            var playerScore = 0;
			var computerScore = 0;

			function play(num) {	
			
			var player;
			
				document.getElementsByClassName("imgAfter")[0].className = "img";
				 
				 document.getElementsByClassName("imgAfter")[0].className = "img";
				
				 if (num == 1) {
					player = "rock";
					// change the image to much the input
					document.getElementsByTagName("img")[0].src = "_img/rock.png";
				}
				else if (num == 2) {
					player = "paper";
					document.getElementsByTagName("img")[0].src = "_img/paper.png";
				}
				else if (num == 3) {
					player = "scissors";
					document.getElementsByTagName("img")[0].src = "_img/scissors.png";
					
				} 


				var random = Math.random(); // create random number 0-1
				var computer;
				// assign rock paper scissors to computer randomly
				if (random <= 0.33) { 
					computer = "rock";
					// change the image to much the case
					 document.getElementsByTagName("img")[1].src = "_img/rock.png";
				}
				else if (random > 0.66) {
					computer = "paper";
					document.getElementsByTagName("img")[1].src = "_img/paper.png";
				}
				else  {
					computer = "scissors";
					document.getElementsByTagName("img")[1].src = "_img/scissors.png";
				}
				// locate the results by the class and change the value accordingly
				var e = document.getElementsByClassName("winner")[0];
				// Draw case
				if (player === computer) {
					e.style.color = "orange";
					e.innerHTML = "DRAW!";

				// User win
				} else if (player === "rock" && computer === "scissors" 
						|| player === "paper" && computer === "rock" 
						|| player === "scissors" && computer === "paper"  ) {
					e.style.color = "GREEN";
					e.innerHTML = "WINNER!";
					playerScore++;
				

				// Computer win
				} else {
					e.style.color = "red";
					e.innerHTML = "HARD LUCK!";
					computerScore++;
					
				}
				var x = document.getElementsByClassName("results")[0];
                 x.innerHTML = playerScore  + " : " + computerScore;

			};

			function hand(run) {

				 document.getElementsByTagName("img")[0].src = "_img/rock.png";
				 document.getElementsByTagName("img")[1].src = "_img/rock.png";
				 document.getElementsByClassName("winner")[0].innerHTML = "";
			document.getElementsByClassName("img")[0].className = "imgAfter";
				 
				 document.getElementsByClassName("img")[0].className = "imgAfter";

				 setTimeout(function(){
				 	play(run)
				 }, 2110);
				 


				};
			function reset() {
				playerScore = 0;
				computerScore = 0;
				
				 var x = document.getElementsByTagName("img");
				 x[0].src = "_img/rock.png";
				 x[1].src = "_img/rock.png";
				 var y = document.getElementsByClassName("results")[0];
                 y.innerHTML = playerScore  + " : " + computerScore;
                 document.getElementsByClassName("winner")[0].innerHTML = "";
			};
			