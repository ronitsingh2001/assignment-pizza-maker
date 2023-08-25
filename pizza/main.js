const pizzaMain = document.getElementById("pizza-main")
const topping = document.getElementById("toppings")
const bases = document.getElementById("bases")
const ready = document.getElementById("ready")

const base1 = document.getElementById("base1")
const base2 = document.getElementById("base2")
const top1 = document.getElementById("top1")
const top2 = document.getElementById("top2")
const top3 = document.getElementById("top3")

const parentBase1 = document.getElementById("parent-base1")
const parentBase2 = document.getElementById("parent-base2")
const parentTop1 = document.getElementById("parent-top1")
const parentTop2 = document.getElementById("parent-top2")
const parentTop3 = document.getElementById("parent-top3")

function toggleMenu() {
    if (pizzaMain.children.length < 1) {
        bases.classList.add("visible")
        topping.classList.remove("visible")
    } else {
        topping.classList.add("visible")
        bases.classList.remove("visible")
        bases.classList.add("hidden")
    }

    if (pizzaMain.children.length > 3) {
        topping.classList.remove("visible")
        topping.classList.add("hidden")
        ready.classList.add("visible")
        ready.classList.add("bump")
    }
}

toggleMenu()

function events(ele, parentEle) {
    let selected = ele;
    ele.addEventListener("dragstart", function (e) {
        selected = e.target;
        // console.log('====================================');
        // console.log(ele);
        // console.log('====================================');
        pizzaMain.addEventListener("drop", function (e) {
            // console.log(e.target)
            pizzaMain.appendChild(selected)
            parentEle.classList.add("empty")
            pizzaMain.classList.add("empty")
            setTimeout(() => {
                pizzaMain.classList.remove("empty")
            }, 500);
            toggleMenu()
        })
        pizzaMain.addEventListener("dragover", function (e) {
            e.preventDefault()
        })
        ele.addEventListener("dragend", function (e) {
            selected = null;
        })
    })
}
// events(pizzaMain)
events(base1, parentBase1)
events(base2, parentBase2)
events(top1, parentTop1)
events(top2, parentTop2)
events(top3, parentTop3)