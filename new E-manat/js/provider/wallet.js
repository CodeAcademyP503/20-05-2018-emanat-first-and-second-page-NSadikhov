logoText={
    text:"E-pulqabı",
};
mainPart=[
    {
        src:"images/portmanat.png",
    },
    {
        src:"images/kassam.png",
    },
    {
        src:"images/yandex.png",
    },
    {
       src:"images/webmoney.png",
    },
    {
        src:"images/moneta.png",
    },
    {
        src:"images/qiwi.png",
    },
    
];

function createElement(tagName, className, src, parent) {
    let element = document.createElement(tagName);
    element.className = className;
    element.src = src;
    parent.appendChild(element);
    return element;
}

function drawHTML(){
    let container = createElement("div", "container", null, document.body);
    container.id = "containerId";
    let header = createElement("div", "header", null, container);
    let headLogoWallet=createElement("img","logoWallet","images/e-pulqabi.png",header);
    let h1=createElement("h1","h1",null,header);
    h1.innerText=logoText.text;
    let main = createElement("div", "main", null, container);
    let mainFlex=createElement("div","mainFlex",null,main);
    for(let i=0;i<mainPart.length;i++){
        let mainDiv=createElement("div","walletMainDiv",null,mainFlex);
        var mainImg=createElement("img","mainImg",mainPart[i].src,mainDiv);
    }
    let btn=createElement("button","btn",null,container);
    let btnImg=createElement("img","btnImg","images/home.png",btn);
    let btnH2=createElement("h2","btnH2",null,btn);
    btnH2.innerText="ANA SƏHİFƏ";
    btn.onclick=function(){
        document.location.href="index.html";
    }
}
drawHTML();