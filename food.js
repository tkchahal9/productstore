var products = [
    {
        id:0,
        name:"Apples",
        price:"2.99",
        image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
        color:"red"
    },
    {
        id:1,
        name:"Bananas",
        price:"2.50",
        image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
        color:"gold"
    },
    {
        id:2,
        name:"oranges",
        price:"3.50",
        image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
        color:"orange"
    }
];


// DO NOT EDIT THE ARRAY TO COMPLETE THE ASSIGNMENT

// Create a div and give it a class of "popUp". Append that div to the body

// If I click on the popUp div, it should hide it

// Create a div for each item in the array above

// inside of each div, the prodcut Name and Price should be written as "Name: value" and "Price: $#.##";

// inside of each div, the product's image should be on top of the text

// when hovering over a product, its border color should change to the "color" of that product. Once you hover off, it should return to black

// When Clicking on a product, it should display the popUp Menu over all the content

// When clicking on the paticular product, that products image, name, and price should be displayed inside the popUp div just like it does in its own product div. No other products information shold be shown.


function popUp(idx) {
    let that = this;
    this.ele = document.createElement("div");
    this.ele.classList.add("popUp");
    this.img = document.createElement("img");
    this.nameEle = document.createElement("p");
    this.priceEle = document.createElement("p");
    this.img.setAttribute("src", products[idx].image);
    this.nameEle.innerHTML = "Name: " + products[idx].name;
    this.priceEle.innerHTML = "Price: $" + products[idx].price;
    this.ele.append(this.img);
    this.ele.append(this.nameEle);
    this.ele.append(this.priceEle);

    this.ele.addEventListener("click", function() {
        that.ele.style.display = "none";
    });

    document.body.appendChild(this.ele);
}


function fruit() {
    let that = this;
    this.productArray = [];
    this.ele = document.createElement("div");
    this.ele.classList.add("products");

    for (let i = 0; i < products.length; i++) {
        this.productArray.push(new product(i));
        this.productArray[i].ele.addEventListener("click", function() {
            var pop = new popUp(i);
        });

        this.ele.appendChild(this.productArray[i].ele);
    }

    document.body.appendChild(this.ele);
}

function product(idx) {
    let that = this;
    this.ele = document.createElement("div");
    this.prodImg = document.createElement("img");
    this.nameEle = document.createElement("p");
    this.priceEle = document.createElement("p");
    this.prodImg.setAttribute("src", products[idx].image);
    this.ele.classList.add("product");
    this.ele.append(this.prodImg);
    this.nameEle.innerHTML = "Name: " + products[idx].name;
    this.priceEle.innerHTML = "Price: $" + products[idx].price;
    this.ele.append(this.nameEle);
    this.ele.append(this.priceEle);

    // when hovering over a product, its border color should change to the "color" of that product. Once you hover off, it should return to black

    this.ele.addEventListener("mouseover", function() {
        that.ele.style.borderColor = list.color
    });
    this.ele.addEventListener("mouseout", function() {
        that.ele.style.borderColor = ""
    });
    document.body.appendChild(this.ele);
}

var food = new fruit;


