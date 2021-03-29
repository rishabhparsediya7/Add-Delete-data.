var args = [{
        firstname: "Abhinav",
        lastname: "Tiwari",
        mobile: "913145204"
    }, {
        firstname: "Nihar",
        lastname: "Gupta",
        mobile: "9752154909"
    }, {
        firstname: "Rashid",
        lastname: "Ali",
        mobile: "912930193"
    }, {
        firstname: "Neha",
        lastname: "Shrivastava",
        mobile: "8371910282"
    },
    {
        firstname: "Rishabh",
        lastname: "Parsediya",
        mobile: "7987567233",
    },
    {
        firstname: "Abhinav",
        lastname: "Tiwari",
        mobile: "913145204"
    },
    {
        firstname: "Nihar",
        lastname: "Gupta",
        mobile: "9752154909"
    },
    {
        firstname: "Rashid",
        lastname: "Ali",
        mobile: "912930193"
    },
    {
        firstname: "Neha",
        lastname: "Shrivastava",
        mobile: "8371910282"
    },
    {
        firstname: "Rishabh",
        lastname: "Parsediya",
        mobile: "7987567233"
    }
];

function addData() {

    var f = document.getElementById("fname").value;
    var l = document.getElementById("lname").value;
    var m = document.getElementById("mob").value;

    if (f == "" || l == "" || m == "") {
        alert("Please enter values first!");
    } else {
        var table = document.getElementById("myTable");
        var len = table.rows.length;
        console.log(len);
        var row = table.insertRow(len);
        var sno = row.insertCell(0);
        sno.id = "SNO";
        var firstname = row.insertCell(1);
        var lastname = row.insertCell(2);
        var mobile = row.insertCell(3);
        var updates = row.insertCell(4);
        var element1 = document.createElement("BUTTON");
        element1.type = "button";
        element1.id = "del" + len;
        element1.className = "btn btn-danger";
        element1.innerHTML = "Delete";
        element1.setAttribute("onclick", deleteMethod);
        element1.onclick = function() {

            deleteMethod();
        };

        updates.appendChild(element1);
        sno.innerHTML = table.rows.length - 1;
        firstname.innerHTML = f;
        lastname.innerHTML = l;
        mobile.innerHTML = m;
    }

}

function deleteMethod(index) {

    var index, table = document.getElementById('myTable');

    for (var i = 0; i < table.rows.length; i++) {
        table.rows[i].cells[4].onclick = function() {

            index = this.parentElement.rowIndex;
            table.deleteRow(index);
            console.log(index);
        };
    }
}