function output(){
    var bod = document.getElementById("date_birth").value;
    var tod = document.getElementById("today_date").value;
    var b = bod.split("/");
    var t = tod.split("/");
    var year, month, day;
    if(Number(b[1]) < Number(t[1]) && Number(b[0]) < Number(t[0])){
        year = Number(t[2]) - Number(b[2]);
        month = Math.abs(Number(t[1]) - Number(b[1]));
        day = Math.abs(Number(t[0]) - Number(b[0]));
    }else if(Number(b[1]) > Number(t[1]) && Number(b[0]) > Number(t[0])){
        year = (Number(t[2]) - Number(b[2])) - 1;
        month = (Math.abs(Number(b[1]) - 12) + Number(t[1])) - 1;
        day = Math.abs(30 - Number(b[0])) + Number(t[0]);
    }else if(Number(b[1]) > Number(t[1]) && Number(b[0]) < Number(t[0])){
        year = (Number(t[2]) - Number(b[2])) - 1;
        month = (Math.abs(Number(b[1]) - 12) + Number(t[1]));
        day =  Math.abs(Number(t[0]) - Number(b[0]));
    }else if(Number(b[1]) < Number(t[1]) && Number(b[0]) > Number(t[0])){
        year = Number(t[2]) - Number(b[2]);
        month = Math.abs(Number(t[1]) - Number(b[1]))-1;
        day = Math.abs(30 - Number(b[0])) + Number(t[0]);
    }else if(Number(b[1]) == Number(t[1]) && Number(b[0]) == Number(t[0])){
        year = Number(t[2]) - Number(b[2]);
        month = Math.abs(Number(t[1]) - Number(b[1]));
        day = Math.abs(Number(t[0]) - Number(b[0]));
    }else if(Number(b[1]) > Number(t[1]) && Number(b[0]) == Number(t[0])){
        year = (Number(t[2]) - Number(b[2])) - 1;
        month = (Math.abs(Number(b[1]) - 12) + Number(t[1]));
        day = Math.abs(Number(b[0]) - Number(t[0]));
    }else if(Number(b[1]) < Number(t[1]) && Number(b[0]) == Number(t[0])){
        year = Number(t[2]) - Number(b[2]);
        month = Math.abs(Number(t[1]) - Number(b[1]));
        day = Math.abs(Number(b[0]) - Number(t[0]));
    }else if(Number(b[1]) == Number(t[1]) && Number(b[0]) > Number(t[0])){
        year = Number(t[2]) - Number(b[2]) - 1;
        month = 11;
        day = Math.abs(30 - Number(b[0])) + Number(t[0]); 
    }else if(Number(b[1]) == Number(t[1]) && Number(b[0]) < Number(t[0])){
        year = Number(t[2]) - Number(b[2]);
        month = Math.abs(Number(t[1]) - Number(b[1]));
        day = Math.abs(Number(t[0]) - Number(b[0]));
    }
    document.getElementById("out").innerHTML = "You age is "+year+" years, "+month+" months, and "+day+" days.";
}