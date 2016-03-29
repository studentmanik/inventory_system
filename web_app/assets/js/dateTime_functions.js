function get_date_format(type) {
    var d = new Date();
    
    date = d.getDate();
    date = date < 10 ? "0" + date : date;

    mon = d.getMonth() + 1;
    mon = mon < 10 ? "0" + mon : mon;

    year = d.getFullYear()

    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();

    //alert(hr+'-'+min+'-'+sec);
    if (type == 'dateTime') {
        return (year + "-" + mon + "-" + date + " " + hr + ":" + min + ":" + sec);
    }
    else {
        //alert('returning');
        return (year + "-" + mon + "-" + date);
    }
}


