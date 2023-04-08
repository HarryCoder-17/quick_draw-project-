random_number = Math.floor((Math.random()*quick_draw_data_set.length)+1);
console.log(quick_draw_data_set[random_number]);
sketch = quick_draw_data_set[random_number];
document.getElementById('your_sketch_text').innerHTML = "sketch to be drawn:" + sketch;
timer_counter = 0; 
timer_check = "";
draw_sketch = "";
answer_holder = "";
score = 0;
