var london = 0;
var new_york = 0;
var rio = 0;
var tokyo = 0;

var questions = function(question){
  if (question === "london") {
    london+=1;
  } else if (question === "new_york"){
    new_york+=1;
  } else if (question === "rio") {
    rio+=1;
  } else if (question === "tokyo") {
    tokyo+=1;
  }
}

$(document).ready(function(){
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var q1 = $("input:radio[name=q1]:checked").val();
    var q2 = $("input:radio[name=q2]:checked").val();
    var q3 = $("input:radio[name=q2]:checked").val();
    var q4 = $("input:radio[name=q2]:checked").val();
    var q5 = $("input:radio[name=q2]:checked").val();
    var q6 = $("input:radio[name=q2]:checked").val();
    var q7 = $("input:radio[name=q2]:checked").val();
    var q8 = $("input:radio[name=q2]:checked").val();
    var q9 = $("input:radio[name=q2]:checked").val();
    var q10 = $("input:radio[name=q2]:checked").val();
    var q11 = $("input:radio[name=q2]:checked").val();
    var q12 = $("input:radio[name=q2]:checked").val();


    questions(q1);
    questions(q2);
    questions(q3);
    questions(q4);
    questions(q5);
    questions(q6);
    questions(q7);
    questions(q8);
    questions(q9);
    questions(q10);
    questions(q11);
    questions(q12);

    if (london >= new_york && london >= rio && london >= tokyo) {
      $("#output").text("London!");
      $("#results").addClass("london");
      $(".london").show();
    } else if (new_york >= london && new_york >= rio && new_york >= tokyo) {
      $("#output").text("New York!");
      $("#results").addClass("new_york");
      $(".new_york").show();
    } else if (rio >= new_york && rio >= rome && rio >= tokyo) {
      $("#output").text("Rio De Janeiro!");
      $("#results").addClass("rio");
      $(".rio").show();
    } else {
      $("#output").text("Tokyo!");
      $("#results").addClass("tokyo");
      $(".tokyo").show();
    }
    $("#results").show();
  });
});