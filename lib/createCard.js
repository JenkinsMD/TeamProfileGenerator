function createManager (obj) {

  let tempMan = `
        <div class="card">
        <h3>Manager</h3>
        <ul class="cardInfo">
          <li class="">Name: ${obj.name}</li>
          <li class="">ID: ${obj.id}</li>
          <li class="">Office Number: ${obj.officeNum}</li>
          <li class="">Email: ${obj.email}</li>
        </ul>
      </div>`;

  return tempMan
}

function createEngineer (obj) {
  let tempEng = `
  <div class="card">
  <h3>Engineer</h3>
  <ul class="cardInfo">
     <li class="">Name: ${obj.name}</li>
    <li class="">ID: ${obj.id}</li>
    <li class="">GitHub: ${obj.github}</li>
    <li class="">Email: ${obj.email}</li>
  </ul>
</div>`;


return tempEng

}

function createIntern (obj) {
  let tempInt = `
  <div class="card">
  <h3>Intern</h3>
  <ul class="cardInfo">
     <li class="">Name: ${obj.name}</li>
    <li class="">ID: ${obj.id}</li>
    <li class="">School: ${obj.school}</li>
    <li class="">Email: ${obj.email}</li>
  </ul>
</div>`;


return tempInt

}


module.exports = {
  createManager,
  createEngineer,
  createIntern
}
