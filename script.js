/**@type {HTMLCanvasElement} */

quick_draw_data_set = [""]
random_number = Math.floor((Math.random()*quick_draw_data_set.length)+1);
console.log(quick_draw_data_set[random_number]);
sketch = quick_draw_data_set[random_number];
document.getElementById('your_sketch_text').innerHTML = "sketch to be drawn:" + sketch;
timer_counter = 0; 
timer_check = "";
draw_sketch = "";
answer_holder = "";
score = 0;

function setup(){
    canvas = createCanvas(280 , 280);
    canvas.center();
    background("white");
}

function draw(){

}

function check_sketch(){
    timer_counter++;
    document.getElementById("timer").innerHTML = "Timer" + timer_counter;
    if(timer_counter > 400){
        timer_counter = 0;
        timer_check = "comepleted";
    }
    if(timer_check = "completed" || answer_holder == "set"){
        timer_check = "";
        answer_holder = "";
        updateCanvas();
    }
}

function updateCanvas(){
    background("white");
    Math.floor()
}