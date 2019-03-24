!function () {
    let duration = 10
    let id
    $('.actions').on('click','button',function(e){
        let $button = $(e.currentTarget)//获得当前点击的按钮是那一个
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
            // container.innerHTML = code.substring(0,n)
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
        width: 15vh;
        height: 25vh;
        border-radius: 15vh / 25vh;
        top: 3vh;
        left: 5vh;
        transform: rotate(-15deg);
      }
      #spot2 {
        width: 7.5vh;
        height: 12.5vh;
        border-radius: 7.5vh / 12.5vh;
        top: 38vh;
        left: 15vh;
        transform: rotate(-15deg);
      }
       #spot3 {
        width: 15vh;
        height: 22.5vh;
        border-radius: 15vh / 22.5vh;
        top: 75vh;
        left: 30vh;
        transform: rotate(5deg);
      }
      #spot4 {
        width: 7.5vh;
        height: 12.5vh;
        border-radius: 7.5vh / 12.5vh;
        top: 60vh;
        left: 2.5vh;
        transform: rotate(0deg);
      }
      #spot5 {
        width: 5vh;
        height: 10vh;
        border-radius: 5vh / 10vh;
        top: 6vh;
        right: 9vh;
        transform: rotate(-15deg);
      }
      #spot6 {
        width: 20vh;
        height: 25vh;
        border-radius: 20vh / 25vh;
        top: 50vh;
        right: 2.5vh;
        transform: rotate(10deg);
      }
      #spot7 {
        width: 7.5vh;
        height: 10vh;
        border-radius: 7.5vh / 10vh;
        top: 75vh;
        right: 25vh;
        transform: rotate(25deg);
      }
      #face {
        position: relative;
        width: 75vh;
        margin: 0 auto;
        transform: scale(1, 1);
      }
      #eyes {
        width: 67.5vh;
        margin: 0 auto;
        position: relative;
        top: 12.5vh;
        border:1px solid red;
      }
      .lash {
        border: 0.875vh solid black;
        background-color: black;
        width: 0px;
        height: 12.5vh;
      }
      #leftlash1 {
        position: absolute;
        top: -4.25vh;
        left: 10vh;
        transform: rotate(-35deg);
      }
      #leftlash2 {
        position: absolute;
        top: -5vh;
        left: 15.625vh;
        transform: rotate(0deg);
      }
      #leftlash3 {
        position: absolute;
        top: -4.25vh;
        left: 21.25vh;
        transform: rotate(35deg);
      }
      #rightlash1 {
        position: absolute;
        top: -4.25vh;
        right: 21.25vh;
        transform: rotate(-35deg);
      }
      #rightlash2 {
        position: absolute;
        top: -5vh;
        right: 15.625vh;
        transform: rotate(0deg);
      }
      #rightlash3 {
        position: absolute;
        top: -4.25vh;
        right: 10vh;
        transform: rotate(35deg);
      }
    .eye {
        overflow: hidden;
        border: 1.25vh solid black;
        background-color: white;
        width: 31.25vh;
        height: 31.25vh;
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
        border: 1.25vh solid black;
        background-color: #48CAFE;
        width: 12.5vh;
        height: 12.5vh;
        border-radius: 100%;
      }
      #leftiris {
        position: absolute;
        right: 4.25vh;
        top: 8.5vh;
      }
      #leftiris:hover {
        right: 0vh;
      }
    #rightiris{
      position:absolute;
      left:4.25vh;
      top:8.5vh;
    }
    #rightiris:hover{
      left:0vh;
    }
      .pupil {
        border: 1.25vh solid black;
        background-color: black;
        width: 6.25vh;
        height: 6.25vh;
        position: absolute;
        left: 2vh;
        top: 2vh;
        border-radius: 100%;
      }
      #nose {
        border-width: 1.25vh 1.25vh 0 1.25vh;
        border-style: solid;
        border-color: rgb(0, 0, 0);
        position: absolute;
        top: 30vh;
        left: calc(50% - 6.25vh);
        width: 12.5vh;
        height: 18.75vh;
        border-radius: 50% 50% 60% 60%;
        background-color:yellow;
      }
      .cheek {
        border-width: 1.25vh 1.25vh 0 1.25vh;
        border-style: solid;
        border-color: rgb(231, 45, 22);
        width: 12.5vh;
        height: 11.25vh;
        border-radius: 50%;
        background-image: 
        radial-gradient(0.75vh at 9.375vh 3.125vh, rgb(231, 45, 22) 0%, 
        rgb(231, 45, 22) 100%, transparent),
        radial-gradient(0.75vh at 6.25vh 6.25vh, rgb(231, 45, 22) 0%, 
        rgb(231, 45, 22) 100%, transparent),
        radial-gradient(0.75vh at 3.125vh 3.125vh, rgb(231, 45, 22) 0%, 
        rgb(231, 45, 22) 100%, transparent);
      }
      #leftcheek {
        position: absolute;
        background-color: yellow;
        top: 37.5vh;
        left: 2.5vh;
        transform: rotate(-25deg);
      }
      #rightcheek {
        position: absolute;
        background-color: yellow;
        top: 37.5vh;
        right: 2.5vh;
        transform: rotate(25deg);
      }
      #mouth {
        z-index:1;
        transition: all 0.2s ease-in-out;
        overflow: hidden;
        background-color: rgb(77, 0, 10);
        position: absolute;
        top: 47.5vh;
        left: calc(50% - 28.125vh);
        width: 56.25vh;
        height: 25vh;
        border:1.25vh solid rgb(0, 0, 0);
        border-radius: 0 0 30% 30%;
        background-image:
        radial-gradient(6.875vh at 30.625vh 25vh, rgb(248, 158, 167) 0%, 
        rgb(248, 158, 167) 100%,  transparent),
        radial-gradient(7.5vh at 24.375vh 25vh, rgb(248, 158, 167) 0%, 
        rgb(248, 158, 167) 90%, #000 91%, #000 100%, transparent),
        radial-gradient(7.5vh at 30.625vh 25vh, rgb(248, 158, 167) 0%, 
        rgb(248, 158, 167) 90%, #000 91%, #000 100%, transparent)
          }
      #mouth:hover {
        height: 0px;
      }
      .tooth {
        border:1.25vh solid rgb(0,0,0);
        background-color: rgb(255, 255, 255);
        width: 8.75vh;
        height: 10vh;
      }
      #lefttooth {
        position: absolute;
        top: -2.5vh;
        left: 15.625vh;
        transform: rotate(2deg);
      }
      #righttooth {
        position: absolute;
        top: -2.5vh;
        right: 15.625vh;
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