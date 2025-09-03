for (var i = 1; i < product.length; i++) {
    document.getElementById("select1").innerHTML += `
    <option value="${i}">${product[i].Title}</option>
    `;
    document.getElementById("select2").innerHTML += `
    <option value="${i}">${product[i].Title}</option>
    `;
}

function item1(a) {
    var select2 = document.getElementById("select2").value;
    if (a != select2) {
        document.getElementById("img1").src = product[a].image
        document.getElementById("title1").innerHTML = "PKR " + product[a].Title
        document.getElementById("Battery1").innerHTML = product[a].Battery
        document.getElementById("Batteryfeatures1").innerHTML = product[a]["Battery features"]
        document.getElementById("warranty1").src = product[a]["Battery warranty"]
        document.getElementById("charging1").innerHTML = "PKR " + product[a]["charging time"]
        document.getElementById("Motor1").innerHTML = product[a].Motor
        document.getElementById("speed1").innerHTML = product[a]["Max speed"]
        document.getElementById("warrantyonelectronics1").src = product[a]["Warranty on electronics"]
        document.getElementById("Maxrange1").innerHTML = "PKR " + product[a]["Max range(@30km/h)"]
        document.getElementById("maxrange45").innerHTML = product[a]["Max range(@45km/h)"]
        document.getElementById("maxrangefullspeed1").innerHTML = product[a]["Max range(@full speed)"]
        document.getElementById("key1").src = product[a]["Other key benefits"]
    } else {
        document.getElementById("select1").selectedIndex = 0;
        document.getElementById("img1").src = product[0].image
        document.getElementById("title1").innerHTML = " "
        document.getElementById("Battery1").innerHTML = " "
        document.getElementById("Batteryfeatures1").innerHTML = " "
        document.getElementById("warranty1").src = ""
        document.getElementById("charging1").innerHTML = " "
        document.getElementById("Motor1").innerHTML = " "
        document.getElementById("speed1").innerHTML = " "
        document.getElementById("warrantyonelectronics1").src = " "
        document.getElementById("Maxrange1").innerHTML = " "
        document.getElementById("maxrange45").innerHTML = " "
        document.getElementById("maxrangefullspeed1").innerHTML = " "
        document.getElementById("key1").src = " "

    }
}

function item2(a) {
    var select1 = document.getElementById("select1").value;
    if (a != select1) {
        document.getElementById("img2").src = product[a].image
        document.getElementById("title2").innerHTML = "PKR " + product[a].Title
        document.getElementById("Battery2").innerHTML = product[a].Battery
        document.getElementById("Batteryfeatures2").innerHTML = product[a]["Battery features"]
        document.getElementById("warranty2").src = product[a]["Battery features"]
        document.getElementById("charging2").innerHTML = "PKR " + product[a]["charging time"]
        document.getElementById("Motor2").innerHTML = product[a].Motor
        document.getElementById("speed2").innerHTML = product[a]["Max speed"]
        document.getElementById("warrantyonelectronics2").src = product[a]["Warranty on electronics"]
        document.getElementById("Maxrange2").innerHTML = "PKR " + product[a]["Max range(@30km/h)"]
        document.getElementById("maxrange46").innerHTML = product[a]["Max range(@45km/h)"]
        document.getElementById("maxrangefullspeed2").innerHTML = product[a]["Max range(@full speed)"]
        document.getElementById("key2").src = product[a]["Other key benefits"]
    } else {
        document.getElementById("select2").selectedIndex = 0;
        document.getElementById("img2").src = product[0].image
        document.getElementById("title1").innerHTML = " "
        document.getElementById("Battery1").innerHTML = " "
        document.getElementById("Batteryfeatures1").innerHTML = " "
        document.getElementById("warranty1").src = ""
        document.getElementById("charging1").innerHTML = " "
        document.getElementById("Motor1").innerHTML = " "
        document.getElementById("speed1").innerHTML = " "
        document.getElementById("warrantyonelectronics1").src = " "
        document.getElementById("Maxrange1").innerHTML = " "
        document.getElementById("maxrange45").innerHTML = " "
        document.getElementById("maxrangefullspeed1").innerHTML = " "
        document.getElementById("key1").src = " "
    }
}