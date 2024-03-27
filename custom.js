const btn = document.querySelector("#btn");
const solution = document.querySelector("#solution");

btn.addEventListener("click", function() {

    let sum = 0;

    for (i = 1; i < 1000; i++) {

        if (i % 3 == 0) {
            sum += i;
        } else if (i % 5 == 0) {
            sum += i;
        }

    }

    solution.textContent = sum;

});



const btn2 = document.querySelector("#btn2");
const solution2 = document.querySelector("#solution2");

btn2.addEventListener("click", function() {

    let a = 1;
    let b = 2;
    let sum = b;
    let c = a + b;

    for (i = 1; c <= 4000000; i++) {

        a = b;
        b = c;
        c = a + b

        if (b % 2 == 0) {

            sum += b;

        }

    }

    solution2.textContent = solution2.textContent.slice(0, -2);
    solution2.textContent = sum;

});