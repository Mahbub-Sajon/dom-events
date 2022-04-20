function makeRed (){
    document.body.style.backgroundColor = 'red';
}
const blueButton = document.getElementById('makeBlueButton');
blueButton.onclick=makeBlue;


function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

const greenButton = document.getElementById('makeGreenButton');
      greenButton.onclick = function (){
          document.body.style.backgroundColor= 'green';
      }

      const makeGoldenRod = document.getElementById('makeGoldenRodButton')
      makeGoldenRod.addEventListener('click', goldenRod );
      function goldenRod(){
          document.body.style.backgroundColor= 'goldenrod';
      }
      const makeHotPink = document.getElementById('makeHotPinkButton');
      makeHotPink.addEventListener('click', function(){
          document.body.style.backgroundColor='hotpink';
      })

      const makeLightBlue = document.getElementById('makeLightBlueButton').addEventListener('click', function(){
          document.body.style.backgroundColor = 'lightblue';
      })