(() => {

    //Default Value
    (() => {
        let start = document.getElementById("start").value = 32;
        let end = document.getElementById("end").value = 1032;
        for (let i = start; i <= end; i++)document.getElementById("table").insertAdjacentHTML('beforeend', `<tr><td>${i - 32}</td><td>${String.fromCharCode(i)}</td><td>${i}</td></tr>`);

    })();

    (() => {
        document.getElementById("srchText").addEventListener('keyup', search);
        function search() {
            let input, filter, table, tr, td, txtValue, txtValue2, td2;
            input = document.getElementById("srchText");
            filter = input.value;
            table = document.getElementById("table");
            tr = table.getElementsByTagName("tr");
            for (let i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[1];
                if (td) {
                    txtValue = td.textContent || td.innerText;
                    td2 = tr[i].getElementsByTagName("td")[2];
                    txtValue2 = td2.textContent || td2.innerText;
                    ((txtValue.indexOf(filter) > -1) || (txtValue2.indexOf(filter) > -1)) ? tr[i].style.display = "" : tr[i].style.display = "none";
                }
            }
        }
    })();
    document.getElementById("start").addEventListener('keyup', setData);
    document.getElementById("end").addEventListener('keyup', setData);
    function setData() {
        let start = document.getElementById("start").value;
        let end = document.getElementById("end").value;
        let str = "<tr><th>Sr No.</th><th>Char</th><th>Unicode</th></tr>";
        let se = +start + +end;
        if (start < 0 || start == "") {
            str += "<tr><td colspan=3>Please Enter Valid Starting Value</td></tr>";
        }
        else if (end <= 0 || end == "") {
            str += "<tr><td colspan=3>Please Enter Valid Ending Value</td></tr>";
        }
        else if (start > 1114112) {
            str += "<tr><td colspan=3>Please Enter Valid Starting Value</td></tr>";
        }
        else {
            for (let i = 0; i < end; i++) {
                if ((+i + +start) > 1114112)
                    break;
                else {
                    str += `<tr><td>${i + 1}</td><td>${String.fromCharCode(+i + +start)}</td><td>${+i + +start}</td></tr>`;
                }
            }
        }
        document.getElementById("table").innerHTML = str;
    }
    document.getElementById("start").focus();
})();