function createManager (obj) {
console.log("In create manager")
  let tempMan = `
        <div class="card">
        <h3>${obj.name}</h3>
        <ul class="cardInfo">
          <li class="">ID: ${obj.id}</li>
          <li class="">Office Number: ${obj.officeNum}</li>
          <li class="">Email: ${obj.email}</li>
        </ul>
      </div>`;

  //  let temp2 = String.rawtemp


  return tempMan
}

function createEngineer (obj) {
  let tempEng = `
  <div class="card">
  <h3>${obj.name}</h3>
  <ul class="cardInfo">
    <li class="">ID: ${obj.id}</li>
    <li class="">GitHub: ${obj.github}</li>
    <li class="">Email: ${obj.email}</li>
  </ul>
</div>`;

//  let temp2 = String.rawtemp
console.log("TempEng: "+ tempEng)

return tempEng

}

function createIntern (obj) {
  let tempInt = `
  <div class="card">
  <h3>${obj.name}</h3>
  <ul class="cardInfo">
    <li class="">ID: ${obj.id}</li>
    <li class="">School: ${obj.school}</li>
    <li class="">Email: ${obj.email}</li>
  </ul>
</div>`;

//  let temp2 = String.rawtemp
// console.log("TempEng: "+ tempEng)

return tempInt

}


module.exports = {
  createManager,
  createEngineer,
  createIntern
}
