function delButtons() {
    var p_list = document.getElementsByTagName("div");
    for(var i=p_list.length-1; i>=0; i--){
        var p = p_list[i];
        if(p.className === "small radius button"){
            p.parentNode.removeChild(p);
        }
    }
}
