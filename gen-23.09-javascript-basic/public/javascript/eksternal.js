//page index.html
function myFunction1(){
    let img = document.querySelector("#container1 .card .front").src
    let namaProduct = document.querySelector("section #namaProduct1").innerText
    let harga = document.querySelector("section #harga1").innerText
    let desc = document.querySelector("section #desciption1").innerText
    let list = document.querySelectorAll("#list1 li")

    let arrayList = Array.from(list).map(function(item) {
        return item.textContent
    })

    localStorage.setItem('img', img)
    localStorage.setItem('namaProduct', namaProduct)
    localStorage.setItem('harga', harga)
    localStorage.setItem('desc', desc)
    localStorage.setItem('arrayList', JSON.stringify(arrayList));
    window.location.href = "./detailProduct.html"
}

function myFunction2(){
    let img = document.querySelector("#container2 .card .front").src
    let namaProduct = document.querySelector("section #namaProduct2").innerText
    let harga = document.querySelector("section #harga2").innerText
    let desc = document.querySelector("section #desciption2").innerText
    let list = document.querySelectorAll("#list2 li")

    let arrayList = Array.from(list).map(function(item) {
        return item.textContent
    })

    localStorage.setItem('img', img)
    localStorage.setItem('namaProduct', namaProduct)
    localStorage.setItem('harga', harga)
    localStorage.setItem('desc', desc)
    localStorage.setItem('arrayList', JSON.stringify(arrayList));
    window.location.href = "./detailProduct.html"
}

function myFunction3(){
    let img = document.querySelector("#container3 .card .front").src
    let namaProduct = document.querySelector("section #namaProduct3").innerText
    let harga = document.querySelector("section #harga3").innerText
    let desc = document.querySelector("section #desciption3").innerText
    let list = document.querySelectorAll("#list3 li")

    let arrayList = Array.from(list).map(function(item) {
        return item.textContent
    })

    localStorage.setItem('img', img)
    localStorage.setItem('namaProduct', namaProduct)
    localStorage.setItem('harga', harga)
    localStorage.setItem('desc', desc)
    localStorage.setItem('arrayList', JSON.stringify(arrayList));
    window.location.href = "./detailProduct.html"
}

function myFunction4(){
    let img = document.querySelector("#container4 .card .front").src
    let namaProduct = document.querySelector("section #namaProduct4").innerText
    let harga = document.querySelector("section #harga4").innerText
    let desc = document.querySelector("section #desciption4").innerText
    let list = document.querySelectorAll("#list4 li")

    let arrayList = Array.from(list).map(function(item) {
        return item.textContent
    })

    localStorage.setItem('img', img)
    localStorage.setItem('namaProduct', namaProduct)
    localStorage.setItem('harga', harga)
    localStorage.setItem('desc', desc)
    localStorage.setItem('arrayList', JSON.stringify(arrayList));
    window.location.href = "./detailProduct.html"
}



//page detailProduct.html
let product = localStorage.getItem('img')
let namaProduct = localStorage.getItem('namaProduct')
let harga = localStorage.getItem('harga')
let itemJson = localStorage.getItem('arrayList')
let item = JSON.parse(itemJson)
let desc = localStorage.getItem('desc')

document.getElementById('displayImgProduct').src = product
document.getElementById('namaProduct').innerText = namaProduct
document.getElementById('harga').innerText = harga
document.getElementById('desciption').innerText = desc

let list = document.getElementById('list')
for (i of item){
    let li = document.createElement('li')
    li.innerText = i
    list.appendChild(li)
}

document.getElementById("quantity").value = 0
function plusFunct(){
    document.getElementById("quantity").value++
}
function minFunct(){
    if (document.getElementById("quantity").value <= 0){
        document.getElementById("quantity").value = 0
    }else{
        document.getElementById("quantity").value--
    }
}

// let myProduct = document.getElementsByClassName("product");
// myProduct.addEventListener("click", goToAnotherPage);

// function goToAnotherPage(){
//     alert("hello");
// }
