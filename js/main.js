
    function displayinput() {
        const testinput = document.getElementById("name");
        const valuelength = testinput.value.length

        console.log('test input value', testinput.value);
        console.log('test input lenght', testinput.length);
        if (valuelength == 0) {
                    document.getElementById("para").innerHTML = "You havent written anything";
        } else {
            document.getElementById("para").innerHTML = testinput.value;
        }
    }

    function highlight() {
        const para = document.getElementById('para');
        para.style.color = "#ff0000";
    }
    
    function removeHighlight() {
        const para = document.getElementById('para');
        para.style.color = "#000000";
    } 