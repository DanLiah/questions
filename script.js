let block = document.getElementById("block");
var xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://api.hebron-academy.com/itacademyhebron/api/academy/get_questions/", true);
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	let data = JSON.parse(this.responseText);
    	for (let i = 0; i < data.questions.length; i++) {
    		console.log(data.questions[i]);
    		let objectData = `
    			<div class="question">
    				<div class="hr"><hr></div>
    				<div class="text">
						<h1 class="qa">`+data.questions[i].question+`</h1>
						<div class="answer">`+data.questions[i].answer+`</div>
					</div>
				</div>
    		`;
    		block.innerHTML += objectData;
    	}
    }
};
xhttp.send();

