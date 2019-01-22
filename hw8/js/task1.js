var data = [];

function start() {
    butSelect();
}

function butSelect() {
    clearTableData();
    if (Select()) {
        upDataToTable(data);
    }
}

function butCount() {
    var count = Count();
    if (count != -1)
        show("Count of Airports = " + count, true);
}

function butExpand()
{
    clearTableData();
    if (getInfoWithExpand()) {
        upDataToTable(data);
    }
}

function butOrderBy()
{
    clearTableData();
    if (OrderBy()) {
        upDataToTable(data);
    }
}

function butSearch()
{
    clearTableData();
    if (Search()) {
        upDataToTable(data);
    }
}

function butSkip()
{
    clearTableData();
    if (Skip()) {
        upDataToTable(data);
    }
}

function butTop()
{
    clearTableData();
    if (Top()) {
        upDataToTable(data);
    }
}

function butFilter()
{
    clearTableData();
    if (Filter()) {
        upDataToTable(data);
    }
}

function Select() {

    var resRequest = false;
    $.ajax({
        type: "get",
        async: false,
        url: "https://services.odata.org/V4/(S(4idfi5ct034lf3uarchiewav))/TripPinServiceRW/Airports?$select=Name,Location&&$top=7&&$orderby=Name",
        success: function (_data) {
            data = _data.value;
            show("GET - Load data sucsess");
            resRequest = true;
        },
        error: function (xhr, textStatus, errorMessage) {
            show("ERROR: " + errorMessage);
        }
    });
    return resRequest;
}

function Count() {

    var count = -1;
    $.ajax({
        type: "get",
        async: false,
        url: "https://services.odata.org/V4/TripPinServiceRW/Airports/$count",
        success: function (_data) {
            show("GET - Load data COUNT sucsess");
            count = _data;
        },
        error: function (xhr, textStatus, errorMessage) {
            show("ERROR: " + errorMessage);
        }
    });
    return count;
}

function getInfoWithExpand() {

    var resRequest = false;
    $.ajax({
        type: "get",
        async: false,
        url: "https://services.odata.org/V4/(S(4idfi5ct034lf3uarchiewav))/TripPinServiceRW/Airports&&$expand=IcaoCode",
        success: function (_data) {
            data = _data.value;
            show("GET - Load data sucsess");
            resRequest = true;
        },
        error: function (xhr, textStatus, errorMessage) {
            show("ERROR: " + errorMessage);
        }
    });
    return resRequest;
}

function OrderBy() {

    var resRequest = false;
    $.ajax({
        type: "get",
        async: false,
        url: "https://services.odata.org/V4/(S(4idfi5ct034lf3uarchiewav))/TripPinServiceRW/Airports?$orderby=Name",
        success: function (_data) {
            data = _data.value;
            show("GET - Load data sucsess");
            resRequest = true;
        },
        error: function (xhr, textStatus, errorMessage) {
            show("ERROR: " + errorMessage);
        }
    });
    return resRequest;
}

function Search() {

    var resRequest = false;
    $.ajax({
        type: "get",
        async: false,
        url: "https://services.odata.org/V4/(S(4idfi5ct034lf3uarchiewav))/TripPinServiceRW/Airports?$search=Sydney",
        success: function (_data) {
            data = _data.value;
            show("GET - Load data sucsess");
            resRequest = true;
        },
        error: function (xhr, textStatus, errorMessage) {
            show("ERROR: " + errorMessage);
        }
    });
    return resRequest;
}

function Skip() {

    var resRequest = false;
    $.ajax({
        type: "get",
        async: false,
        url: "https://services.odata.org/V4/(S(4idfi5ct034lf3uarchiewav))/TripPinServiceRW/Airports?$skip=11",
        success: function (_data) {
            data = _data.value;
            show("GET - Load data sucsess");
            resRequest = true;
        },
        error: function (xhr, textStatus, errorMessage) {
            show("ERROR: " + errorMessage);
        }
    });
    return resRequest;
}

function Top() {

    var resRequest = false;
    $.ajax({
        type: "get",
        async: false,
        url: "https://services.odata.org/V4/(S(4idfi5ct034lf3uarchiewav))/TripPinServiceRW/Airports?$top=7",
        success: function (_data) {
            data = _data.value;
            show("GET - Load data sucsess");
            resRequest = true;
        },
        error: function (xhr, textStatus, errorMessage) {
            show("ERROR: " + errorMessage);
        }
    });
    return resRequest;
}

function Filter() {

    var resRequest = false;
    $.ajax({
        type: "get",
        async: false,
        url: "https://services.odata.org/V4/(S(4idfi5ct034lf3uarchiewav))/TripPinServiceRW/Airports?$filter=startswith(Name, 'Rome') or startswith(Name, 'Los') or startswith(Name, 'Beijing')",
        success: function (_data) {
            data = _data.value;
            show("GET - Load data sucsess");
            resRequest = true;
        },
        error: function (xhr, textStatus, errorMessage) {
            show("ERROR: " + errorMessage);
        }
    });
    return resRequest;
}

function upDataToTable(_data) {
    var table = document.getElementById("table-data");
    for (var i = 0; i < _data.length; i++)
        table.appendChild(getRowToDataTable(_data[i]));

}

function getRowToDataTable(dataElement) {
    var row = document.createElement("tr");
    row.appendChild(getTD(dataElement.Name));
    row.appendChild(getTD(dataElement.Location.Address));

    return row;
}

function getTD(value) {
    var td = document.createElement("td");
    td.innerHTML = value;
    return td;
}


function show(value, isAlert) {
    if (!isAlert) {
        console.log(value);
    } else {
        alert(value);
    }
}

function clearTableData() {
    var table = document.getElementById("table-data");

    while (table.childElementCount != 2) {
        table.removeChild(table.lastChild);
    }
}