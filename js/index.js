const display = document.getElementById("display")
        
        function clean() {
            display.value = ""
        }
        function calc() {
            display.value = eval(display.value)
        }
        function press(x) {
            display.value += x
        }
        function del() {
            const inputValue = display.value;
            // if (display.value.length > 0) {
            //     display.value = display.value.slice(0, -1);
            // }
            if (inputValue.length > 0) {
                display.value = inputValue.slice(0, -1);
            }
        }
        function percentage(){
            display.value = display.value/100
        }