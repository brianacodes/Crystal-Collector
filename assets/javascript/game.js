
// End Game Function
function endGame() {
    alert("The game has ended");
  };
  
  
  $(document).ready(function () {
    $("#start").on("click", function() {
      $("#start").hide();
      
      $("#wrapper").append(`<h1>Number to Guess: <span id="num-to-guess"></span></h1>`);
      
      var targetNum = Math.floor(Math.random() * 120) + 19;
      
      $("#num-to-guess").text(targetNum);
      
      var counter = 0;

      var numberOptions = [10, 5, 3, 8];
    
      for (var i = 0; i < numberOptions.length; i++) {
      var imageCrystal = $("<img>");
      
      imageCrystal.addClass("crystal-image");

      imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
      
      imageCrystal.attr("data-crystalvalue", numberOptions[i]);

      $("#wrapper").append(imageCrystal);
    }
    
    $(".crystal-image").on("click", function() {
      
      var crystalValue = ($(this).attr("data-crystalvalue"));

      crystalValue = parseInt(crystalValue);

      counter += crystalValue;
      
      alert("New Score: " + counter);
      
      if (counter === targetNum) {
        endGame();
        alert("You win!");
      } else if (counter >= targetNum) {
        endGame();
        alert("You lose!");
      }
      
    });
    
  })
  
})