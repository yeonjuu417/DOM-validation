let name = document.querySelector('#name');
let sex = document.querySelectorAll('#sex');
let id = document.querySelector('#id');
let pw = document.querySelector('#pw');
let repw = document.querySelector('#repw');


function check(){
    if(!namec(name)){
        return false
    }else if(!sexc(sex)){
        return false
    }else if(!idc(id)){
        return false
    }else if(!pwc(pw,repw)){
        return false
    }else{
        alert("회원가입이 완료되었습니다.");
        return true;
    }
   
}

function namec(name){
    if(name.value === ""){
        alert("이름을입력해");
        name.focus();
        return false;
    }

    return true;
}

function sexc(sex){
    for(let i=0; i<sex.length; i++){
        if(sex[i].checked == true){
            return true;
        }
    }
    alert("성별선택해");
    return false;
}

function idc(id){
    if(id.value === ""){
        alert("아이디입력해");
        id.focus();
        return false;
    }
    let idRegExp = /^[a-zA-z0-9]{3,12}$/;

    if (!idRegExp.test(id.value)) {
        alert("아이디는 영문 대소문자와 숫자 3~12자리로 입력해야해!");
        id.value = "";
        id.focus();
        return false;
    }

    return true;
}

function pwc(pw,repw){
    if(pw.value === ""){
        alert("비밀번호를 입력해");
        pw.focus();
        return false;
    }
    if(repw.value === ""){
        alert("비밀번호확인 입력해");
        repw.focus();
        return false;
    }
    
    let pwRegExp = /^[a-zA-z0-9]{4,12}$/;

    if (!pwRegExp.test(pw.value)) {
        alert("비밀번호는 영문 대소문자와 숫자 4~12자리로 입력해야해!");
        pw.value = "";
        pw.focus();
        return false;
    }

    if(pw.value !== repw.value){
        alert("비밀번호가 일치하지 않아");
        repw.value = "";
        repw.focus();
        return false;
    }
    return true;
}

document.querySelector('#button').onclick = check;