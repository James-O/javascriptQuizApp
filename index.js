
var score = 0;
var total = 8;
//correct options
var answers =['b','a','d','b','d','b','d','b'];
function Result(){
    //var q1a = document.forms['quizForm']['q1'].value;
    //var q1b = document.getElementById('q1b').value;
  
    var form = document.forms['quizForm'];

    var q1 = form.elements['q1'].value;
    var q2 = form.elements['q2'].value;
    var q3 = form.elements['q3'].value;
    var q4 = form.elements['q4'].value;
    var q5 = form.elements['q5'].value;
    var q6 = form.elements['q6'].value;
    var q7 = form.elements['q7'].value;
    var q8 = form.elements['q8'].value;

    // if(q1 == null || q1 == ''){
    //     alert('please answer question 1');
    //     return false;
    // }

    for(i=1;i<=total;i++){
        if(eval('q'+i)==null || eval('q'+i) ==''){
            alert('please answer question '+i);
            return false;
        }
    }

    // if(q1 == answers[0]){
    //     score++;
    // }
    for(i=1;i<total;i++){
        if(eval('q'+i)==answers[i-1]){
            score++;
        }
    }

  var result = document.getElementById('result');
  result.innerHTML = 'You scored '+score+' out of '+total;
  alert('you scored '+score+' out of '+total);
  score = 0;
  return false;
}