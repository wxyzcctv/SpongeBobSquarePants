!function () {
    let duration = 10
    let id
    $('.actions').on('click','button',function(e){
        let $button = $(e.currentTarget)//获得当前点击的按钮是哪一个
        let speed = $button.attr('data-speed')
        $button.addClass('active')
        .siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
            duration = 50
            break
            case 'normal':
            duration = 10
            break
            case 'fast':
            duration = 0
            break
            case 'close':
            let container = document.querySelector('#code')
            let styleTage = document.querySelector('#styleTage')
            container.innerHTML = Prism.highlight(code,Prism.languages.css)
            styleTage.innerHTML = code
            container.scrollTop = container.scrollHeight
            window.clearTimeout(id)
        }
    })
    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTage = document.querySelector('#styleTage')
        let n = 0
        id = setTimeout(function run() {
            n += 1
            // container.innerHTML = Prism.highlight( code.substring(0,n),Prism.languages.css)
            container.innerHTML = Prism.highlight( code.substring(0,n),Prism.languages.css)
            styleTage.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n < code.length) {
                id = setTimeout(run, duration)
                // 此处记录的将是最新的定时时间
            } else {
                fn && fn.call()
            }
        }, duration)
    }
    let code = `
    #body {
        position: relative;
        width: 100%;
        height: 100vh;
        background-color: yellow;
      }
      .spot {
        position: absolute;
        background-color: rgb(185, 163, 0);
        border-radius: 50%;
      }
      #spot1 {
        width: 120px;
        height: 200px;
        border-radius: 120px / 200px;
        top: 10px;
        left: 20px;
        transform: rotate(-15deg);
      }
    #spot2 {
        width: 60px;
        height: 100px;
        border-radius: 60px / 100px;
        top: 220px;
        left: 20px;
        transform: rotate(-15deg);
      }
       #spot3 {
        width: 120px;
        height: 180px;
        border-radius: 120px / 180px;
        top: 500px;
        left: 230px;
        transform: rotate(5deg);
      }
      #spot4 {
        width: 60px;
        height: 100px;
        border-radius: 60px / 100px;
        top: 480px;
        left: 20px;
        transform: rotate(0deg);
      }
      #spot5 {
        width: 40px;
        height: 80px;
        border-radius: 40px / 80px;
        top: 50px;
        right: 70px;
        transform: rotate(-15deg);
      }
      #spot6 {
        width: 150px;
        height: 180px;
        border-radius: 150px / 180px;
        top: 400px;
        right: 20px;
        transform: rotate(10deg);
      }
      #spot7 {
        width: 60px;
        height: 80px;
        border-radius: 60px / 80px;
        top: 580px;
        right: 180px;
        transform: rotate(25deg);
      }
      #face {
        position: relative;
        width: 600px;
        margin: 0 auto;
        transform: scale(1, 1);
      }
      #eyes {
        width: 540px;
        margin: 0 auto;
        position: relative;
        top: 100px;
      }
      .lash {
        border: 7px solid black;
        background-color: black;
        width: 0px;
        height: 100px;
      }
      #leftlash1 {
        position: absolute;
        top: -30px;
        left: 80px;
        transform: rotate(-35deg);
      }
      #leftlash2 {
        position: absolute;
        top: -40px;
        left: 125px;
        transform: rotate(0deg);
      }
      #leftlash3 {
        position: absolute;
        top: -30px;
        left: 170px;
        transform: rotate(35deg);
      }
      #rightlash1 {
        position: absolute;
        top: -30px;
        right: 170px;
        transform: rotate(-35deg);
      }
      #rightlash2 {
        position: absolute;
        top: -40px;
        right: 125px;
        transform: rotate(0deg);
      }
      #rightlash3 {
        position: absolute;
        top: -30px;
        right: 80px;
        transform: rotate(35deg);
      }
    .eye {
        overflow: hidden;
        border: 10px solid black;
        background-color: white;
        width: 250px;
        height: 250px;
        border-radius: 100%;
      }
      #lefteye {
        position: absolute;
        left: 0;
      }
      #righteye {
        position: absolute;
        right: 0;
      }
      .iris {
        transition: all 0.1s ease-in-out;
        border: 10px solid black;
        background-color: #48CAFE;
        width: 100px;
        height: 100px;
        border-radius: 100%;
      }
      #leftiris {
        position: absolute;
        right: 30px;
        top: 60px;
      }
      #leftiris:hover {
        right: 0px;
      }
    #rightiris{
      position:absolute;
      left:30px;
      top:60px;
    }
    #rightiris:hover{
      left:0px;
    }
      .pupil {
        border: 10px solid black;
        background-color: black;
        width: 50px;
        height: 50px;
        position: absolute;
        left: 15px;
        top: 15px;
        border-radius: 50%;
      }
      #nose {
        border-width: 10px 10px 0 10px;
        border-style: solid;
        border-color: rgb(0, 0, 0);
        position: absolute;
        top: 240px;
        left: calc(50% - 50px);
        width: 100px;
        height: 150px;
        border-radius: 50% 50% 60% 60%;
        background-color:yellow;
      }
      .cheek {
        border-width: 10px 10px 0 10px;
        border-style: solid;
        border-color: rgb(231, 45, 22);
        width: 100px;
        height: 90px;
        border-radius: 50%;
        background-image: 
        radial-gradient(6px at 75px 25px, rgb(231, 45, 22) 0%, 
        rgb(231, 45, 22) 100%, transparent),
        radial-gradient(6px at 50px 50px, rgb(231, 45, 22) 0%, 
        rgb(231, 45, 22) 100%, transparent),
        radial-gradient(6px at 25px 25px, rgb(231, 45, 22) 0%, 
        rgb(231, 45, 22) 100%, transparent);
      }
      #leftcheek {
        position: absolute;
        background-color: yellow;
        top: 300px;
        left: 20px;
        transform: rotate(-25deg);
      }
      #rightcheek {
        position: absolute;
        background-color: yellow;
        top: 300px;
        right: 20px;
        transform: rotate(25deg);
      }
      #mouth {
        z-index:1;
        transition: all 0.2s ease-in-out;
        overflow: hidden;
        background-color: rgb(77, 0, 10);
        position: absolute;
        top: 380px;
        left: calc(50% - 225px);
        width: 450px;
        height: 200px;
        border:10px solid rgb(0, 0, 0);
        border-radius: 0 0 30% 30%;
        background-image:
        radial-gradient(55px at 245px 200px, rgb(248, 158, 167) 0%, 
        rgb(248, 158, 167) 100%,  transparent),
        radial-gradient(60px at 195px 200px, rgb(248, 158, 167) 0%, 
        rgb(248, 158, 167) 90%, #000 91%, #000 100%, transparent),
        radial-gradient(60px at 245px 200px, rgb(248, 158, 167) 0%, 
        rgb(248, 158, 167) 90%, #000 91%, #000 100%, transparent)
          }
      #mouth:hover {
        height: 0px;
      }
      .tooth {
        border:10px solid rgb(0,0,0);
        background-color: rgb(255, 255, 255);
        width: 70px;
        height: 80px;
      }
      #lefttooth {
        position: absolute;
        top: -20px;
        left: 125px;
        transform: rotate(2deg);
      }
      #righttooth {
        position: absolute;
        top: -20px;
        right: 125px;
        transform: rotate(-2deg);
      }
    `
    let buttonHidden = document.getElementById("button-hidden")
    let buttonShow = document.getElementById("button-show")
    let buttonSpeed = $("[id=speed]")
    let codeContent = document.getElementById("code")

    buttonHidden.onclick = function () {
        $(buttonShow).removeClass('hidden')
        $(codeContent).addClass("hidden")
        $(buttonHidden).addClass('hidden')
        buttonSpeed.addClass('hidden')
        console.log(buttonSpeed)
    }
    buttonShow.onclick = function () {
        $(buttonShow).addClass('hidden')
        $(codeContent).removeClass("hidden")
        $(buttonHidden).removeClass('hidden')
        buttonSpeed.removeClass('hidden')
    }
    writeCode('', code)
}.call()