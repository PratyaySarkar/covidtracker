$.ajax({
    type: "GET",
    url: "https://api.covid19api.com/summary",
    success: function (res) {
        console.log(res);
        var data = res.Countries.map(function(dat) {
            $('#tbody').append(`<tr>
            <td>${dat.Country}</td>
            <td>${dat.TotalConfirmed}</td>
            <td>${dat.TotalDeaths}</td>
            <td>${dat.NewConfirmed}</td>
            <td>${dat.NewDeaths}</td>
            </tr>`);
        })

        $('#covidtable').DataTable();
        
    },
    error: function (err) {
        console.log(err);
    }
});