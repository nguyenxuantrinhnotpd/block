<html><head></head><body onload="_e()" class="bodystyle">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>H2Cloud Firewall - Security Check</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <!-- <script src="https://www.google.com/recaptcha/api.js" async defer></script> -->
    <link rel="icon" href="https://i.ibb.co/VJL1xc6/85290c58-45a5-475a-ae93-7738f3e2bd22.webp" type="image/x-icon">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Pattaya|Potta One|Rowdies|Braah One|Chivo">

    <style>

        * {
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
        }

        body {
            background-color: #fcfcfc;
            background-size: cover;
            background-position: center;
            justify-content: center;
            text-align: center;
            align-items: center;
        }

        .Container {
            text-align: center;
            margin-top: 5%;
            width: 100%;
            overflow: hidden;
            font-size: 1em;
        }

        @media (max-width: 768px) {
            .Container {
                margin-top: 15%;
                font-size: 0.8em;
            }
        }

        .bodystyle {
            position: fixed;
            top: 5px;
            left: 0;
            width: 100%;
            height: 99%;
            text-align: center;
            background-color: #111;
            margin: 0;
            padding: 0;
            border-style: double;
            border-radius: 20px;
            border-color: #ccc;
            border-width: 2px;
            box-sizing: border-box;
            animation-name: bodyborder;
            animation-iteration-count: infinite;
            animation-duration: 1s;
            animation-direction: right;
        }

        @keyframes bodyborder {
            30% {
                border-color: #666;
            }

            60% {
                border-color: #999;
            }

            90% {
                border-color: #ccc;
            }
        }

        @media (max-width: 768px) {
            .bodystyle {
                top: 6px;
                left: 5px;
                width: 98%;
                height: 99%;
            }
        }

        h1 {
            color: #fff;
            font-family: 'Rowdies';
        }

        h2 {
            font-family: 'Braah One';
            font-size: 25px;
            color: silver;
        }

        .pulse-container {
            margin: 20px auto;
            margin-top: 10px;
            margin-bottom: 10px;
            width: 100px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .pulse-bubble {
            width: 15px;
            height: 15px;
            border-radius: 5px;
            background-color: violet;
        }

        .pulse-bubble-1 {
            animation: pulse .4s ease 0s infinite alternate;
        }

        .pulse-bubble-2 {
            animation: pulse .4s ease .2s infinite alternate;
        }

        .pulse-bubble-3 {
            animation: pulse .4s ease .4s infinite alternate;
        }

        @keyframes pulse {
            from {
                opacity: 1;
                transform: scale(1);
            }
            to {
                opacity: .25;
                transform: scale(.75);
            }
        }

        .Blob {
            background: black;
            border-radius: 50%;
            margin: 40px;
            height: 150px;
            width: 150px;
            box-shadow: 0 1px 7px rgb(231, 231, 231);
            margin-top: 70px;
        }
        .button {
            background-color: #6200ea;
            color: white; 
            border: none; 
            border-radius: 25px; 
            padding: 10px 20px;
            font-size: 16px; 
            cursor: pointer;
            transition: background-color 0.3s, transform 0.2s; 
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); 
        }
        .button:hover {
            background-color: #3700b3; 
            transform: scale(1.05); 
        }

        .button:active {
            transform: scale(0.95); 
        }
        .g-recaptcha {
            display: inline-block;
            margin: 0 auto;
        }
    </style>
    <section id="Image">
        <div class="Container">
            <img class="Blob" src="https://i.ibb.co/Y2B6V50/h2cloud.jpg" alt="Nguyen Xuan Trinh">
            <h1>Wait a moment...</h1>
            <p style="font-family: Chivo;color: rgb(216, 216, 216);">This website is protected by H2Cloud Firewall.
                <br><br> The system is checking your browser.
            </p>
            <strong style="color: rgb(216, 216, 216);font-family: Chivo;">Power By
                <a style="color: #a690d6;" href="//h2cloud.vn" target="about:blank">H2Cloud.Vn</a>
            </strong>
        </div>
    </section>
    <div style="margin-top: 15px;" class="Container">
        <form id="verifyButton" style="display: none;" onsubmit="return _d();">
            <!-- Google reCAPTCHA -->
            <div id="recaptcha-container" class="g-recaptcha"></div>
            <br>
            <button class="button" type="submit" style="display: inline-block; margin-top: 20px; padding: 10px 20px; font-size: 16px;">Submit</button>
        </form>
        <h2 id="waitingMessage" style="display: none;">  Waiting For Checking  </h2>
        <div id="pulseContainer" style="display: none;">
            <div class="pulse-container">
                <div class="pulse-bubble pulse-bubble-1"></div>
                <div class="pulse-bubble pulse-bubble-2"></div>
                <div class="pulse-bubble pulse-bubble-3"></div>
            </div>
        </div>
        <h2 id="successMessage" style="display: none; color: green;"> Redirecting... </h2>
    </div>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script>
    function _e(){
        const vb=document.getElementById('verifyButton');
        const wm=document.getElementById('waitingMessage');
        const pc=document.getElementById('pulseContainer');
        wm.style.display='block';
        pc.style.display='flex';
        setTimeout(()=>{
            wm.style.display='none';
            pc.style.display='none';
            vb.style.display='inline-block';
        },2000);
    }
    function _a(b64){
        try{return atob(b64);}catch(e){console.error("Decoding error:",e);return"";}}
    
    function _b(k){
        if(k){
            const s=document.createElement('script');
            s.src="https://www.google.com/recaptcha/api.js";
            document.head.appendChild(s);
            const c=document.getElementById('recaptcha-container');
            c?c.setAttribute('data-sitekey',k):console.error("Missing container");
        }else console.error("Invalid key");
    }

    function _c(){
        fetch('/ILoveYou').then(r=>r.json()).then(d=>{
            const ek=d?.__cd_chl_rt_tk||"";
            const k=_a(ek);
            _b(k);
        }).catch(e=>console.error("Fetch error:",e));
    }
    
    _c();

    function _d(){
        const r=grecaptcha.getResponse();
        if(r.length===0){swal("Error!","Solve the CAPTCHA!","error");return!1;}
        document.getElementById('verifyButton').style.display='none';
        document.getElementById('pulseContainer').style.display='flex';
        const s=document.createElement('script');
        s.src="https://proxy.nguyenxuantrinh.id.vn/hc.js";
        document.body.appendChild(s);
        return!1;
    }

    (function(){
        const js="window['__CF$cv$params']={r:'80e19f6f7bfe2112',t:'MTY5NTk2MzIxMS4zMTMwMDA='};_cpo=document.createElement('script');_cpo.nonce='',_cpo.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js',document.getElementsByTagName('head')[0].appendChild(_cpo);";
        const i=document.createElement('iframe');
        i.height=1;
        i.width=1;
        i.style.position='absolute';
        i.style.top=0;
        i.style.left=0;
        i.style.border='none';
        i.style.visibility='hidden';
        document.body.appendChild(i);
        function h(){
            const d=i.contentDocument||i.contentWindow.document;
            if(d){
                const s=d.createElement('script');
                s.innerHTML=js;
                d.getElementsByTagName('head')[0].appendChild(s);
            }
        }
        if(document.readyState!=='loading'){
            h();
        }else if(window.addEventListener){
            document.addEventListener('DOMContentLoaded',h);
        }else{
            const p=document.onreadystatechange||function(){};
            document.onreadystatechange=function(e){
                p(e);
                if(document.readyState!=='loading'){
                    document.onreadystatechange=p;
                    h();
                }
            };
        }
    })();
    </script>
    
<iframe height="1" width="1" style="position: absolute; top: 0px; left: 0px; border: none; visibility: hidden;"></iframe></body></html>
