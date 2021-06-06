function korAll(){
    $(".rice").css('display','block')
    $(".noodle").css('display','block')
}
function korRice(){
    $(".noodle").css('display','none')
    $(".rice").css('display','block')
}
function korNoodle(){
    $(".noodle").css('display','block')
    $(".rice").css('display','none')
}

function foodModal(lo,la,name,link){
    var myModal = new bootstrap.Modal(document.getElementById('foodModal'));
    myModal.toggle()
    mapGenerator(lo,la,name,link)
}