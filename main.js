document.addEventListener("DOMContentLoaded", init)
  function init() {
      var answer;
    document.getElementById('butts').addEventListener('click', start())
    function start(){
    var num1 = Math.floor(Math.random() * 10) + 1
    var num2 = Math.floor(Math.random() * 10) + 1
    var eq = Math.floor(Math.random() * 4) + 1
    document.getElementById("first").textContent = num1
    document.getElementById("third").textContent = num2
    switch (eq) {
    case 1:
    document.getElementById("second").textContent = "/"
    answer = num1 / num2
    break;
    case 2:
    document.getElementById("second").textContent = "+"
    answer = num1 + num2
    break;
    case 3:
    document.getElementById("second").textContent = "-"
    answer = num1 - num2
    break;
    case 4:
    document.getElementById("second").textContent = "x"
    answer = num1 * num2
    break;
  }
  document.getElementById("title").textContent = "SOLVEIT!"
  document.getElementById("number").textContent = ""

}
    document.getElementById("butts").addEventListener('click', function(event){
        if (event.target.matches('button')) {
          document.getElementById("number").textContent += event.target.textContent
          console.log("answer  "+ answer)
        }
      })
      document.getElementById("clear").addEventListener('click', function(event){
          if (event.target.matches('button')) {
            document.getElementById("number").textContent = ""
          }
  })
  document.getElementById("submit").addEventListener('click', function(event){
      if (event.target.matches('button')) {
        var solve = parseInt(document.getElementById("number").textContent)
        if (solve == answer) {
          document.getElementById("title").textContent = "WINNER!"
          document.getElementById("score").textContent += 1

          setTimeout(start, 3000)
        } else {
          document.getElementById("title").textContent = "NONO! The answer is " + answer
          document.getElementById("score").textContent += 1
          setTimeout(start, 3000)
        }
      }
})
document.getElementById("skip").addEventListener('click', function(event){
    if (event.target.matches('button')) {
      start();
    }
})
}