function anyClick() {
    $.ajax({
        type: "get",
        url: "http://api.openweathermap.org/data/2.5/weather?q=busan&appid=a40005b9dd55620b64c0889925acdd27",
        success: function (data) {
            var weather = data.weather[0].id
            if (parseInt(weather / 100) == 2) {
                $("#addHere").append(['<div class="homeCircle mx-3 my-3 text-center col-11 col-md-9 col-lg-9" onclick="location.href='+"'"+"/ramen"+"'"+'"'+'>',
                    '<div class="d-flex py-3 my-3"',
                    'style="height:200px; overflow: hidden; align-items: center; justify-content: center;">',
                    '<img src="../img/lightning.png" class="homePicture">',
                    '<p class="ridi mx-5 my-3" style="font-size:2rem">이런 날엔.. 배달 음식으로 일식..!</p>',
                    '</div>',
                    '<p class="ridi my-3" style="font-size:2rem"></p>',
                    '</div>'].join(''))
            }
            else if (parseInt(weather / 100) == 3) {
                $("#addHere").append(['<div class="homeCircle mx-3 my-3 text-center col-11 col-md-9 col-lg-9" onclick="location.href='+"'"+"/americanFood"+"'"+'"'+'>',
                    '<div class="d-flex py-3 my-3"',
                    'style="height:200px; overflow: hidden; align-items: center; justify-content: center;">',
                    '<img src="../img/cloudy.png" class="homePicture">',
                    '<p class="ridi mx-5 my-3" style="font-size:2rem">감성있게 양식 어때?</p>',
                    '</div>',
                    '<p class="ridi my-3" style="font-size:2rem"></p>',
                    '</div>'].join(''))
            }
            else if (parseInt(weather / 100) == 5) {
                $("#addHere").append(['<div class="homeCircle mx-3 my-3 text-center col-11 col-md-9 col-lg-9" onclick="location.href='+"'"+"/koreanFood"+"'"+'"'+'>',
                    '<div class="d-flex py-3 my-3"',
                    'style="height:200px; overflow: hidden; align-items: center; justify-content: center;">',
                    '<img src="../img/rain.png" class="homePicture">',
                    '<p class="ridi mx-5 my-3" style="font-size:2rem">비도 오는데 파전에 막걸리 어때?</p>',
                    '</div>',
                    '<p class="ridi my-3" style="font-size:2rem"></p>',
                    '</div>'].join(''))
            }
            else if (parseInt(weather / 100) == 6) {
                $("#addHere").append(['<div class="homeCircle mx-3 my-3 text-center col-11 col-md-9 col-lg-9" onclick="location.href='+"'"+"/chineseFood"+"'"+'"'+'>',
                    '<div class="d-flex py-3 my-3"',
                    'style="height:200px; overflow: hidden; align-items: center; justify-content: center;">',
                    '<img src="../img/snow.png" class="homePicture">',
                    '<p class="ridi mx-5 my-3" style="font-size:2rem">눈도 오는데 중식 먹자.</p>',
                    '</div>',
                    '<p class="ridi my-3" style="font-size:2rem"></p>',
                    '</div>'].join(''))
            }
            else if (parseInt(weather / 100) == 7) {
                $("#addHere").append(['<div class="homeCircle mx-3 my-3 text-center col-11 col-md-9 col-lg-9" onclick="location.href='+"'"+"/other"+"'"+'"'+'>',
                    '<div class="d-flex py-3 my-3"',
                    'style="height:200px; overflow: hidden; align-items: center; justify-content: center;">',
                    '<img src="../img/atmospheric.png" class="homePicture">',
                    '<p class="ridi mx-5 my-3" style="font-size:2rem">간단하게 토스트?</p>',
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
            else if (parseInt(weather / 100) == 8) {
                $("#addHere").append(['<div class="homeCircle mx-3 my-3 text-center col-11 col-md-9 col-lg-9" onclick="location.href='+"'"+"/meat"+"'"+'"'+'>',
                    '<div class="d-flex py-3 my-3"',
                    'style="height:200px; overflow: hidden; align-items: center; justify-content: center;">',
                    '<img src="../img/clouds.png" class="homePicture">',
                    '<p class="ridi mx-5 my-3" style="font-size:2rem">흐린 날씨에 삼겹살!</p>',
                    '</div>',
                    '<p class="ridi my-3" style="font-size:2rem"></p>',
                    '</div>'].join(''))
            }
            else if (parseInt(weather / 100) == 9) {
                $("#addHere").append(['<div class="homeCircle mx-3 my-3 text-center col-11 col-md-9 col-lg-9" onclick="location.href='+"'"+"/koreanFood"+"'"+'"'+'>',
                    '<div class="d-flex py-3 my-3"',
                    'style="height:200px; overflow: hidden; align-items: center; justify-content: center;">',
                    '<img src="../img/extreme-weather.png" class="homePicture">',
                    '<p class="ridi mx-5 my-3" style="font-size:2rem">나가지마 !! 한식 !!</p>',
                    '</div>',
                    '<p class="ridi my-3" style="font-size:2rem"></p>',
                    '</div>'].join(''))
            }
            else{
                alert("날씨가 안 불러와집니다!! ㅠ")
            }
        },
        error: function () {
            alert("오류발생");
        }
    })
}