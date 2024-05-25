function greetAlaa() {
    document.getElementById("output1").innerHTML = "Hello Alaa"; // Use innerHTML
}

function calculateAndDisplay() {
    document.getElementById("output2").innerHTML = 5 + 10; // Use innerHTML
}

function showAlert() {
    alert(5 + 10); // Perform calculation, then alert the result
}

function consoleOutput() {
    console.log(5 + 10);
}

function mathCalculation1() {
    var x, y, z;
    x = 2;
    y = 10;
    z = 100;
    let result = (x * y) / z;
    document.getElementById("math1").innerHTML = result;

}

function mathCalculation2() {
    var x, y, z;
    x = 10;
    y = 2;
    z = 12;
    let result = (x / y) * 5 / z + 20;
    document.getElementById("math2").innerHTML = result;
    document.write(result);
}
function arthmetic5items() {
    let result = (5 * 45) / (58 + 100) - 10;
    document.getElementById("math3").innerHTML = result;

}

function mobileproducts() {
    const product = {
        productname: "samsung",
        productprice: 2000,
        productmodel: 2024,
        productcountry: "china"
    };

    let name = product.productname;
    let price = product.productprice;
    let model = product.productmodel;
    let country = product.productcountry;

    document.getElementById("products").innerHTML = name + " <br>" + price + "<br> " + model + " <br>" + country;
}
