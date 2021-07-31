var numberInput = document.querySelector('#number')
var checkAction = document.querySelector('#check')
var loadingImg = document.querySelector('#loading-img')
var finalResult = document.querySelector('#final-result')
var result = document.querySelector('#result')
var finalImg = document.querySelector('#final-img')

function checkPrime(event) {
  event.preventDefault()

  var number = parseInt(numberInput.value)
  var primeFlag = true

  if (number < 0) {
    alert('Enter a valid input!')
    return
  }

  finalResult.style.display = 'none'
  loadingImg.style.display = 'block'

  setTimeout(function () {
    loadingImg.style.display = 'none'
    finalResult.style.display = 'block'
  }, 4200)

  if (number === 1) {
    // console.log("1 is neither prime nor composite.")
    result.textContent = '1 is neither prime nor composite!'
    finalImg.src = 'assets/shocked.gif'
    return
  } else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        primeFlag = false
        break
      }
    }

    if (primeFlag) {
      //   console.log(`${number} is a prime number! :)`)
      result.textContent = `${number} is a prime number! :)`
      finalImg.src = 'assets/yes.gif'
    } else {
      //   console.log(`${number} is not a prime number! :(`)
      result.textContent = `${number} is not a prime number! :(`
      finalImg.src = 'assets/sad.gif'
    }
  }
}

checkAction.addEventListener('click', checkPrime)
