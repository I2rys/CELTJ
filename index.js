//Main
function convert(letters){
    letters = letters.toLowerCase()

    var japanese = "";

    for( i = 0; i < letters.length; i++ ){
        if(letters[i] == "a"){
            japanese += "ア";
        }else if(letters[i] == "b"){
            japanese += "イ";
        }else if(letters[i] == "c"){
            japanese += "ウ";
        }else if(letters[i] == "d"){
            japanese += "エ";
        }else if(letters[i] == "e"){
            japanese += "オ";
        }else if(letters[i] == "f"){
            japanese += "カ";
        }else if(letters[i] == "g"){
            japanese += "キ";
        }else if(letters[i] == "h"){
            japanese += "ク";
        }else if(letters[i] == "i"){
            japanese += "ケ";
        }else if(letters[i] == "j"){
            japanese += "コ";
        }else if(letters[i] == "k"){
            japanese += "サ";
        }else if(letters[i] == "l"){
            japanese += "シ";
        }else if(letters[i] == "m"){
            japanese += "ス";
        }else if(letters[i] == "n"){
            japanese += "セ";
        }else if(letters[i] == "o"){
            japanese += "ソ";
        }else if(letters[i] == "p"){
            japanese += "タ";
        }else if(letters[i] == "q"){
            japanese += "チ";
        }else if(letters[i] == "r"){
            japanese += "ツ";
        }else if(letters[i] == "s"){
            japanese += "テ";
        }else if(letters[i] == "t"){
            japanese += "ト";
        }else if(letters[i] == "u"){
            japanese += "ナ";
        }else if(letters[i] == "v"){
            japanese += "ニ";
        }else if(letters[i] == "w"){
            japanese += "ヌ";
        }else if(letters[i] == "x"){
            japanese += "ネ";
        }else if(letters[i] == "y"){
            japanese += "ノ";
        }else if(letters[i] == "z"){
            japanese += "ハ";
        }
    }

    return japanese;
}

//Exporter
module.exports = {
    convert: convert
}