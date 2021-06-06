function anyClick() {
    $.ajax({
        type: "get",
        url: "http://api.openweathermap.org/data/2.5/weather?q=busan&appid=a40005b9dd55620b64c0889925acdd27",
        success: function (data) {
            var weather = data.weather[0].id
            if (weather / 100 == 2) {
                $("#addHere").append(['<div class="homeCircle mx-3 my-3 text-center col-11 col-md-9 col-lg-9" onclick="location.href='+"'"+"/meat"+"'"+'"'+'>',
                    '<div class="d-flex py-3 my-3"',
                    'style="height:200px; overflow: hidden; align-items: center; justify-content: center;">',
                    '<img src="../img/sun.png" class="homePicture">',
                    '<p class="ridi mx-5 my-3" style="font-size:2rem">이렇게 맑은 날엔 고기지!</p>',
                    '</div>',
                    '<p class="ridi my-3" style="font-size:2rem"></p>',
                    '</div>'].join(''))
            }
            else if (weather / 100 == 3) {
                $("#addHere").append(['<div class="homeCircle mx-3 my-3 text-center col-11 col-md-9 col-lg-9" onclick="location.href='+"'"+"/meat"+"'"+'"'+'>',
                    '<div class="d-flex py-3 my-3"',
                    'style="height:200px; overflow: hidden; align-items: center; justify-content: center;">',
                    '<img src="../img/sun.png" class="homePicture">',
                    '<p class="ridi mx-5 my-3" style="font-size:2rem">이렇게 맑은 날엔 고기지!</p>',
                    '</div>',
                    '<p class="ridi my-3" style="font-size:2rem"></p>',
                    '</div>'].join(''))
            }
            else if (weather / 100 == 5) {
                $("#addHere").append(['<div class="homeCircle mx-3 my-3 text-center col-11 col-md-9 col-lg-9" onclick="location.href='+"'"+"/meat"+"'"+'"'+'>',
                    '<div class="d-flex py-3 my-3"',
                    'style="height:200px; overflow: hidden; align-items: center; justify-content: center;">',
                    '<img src="../img/sun.png" class="homePicture">',
                    '<p class="ridi mx-5 my-3" style="font-size:2rem">이렇게 맑은 날엔 고기지!</p>',
                    '</div>',
                    '<p class="ridi my-3" style="font-size:2rem"></p>',
                    '</div>'].join(''))
            }
            else if (weather / 100 == 6) {
                $("#addHere").append(['<div class="homeCircle mx-3 my-3 text-center col-11 col-md-9 col-lg-9" onclick="location.href='+"'"+"/meat"+"'"+'"'+'>',
                    '<div class="d-flex py-3 my-3"',
                    'style="height:200px; overflow: hidden; align-items: center; justify-content: center;">',
                    '<img src="../img/sun.png" class="homePicture">',
                    '<p class="ridi mx-5 my-3" style="font-size:2rem">이렇게 맑은 날엔 고기지!</p>',
                    '</div>',
                    '<p class="ridi my-3" style="font-size:2rem"></p>',
                    '</div>'].join(''))
            }
            else if (weather / 100 == 7) {
                $("#addHere").append(['<div class="homeCircle mx-3 my-3 text-center col-11 col-md-9 col-lg-9" onclick="location.href='+"'"+"/meat"+"'"+'"'+'>',
                    '<div class="d-flex py-3 my-3"',
                    'style="height:200px; overflow: hidden; align-items: center; justify-content: center;">',
                    '<img src="../img/sun.png" class="homePicture">',
                    '<p class="ridi mx-5 my-3" style="font-size:2rem">이렇게 맑은 날엔 고기지!</p>',
                    '</div>',
                    '<p class="ridi my-3" style="font-size:2rem"></p>',
                    '</div>'].join(''))
            }
            else if (weather == 800) {
                $("#addHere").append(['<div class="homeCircle mx-3 my-3 text-center col-11 col-md-9 col-lg-9" onclick="location.href='+"'"+"/meat"+"'"+'"'+'>',
                    '<div class="d-flex py-3 my-3"',
                    'style="height:200px; overflow: hidden; align-items: center; justify-content: center;">',
                    '<img src="../img/sun.png" class="homePicture">',
                    '<p class="ridi mx-5 my-3" style="font-size:2rem">이렇게 맑은 날엔 고기지!</p>',
                    '</div>',
                    '<p class="ridi my-3" style="font-size:2rem"></p>',
                    '</div>'].join(''))
            }
            else if (weather / 100 == 8) {
                $("#addHere").append(['<div class="homeCircle mx-3 my-3 text-center col-11 col-md-9 col-lg-9" onclick="location.href='+"'"+"/meat"+"'"+'"'+'>',
                    '<div class="d-flex py-3 my-3"',
                    'style="height:200px; overflow: hidden; align-items: center; justify-content: center;">',
                    '<img src="../img/sun.png" class="homePicture">',
                    '<p class="ridi mx-5 my-3" style="font-size:2rem">이렇게 맑은 날엔 고기지!</p>',
                    '</div>',
                    '<p class="ridi my-3" style="font-size:2rem"></p>',
                    '</div>'].join(''))
            }
            else if (weather / 100 == 9) {
                $("#addHere").append(['<div class="homeCircle mx-3 my-3 text-center col-11 col-md-9 col-lg-9" onclick="location.href='+"'"+"/meat"+"'"+'"'+'>',
                    '<div class="d-flex py-3 my-3"',
                    'style="height:200px; overflow: hidden; align-items: center; justify-content: center;">',
                    '<img src="../img/sun.png" class="homePicture">',
                    '<p class="ridi mx-5 my-3" style="font-size:2rem">이렇게 맑은 날엔 고기지!</p>',
                    '</div>',
                    '<p class="ridi my-3" style="font-size:2rem"></p>',
                    '</div>'].join(''))
            }
        },
        error: function () {
            alert("오류발생");
        }
    })
}