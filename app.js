$(() => {
    ///Thor Stats
    $.ajax({
        url: 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=187c414f1f1e4d077498e7946b51406c&hash=0041ac5fd25fe417201b1259bcedacac&name=Thor',
    }).then(
        (data) => {
            console.log(data);
            console.log(data.data.results[0].name);
            console.log(data.data.results[0].description);
        },
        (error) => {
            console.log('ERROR');
        }
    )
    ///Iron Man Stats
    $.ajax({
        url: 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=187c414f1f1e4d077498e7946b51406c&hash=0041ac5fd25fe417201b1259bcedacac&name=Iron man',
    }).then(
        (data) => {
            console.log(data);
            console.log(data.data.results[0].name);
            console.log(data.data.results[0].description);
        },
        (error) => {
            console.log('ERROR');
        }
    )
    /// Captain America Stats
    $.ajax({
        url: 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=187c414f1f1e4d077498e7946b51406c&hash=0041ac5fd25fe417201b1259bcedacac&name=Captain America',
    }).then(
        (data) => {
            console.log(data);
            console.log(data.data.results[0].name);
            console.log(data.data.results[0].description);
        },
        (error) => {
            console.log('ERROR');
        }
    )
    /// Spider-Man Stats
    $.ajax({
        url: 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=187c414f1f1e4d077498e7946b51406c&hash=0041ac5fd25fe417201b1259bcedacac&name=Spider-Man',
    }).then(
        (data) => {
            console.log(data);
            console.log(data.data.results[0].name);
            console.log(data.data.results[0].description);
        },
        (error) => {
            console.log('ERROR');
        }
    )
    /// Hulk Stats
    $.ajax({
        url: 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=187c414f1f1e4d077498e7946b51406c&hash=0041ac5fd25fe417201b1259bcedacac&name=Hulk',
    }).then(
        (data) => {
            console.log(data);
            console.log(data.data.results[0].name);
            console.log(data.data.results[0].description);
        },
        (error) => {
            console.log('ERROR');
        }
    )
    /// Black Widow
    $.ajax({
        url: 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=187c414f1f1e4d077498e7946b51406c&hash=0041ac5fd25fe417201b1259bcedacac&name=Black Widow',
    }).then(
        (data) => {
            console.log(data);
            console.log(data.data.results[0].name);
            console.log(data.data.results[0].description);
        },
        (error) => {
            console.log('ERROR');
        }
    )
    /// Dr.Strange Stats
    $.ajax({
        url: 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=187c414f1f1e4d077498e7946b51406c&hash=0041ac5fd25fe417201b1259bcedacac&name=Doctor Strange',
    }).then(
        (data) => {
            console.log(data);
            console.log(data.data.results[0].name);
            console.log(data.data.results[0].description);
        },
        (error) => {
            console.log('ERROR');
        }
    )
    /// Falcon Stats
    $.ajax({
        url: 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=187c414f1f1e4d077498e7946b51406c&hash=0041ac5fd25fe417201b1259bcedacac&name=Falcon',
    }).then(
        (data) => {
            console.log(data);
            console.log(data.data.results[0].name);
            console.log(data.data.results[0].description);
        },
        (error) => {
            console.log('ERROR');
        }
    )
    /// Hawkeye Stats
    $.ajax({
        url: 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=187c414f1f1e4d077498e7946b51406c&hash=0041ac5fd25fe417201b1259bcedacac&name=Hawkeye',
    }).then(
        (data) => {
            console.log(data);
            console.log(data.data.results[0].name);
            console.log(data.data.results[0].description);
        },
        (error) => {
            console.log('ERROR');
        }
    )
        //
        // Request Method: GET
        // Params: {
        //   "apikey": "your api key",
        //   "ts": "a timestamp",
        //   "hash": "your hash"
        // }
        // Headers: {
        //   Accept: */*





        // $.ajax({
        //             url: `https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=${numVar}&Borough=${userInput}&agency=NYPD`,
        //
        //         }).then(
        //             (data) => {
        //                 $('#listComplaints').empty();
        //                 for (let i = 0; i < data.length; i++) {
        //                     $('#listComplaints').append('<li>' + data[i].agency + data[i].borough + data[i].complaint_type + data[i].resolution_description + '</li>');
        //                 }
        //             },
        //             (error) => {
        //                     console.log(error);
        //             }
        //             )
        //     })



})
