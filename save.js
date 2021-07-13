//图片展示
let butt = document.querySelectorAll(".butt")
let ims = document.querySelectorAll(".ims")
let ims2 = document.querySelectorAll(".ims2")
for (let i = 0; i < butt.length; i++) {
    butt[i].onclick = function() {
        ims[i].classList.add("ims1")
    }
    ims[i].onclick = function() {
        ims[i].classList.remove("ims1")
    }
    ims2[i].onclick = function() {
        ims2[i].src = "./img/ai (1).png"
    }

}
//留言处理
let bname = document.querySelector(".bname")
let liuyans = document.querySelector(".liuyans")
bname.onclick = function() {
        let nametext = document.querySelector(".nametext").value;
        let name = document.querySelector(".name").value;
        let divs = document.createElement("div");
        divs.innerHTML = "<img src='./img/好友申请.png'>" +
            "<div> <i>" + name + "</i>" +
            "<p>" + nametext + "</p>" +
            " </div>"
        liuyans.appendChild(divs)

    }
    //教育经历事件等
let td = document.querySelectorAll("td")
let xinxi = document.querySelectorAll(".xinxi1")

function clear() {
    for (let i = 0; i < td.length; i++) {
        td[i].className = "";
        xinxi[i].classList.remove("licons")
    }
}
for (let j = 0; j < td.length; j++) {
    td[j].onclick = function() {
        clear()
        td[j].className = "licon"
        xinxi[j].classList.add("licons")
    }
}