const form = document.querySelector('#form')

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputHeight = event.target.querySelector('#height');
    const inputWeight = event.target.querySelector('#weight');

    const height = Number(inputHeight.value);
    const weight = Number(inputWeight.value);
    const result  = document.querySelector('#result')

    console.log('height: ' + height);
    console.log('weight: ' + weight);

    if (!height)
        return result.innerHTML = '<div class="invalidheight"><p>Invalid Height</p></div>';

    if (!weight)
    return result.innerHTML = '<div class="invalidweight"><p>Invalid Weight</p></div>';

    const IMC = (weight/(height * height));
    console.log('imc is: ' + IMC);
    const newIMC = IMC.toFixed(2);

    console.log('imc rounded: ' + newIMC);

    if (newIMC < 18.5){
        return result.innerHTML = '<div class="yellow"><p>You are underweight and is probably good to go to a Doctor or Nutricionist.</p></div>';
    };
    
    if (newIMC > 18.5 && newIMC <= 24.9){
        return result.innerHTML = '<div class="green"><p>You are withing the normal weight range. Good Work!</p></div>';
    };
    
    if (newIMC > 25 && newIMC <= 29.9){
        return result.innerHTML = '<div class="yellow"><p>You are overweight and is probably good to go to a Doctor or Nutricionist.</p></div>';
    };
    
    if (newIMC > 30 && newIMC <= 34.9){
        return result.innerHTML = '<div class="redish"><p>You are withing the range of Obesity Grade 1, you need to see a doctor or nutricionist!</p></div>';
    };
    
    if (newIMC > 35 && newIMC <= 39.9){
        return result.innerHTML = '<div class="red"><p>You are withing the range of Obesity Grade 2, you have life threats with that health, go see a doctor!</p></div>';
    }else {
        return result.innerHTML = '<div class="black"><p>You are withing the range of Obesity Grade 3, you need to hurry up to a doctor right now!</p></div>';
    }
});
