function finalExercise() {
    const form = document.querySelector('.form');
    const result = document.querySelector('.result');

    const people = [];

    function formSubmit(eve){
        eve.preventDefault();

        const name = form.querySelector('.name');
        const lastname = form.querySelector('.lastname');
        const height = form.querySelector('.height');
        const weight = form.querySelector('.weight');

        console.log(name, lastname, height, weight);
    
        people.push({
            name: name.value,
            lastname: lastname.value,
            height: height.value,
            weight: weight.value
        });

        console.log(people);

        result.innerHTML += `<p>${name.value}</p>`;
    }

    form.addEventListener('submit', formSubmit);
};

finalExercise();
