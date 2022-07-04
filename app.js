const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://covid-193.p.rapidapi.com/statistics",
    "method": "GET",
    "headers": {
        "X-RapidAPI-Key": "e64dcfbb5bmshe24852b4e925a16p1783f2jsn9bb53723b237",
        "X-RapidAPI-Host": "covid-193.p.rapidapi.com"
    }
};

$.when(
    $.ajax(settings),
    $.ajax({ url: "https://api.covid19api.com/summary", method: "GET" }),
)
    .done(function (res1, res2) {
        console.log(res1[0].response);
        console.log(res2[0].Countries);

        var active;
        var recovered;
        var deaths;
        var newCases;

        for (var i = 0; i < res1[0].response.length; i++) {

            active = nullToZero(res1[0].response[i].cases.active);
            recovered = nullToZero(res1[0].response[i].cases.recovered);
            deaths = nullToZero(res1[0].response[i].deaths.total);
            newCases = 0;

            for (var j = 0; j < res2[0].Countries.length; j++) {
                if (res1[0].response[i].country === res2[0].Countries[j].Country)
                    newCases = res2[0].Countries[j].NewConfirmed;
            }


            $('#tbody').append(`<tr>
                <td>${res1[0].response[i].country}</td>
                <td>${res1[0].response[i].cases.total}</td>
                <td>${active}</td>
                <td>${recovered}</td>
                <td>${deaths}</td>
                <td>${newCases}</td>
                </tr>`);


            /* var data = res.response.map(function (dat) {
            
                var active = nullToZero(dat.cases.active);
                var recovered = nullToZero(dat.cases.recovered);
                var deaths = nullToZero(dat.deaths.total);
                $('#tbody').append(`<tr>
                    <td>${dat.country}</td>
                    <td>${dat.cases.total}</td>
                    <td>${active}</td>
                    <td>${recovered}</td>
                    <td>${deaths}</td>
                    </tr>`);
            }) */
        }
        $('#covidtable').DataTable();
    });

function nullToZero(n) {
    if (n == null)
        return 0;
    else
        return n;
}