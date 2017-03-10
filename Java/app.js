var solution = Math.floor(Math.random() * 4);
console.log(solution);

for (var i = 0; i < 3 ; i++) {
	var response = prompt("Veuiller entrer un nombre entre 0 et 3!");
	console.log(response);

	if (response==solution) {
		console.log("Félicitation tu as gagné bravo!");
		break;
	}

	else if (response < solution){
	console.log("C'est trop petit");
    
    }

	else {
	console.log("C'est trop grand");

	}

	if (i == 2){;
	console.log("C'est perdu")

	}

    }








		