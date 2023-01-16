var $json = 
[
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]

var $containerGraphics= document.getElementById('container-graphics');
var $nameDays = [];

$json.forEach(({day, amount}) => {
    $containerGraphics.innerHTML += 
    ` <div class="days">
        <div class="graphics-value" id="container-${day}">${amount}</div>
        <div class="graphics" id="${day}"></div>
        <p>${day}</p>
      </div>
    `

    $nameDays.push(day)
})

$nameDays.forEach((day) => {
  var $idDays = document.getElementById(day);

  $idDays.addEventListener('mouseover', () => {
    document.getElementById(`container-${day}`).style = 'opacity: 1'
  })

  $idDays.addEventListener('mouseleave', () => {
    document.getElementById(`container-${day}`).style = 'opacity: 0'
  })

}) 





