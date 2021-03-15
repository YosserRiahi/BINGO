var imageclickes = [];
var count = 0;
function chargementPage() {
  document.getElementById('encore').style.visibility = 'hidden';
  let i = 1;
  while (i < 10) {
    const numb = Math.floor(Math.random() * 3 + 1);
    switch (numb) {
      case 1: {
        document.getElementById('frame' + i).value = numb;
        break;
      }
      case 2: {
        document.getElementById('frame' + i).value = numb;
        break;
      }
      case 3: {
        document.getElementById('frame' + i).value = numb;
        break;
      }
    }
    i++;
  }
}

function affImg(e) {
  imageclickes[count] = e.target.value;
  if (imageclickes[0] == imageclickes[1] && imageclickes[0] == imageclickes[2]) {
    alert('Congrats ! You won !');
  } else {
    alert("Try again ... Maybe you'be more lucky !?");
  }
  document.getElementById('encore').style.visibility = 'visible';
}
