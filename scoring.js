// After loading the DOM, execute the processing in function()
$(document).ready(function(){
  // Create a logic that gets the input values of [Japanese score, English score, math score, science score, social score] and gives the total score and average score.
  function score_indicate(){
    // In the variable "subject_points"
    // Substitute the array of [Japanese score, English score, math score, science score, social score].
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    // In the variable "sum"
    // Add [Japanese score, English score, math score, science score, social score] respectively.
    // Hint! Take out the arrays one by one and add them.
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
    // Output the variable "sum" (total score) to "total score:" (id = "sum_indicate").
    $("#sum_indicate").text(sum);

    let average = (subject_points[0]+subject_points[1]+subject_points[2]+subject_points[3]+subject_points[4])/5
    // In the variable "average"
    $("#average_indicate").text(average);
    // Calculate the average value and substitute. (Total score of the number you want to average (sum) / Total number)
    // Hint! Use the length method to find the total number. (length method: Method to get the length of the string, the number of elements in the array, etc.)
  };
  // Get the average score and create the logic to rank ("A", "B", "C", "D") from the obtained average score.
  function get_achievement(){

    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    let averageIndicate = (subject_points[0]+ subject_points[1]+subject_points[2]+subject_points[3]+subject_points[4])/5
    // In the variable "averageIndicate"
    // Get the average score from id = "average_indicate" on HTML and substitute it.
    //let averageIndicate = $("#average_indicate").text(average);

    console.log(averageIndicate)
    // If "averageIndicate" is 80 or higher, "A" is returned.
    if (averageIndicate >= 80){
      $("#evaluation").text('A');
      // If "averageIndicate" is 60 or more, "B" is returned.
    } else if (averageIndicate >= 60 && averageIndicate < 80) {
      $("#evaluation").text('B');
    }
      else if (averageIndicate >= 40 && averageIndicate < 60) {
        r$("#evaluation").text('C');
      // If "averageIndicate" is 40 or more, "C" is returned.
      // If "averageIndicate" is any other score, "D" is returned.
    } else {
      $("#evaluation").text('D');
    }

    return $("#evaluation").text()

  };
  // Get the score of each subject and make the logic to judge pass / fail from the obtained score.
  function get_pass_or_failure(){

    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];

    if (subject_points[0] < 60 || subject_points[1] < 60 || subject_points[2] < 60 || subject_points[3] < 60 || subject_points[4] < 60){
      $("#judge").text('Fail');
    }
    else {
      $("#judge").text('Pass');
    }
return $("#judge").text();
      // If "averageIndicate" is 60 or more, "B" is returned.
  };
  // Create the final judge logic.
  function judgement(){
    // Assign "return value of get_achievement ()" to the variable "achievement".
    let achievement = get_achievement();
    // Substitute "return value of get_pass_or_failure ()" for variable "pass_or_failure".
    let pass_or_failure = get_pass_or_failure();
    // When you press the "Final Judge" (id = "alert-indicate)" button, "Your grade is $ {achievement} and $ {pass_or_failure}" is output.
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${achievement}で${pass_or_failure}です</label>`);
  };
  // This is the process to fire "function score_indicate ()" when any of [Japanese score, English score, math score, science score, social score] is changed.
  $('#national_language, #english, #mathematics, #science, #society').change(function(){
    score_indicate();
  });
  // This is the process that "get_achievement ()" is output when the "Rank" (id = "evaluation") button is pressed.
  $('#btn-evaluation').click(function(){
  $("#evaluation").text(get_achievement());
  });
  // This is the process that "function et_pass_or_failure ()" is output when the "judgment" (id = "btn-judge") button is pressed.
    $('#btn-judge').click(function(){
     $("#judge").text(get_pass_or_failure());
  });
  // This is the process that "function judgment ()" is output when the "final judge" (id = "btn-declaration") button is pressed.
  $('#btn-declaration').click(function(){
    $("#declaration").text(judgement());
  });
});
// The js description written here is just a template prepared as a hint, so if you want to implement it without following the written description, you can implement it as you like. Any implementation will pass if the task requirements are met and the quality of the code is determined to be at a certain level.
// In the example, both JavaScript and jQuery are used, but you can use either one.
