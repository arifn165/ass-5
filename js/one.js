const firstBtn = document.getElementById('first-btn')
.addEventListener('click',function(){
    const plusValue = parseInt(document.getElementById('input-value').innerText = '1');
    console.log(plusValue);
})
document.getElementById("color-Btn").addEventListener("click", function() {
    document.body.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

