
document.getElementById("color-Btn").addEventListener("click", function() {
    document.body.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
let clickedButtons = new Set();

        function buttonClicked(buttonId, buttonName) {
            alert('Board Updated Successfully ');

            // Disable the button
            document.getElementById(buttonId).disabled = true;

            // Add to clicked list
            clickedButtons.add(buttonName);
            updateClickedButtons();

            // Add to activity log
            addLog(buttonName + " was clicked.");
        }

        function addLog(message) {
            let logContainer = document.getElementById("activityLog");
            let log = document.createElement("div");
            log.className = "log";
            log.textContent = message;
            logContainer.appendChild(log);
        }

        function updateClickedButtons() {
            let clickedContainer = document.getElementById("clickedButtons");
            if (clickedButtons.size > 0) {
                clickedContainer.textContent = "You clicked: " + Array.from(clickedButtons).join(", ");
            } else {
                clickedContainer.textContent = "No buttons clicked yet.";
            }
        }

        // Adding event listeners for each button
        document.getElementById("first-btn").addEventListener("click", function() { buttonClicked("first-btn", "You have Complete The Task Fix Mobile Button Issue at 11:08:32 AM"); });
        
        document.getElementById("btn2").addEventListener("click", function() { buttonClicked("btn2","You have Complete The Task Add Dark Mode at 12:12:55 AM"); });
        document.getElementById("btn3").addEventListener("click", function() { buttonClicked("btn3", "You have Complete The Task Optimize Home page at 11:13:29 AM"); });
        document.getElementById("btn4").addEventListener("click", function() { buttonClicked("btn4", "You have Complete The Task Add new emoji at 4:16:49 AM"); });
        document.getElementById("btn5").addEventListener("click", function() { buttonClicked("btn5", "You have Complete The Task Integrate OpenAI API at 4:17:05 AM"); });
        document.getElementById("btn6").addEventListener("click", function() { buttonClicked("btn6", "You have Complete The Task Improve Job searching at 4:17:20 AM"); });

        // clear button

        document.getElementById('two-page').addEventListener('click',function(){
            window.location.href="two.html";
        })
