function checkGuess() {
    var guess = document.getElementById('guessInput').value;
    var result = document.getElementById('result');
  
    // Génère un nombre aléatoire entre 1 et 100
    var randomNumber = Math.floor(Math.random() * 100) + 1;
  // while (checkGuess()===) {}
      if (guess === randomNumber) {
        result.innerHTML = 'Bravo ! Tu as deviné le bon nombre.';
    } else if (guess < randomNumber) {
        result.innerHTML = 'Le nombre est plus grand. Essaie encore !';
    } else if (guess > randomNumber) {
        result.innerHTML = 'Le nombre est plus petit. Essaie encore !';
    } else{
        result.innerHTML='il faut saisir un nombre entre 1 et 100 !';
    }
  
    
}