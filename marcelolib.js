export function getHTML(type, value){
    switch (type){
        case "id":
            return document.getElementById(value);
            break;
        case "class":
            return document.getElementsByClassName(value);
            break;
        case "query":
            return document.querySelector(value);
            break;
    }
}

export function elc(value){
    return addEventListener("click",value)
}