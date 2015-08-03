$(document).ready(function () {
    var defaultLocations = function () {
        $("#ny-locations").empty();
        $("#nj-locations").empty();
        $("#zip").val("");

        var loc = new Locations();

        for (var i in loc.NY) {
            $("#ny-locations").append(GetAddrString(loc.NY[i]));
        };

        for (var j in loc.NJ) {
            $("#nj-locations").append(GetAddrString(loc.NJ[j]));
        };
    };
    defaultLocations();

    $("#zip").keydown(function (e) {

        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            // Allow: Ctrl+A, Command+A
            (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
            // let it happen, don't do anything
            return;
        }
        if (($("#zip").val().length > 4)) {
            e.preventDefault();
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });

    $("#resetLocations").on("click", function () {
        defaultLocations();
    });

    $("#zipSearch").on("click", function () {

        $("#ny-locations").empty();
        $("#nj-locations").empty();

        // Build url
        var zipcode = $("#zip").val();
        var distance = $("#distance").val();

        var searchLoc = new Locations();

        for (var i in searchLoc.NY) {
            for (var j in searchLoc.NY[i].lookUp) {
                if (searchLoc.NY[i].lookUp[j].zip_code == zipcode) {
                    if (searchLoc.NY[i].lookUp[j].distance <= distance) {
                        $("#ny-locations").append(GetAddrStringWithDistance(searchLoc.NY[i], searchLoc.NY[i].lookUp[j].distance));
                        break;
                    }
                }
            }
        };

        for (var a in searchLoc.NJ) {
            for (var b in searchLoc.NJ[a].lookUp) {
                if (searchLoc.NJ[a].lookUp[b].zip_code == zipcode) {
                    if (searchLoc.NJ[a].lookUp[b].distance <= distance) {
                        $("#nj-locations").append(GetAddrStringWithDistance(searchLoc.NJ[a], searchLoc.NJ[a].lookUp[b].distance));
                        break;
                    }
                }
            }
        };

    });
});

function GetAddrString(location) {
    var addr = 
    "<div class='col-md-3'><a href='" + location.href + 
    "'><h4><i class='fa fa-map-marker'></i>" + location.name + 
    "</h4></a><p>" + location.addr1 +
    "<br />" + location.addr2 +
    "<br /><span class='fa fa-phone'></span> " + location.phone + "</div>";

    return addr;
};//Print Addr Function

function GetAddrStringWithDistance(location,distance) {
    var addr =
    "<div class='col-md-3'><a href='" + location.href +
    "'><h4><i class='fa fa-map-marker'></i>" + location.name +
    "</h4></a><p>" + location.addr1 +
    "<br />" + location.addr2 +
    "<br /><span class='fa fa-phone'></span> " + location.phone +
    "<br/><span class='fa fa-car'> "+ (Math.round( distance * 10) / 10) +" miles away</span></div>";

    return addr;
};//Print Addr With Distance Function