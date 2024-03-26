const btn = document.querySelector("#btn");
const solution = document.querySelector("#solution");

btn.addEventListener("click", function () {

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
