const generateManager = dataArray => {
    let managers = dataArray.filter(data => data.constructor.name === "Manager")
    let templateData = ""
    managers.forEach(manager => {
        templateData += `
        <div class="card">
        <div class="card-header">
        ${manager.name} 
        <br>
        Manager 
        </div>
        <div 
        <div class="card-body">
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${manager.position}</li>
        <li class="list-group-item">${manager.id}</li>
        <li class="list-group-item">${manager.officeNumber}</li>
        </ul>
        </div>  
        </div>
        `
    })
        
    // });
    return templateData;
    // return `
   
    // `
}

const generateEngineer = dataArray => {
    let engineers = dataArray.filter(data => data.constructor.name === "Engineer")
    let templateData = ""
    engineers.forEach(engineer => {
        templateData +=
         `
        <div class="card">
        <div class="card-header">
        ${engineer.name} 
        <br> 
        ${engineer.position}
        </div>
        <div class="card-body">
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${engineer.id}</li>
        <li class="list-group-item">${engineer.title}</li>
        <li class= "list-group-item">${engineer.github}</li>
        </ul>
        </div>  
        </div>
        `
    
    })
    return templateData;
}


const generateIntern = dataArray => {
    let interns = dataArray.filter(data => data.constructor.name === "Intern")
    let templateData = ""
    interns.forEach(interns => {
        templateData +=
    `
    <div class="card">
    <div class="card-header">${interns.name} 
    <br> 
    ${interns.position}
    </div>
    <div class="card-body">
    <ul class="list-group list-group-flush">
    <li class="list-group-item">id: ${interns.id}</li>
    <li class="list-group-item">title: ${interns.title}</li>
    <li class="list-group-item">school: ${interns.school}</li>
    </ul>
    </div>  
    </div>
    `
})
return templateData;
}

module.exports = template => {
   


return `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Team management</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
  <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>

<body>
    <header> 
        <div class="container-fluid">
            <div class="row">
                <div class="col">
            Team
        </div>
    </div>
</div>
<header>

<div id= "cards"> 
<div class="container">
<div class="row">

${generateManager(template)}
${generateEngineer(template)}
${generateIntern(template)}


</div> 
</div>
</div>


<body>
<html>
    
`
}