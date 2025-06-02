let quest = document.querySelector('.quest');
let answer = document.querySelectorAll('.answer div');

let colect_answer = [];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

let quest_a =  getRndInteger(1, 100)
let quest_b =  getRndInteger(1, 100)

let num;

let count_quest = 0;
let count_correct = 0;
for (let i = 0; i< answer.length; i++) {
    answer[i].addEventListener('click', function(){
            count_quest ++;
        if (num == i){
            count_correct ++;
            console.log('jumlah benar:', count_correct);
        }

        quest_a =  getRndInteger(1, 100)
        quest_b =  getRndInteger(1, 100)

        setQuest()
        console.log('jumlah soal:',count_quest)

    })
}




function setQuest(){
    let math_list = ['+','-','x',':']

    quest.innerHTML = `${quest_a} ${math_list[getRndInteger(0,4)]} ${quest_b}`
    
    let math_answer = quest.innerHTML.split(' ');
    
    let the_answer;
    if(math_answer[1] == '-'){
        the_answer = +math_answer[0] - +math_answer[2];
    }
    if(math_answer[1] == '+'){
        the_answer = +math_answer[0] + +math_answer[2];
    }
    if(math_answer[1] == ':'){
        the_answer = +math_answer[0] / +math_answer[2];
        the_answer = Math.round(the_answer * 100) / 100
    }
    if(math_answer[1] == 'x'){
        the_answer = +math_answer[0] * +math_answer[2];
    }

    num = getRndInteger(0, 4);
    for(let i = 0; i < answer.length; i ++) {
        if (i == num){
            answer[i].innerHTML = the_answer
        }else{
            answer[i].innerHTML = getRndInteger(1,100)
        }
    }

    
}
setQuest()

let result = document.querySelector('.result')
let textresult = document.querySelector('.result h1')
function startquest(){
    setTimeout(function(){
        document.querySelector('.answer').style.display = 'none'
        quest.style.display = 'none'
        result.style.display = 'block'
        textresult.innerHTML = `Berhasil menjawab benar ${count_correct} soal, dengan akurasi ${count_quest/count_quest}%`
    }, 10000)
    
}

let start = document.querySelector('.start button')
let close = document.querySelector('.start')

start.addEventListener('click', function(){
    document.querySelector('.answer').style.display = 'flex'
    quest.style.display = 'block'
    close.style.display = 'none'
    startquest()
})
let ulang = document.querySelector('.mulang button')

ulang.addEventListener('click', function(){
    document.querySelector('.answer').style.display = 'flex'
    quest.style.display = 'block'
    close.style.display = 'none'
    result.style.display = 'none'
    startquest()
})