module.exports = function generateHTML(managerArr, engineerArr, interArr) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<link rel="stylesheet" href="style.css">
    <title>Engineering Team</title>
</head>

<body>
   
    <div id="header">Engineering Team</div>

<div class="container">
    
    <div class="employee">
        <div class="name">Will Wojeck</div>
        <div class="position">
            <img class="icon" src="./icons/gear.png">Engineer
        </div>
        <div class="employeeInfo">
            <div class="id text">ID: 24</div>
            <div class="email text">Email: <br>heliumface770@gmail.com</div>
            <div class="relevantInfo text">Github: <br><a href="https://github.com/heliumface770">github.com/heliumface770</a></div>
        </div>
    </div>    
    
</div>
    
</body>
</html>`
}