let select = document.getElementById("purposeSelect");
let purposeNumber = document.getElementById("purposeNumber");

//input z correction
const selectChange = function () {
    select.style.border = '';
    let selectValue = select.options[select.selectedIndex].value;
    if (selectValue === "correction") {
        purposeNumber.classList.add("show");
        purposeNumber.classList.remove("hide");
        purposeNumber.value = 1;
    } else {
        purposeNumber.classList.remove("show");
        purposeNumber.classList.add("hide");
    }
};
select.addEventListener("change", selectChange);

//submit
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    let selectValue = select.options[select.selectedIndex].value;
    if (selectValue === "new") {
        console.log('0');
    } else if (selectValue === "correction") {
        console.log(purposeNumber.value);
    } else {
        select.style.border = 'solid 2px red'
    }
});

//input != i number
purposeNumber.addEventListener('change', () => {
    if (typeof purposeNumber.value !== 'number' && purposeNumber.value <= 0) {
        purposeNumber.value = 1;
    }
});