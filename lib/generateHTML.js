
let begString =  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"> -->
  <link rel="stylesheet" href="./dist/style.css">
  <title>Document</title>
</head>
<body>
 <header>
     <div class="banner">
         <h1>Team Members</h1>
     </div>
 </header>


  <div class="cardHolder">`;

  let endString =`    </div>
  
  <script src="./src/script.js"></script>
</body>
</html>`;




// TODO: Create a function to generate markdown for README
function generateMarkdown(midString) {

    let temp = begString.concat(midString,endString);

    return temp;

}

module.exports = {
  generateMarkdown,

}
