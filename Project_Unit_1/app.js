$(() => {

    /// Start Button Starts Modal Sequence
    $('#startBtn').on('click', () => {
        $('#modal').css('display', 'block');
        $('#modal1').css('display', 'block');

        /// Strength Hero Question Tree
        $('#superStrBtn').on('click', () => {
            $('#modal1').css('display', 'none');
            $('#modal2').css('display', 'block');
            ///Answers taking them to strength hero pages
            $('#thorBtn').on('click', () => {
                $('body').empty();
                ///Thor Stats
                $.ajax({
                    url: 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=187c414f1f1e4d077498e7946b51406c&hash=0041ac5fd25fe417201b1259bcedacac&name=Thor',
                }).then(
                    (data) => {
                        console.log(data);
                        $('body').append('<h2> You are most like ' + data.data.results[0].name + '</h2>');
                        $('body').append('<h2>' + data.data.results[0].description + '</h2>');
                        $('body').append('<img src="' + data.data.results[0].thumbnail.path + "/landscape_incredible." + data.data.results[0].thumbnail.extension + '"/>')
                    },
                    (error) => {
                        console.log('ERROR');
                    }
                )
            })
            $('#capBtn').on('click', () => {
                $('body').empty();
                $.ajax({
                    url: 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=187c414f1f1e4d077498e7946b51406c&hash=0041ac5fd25fe417201b1259bcedacac&name=Captain America',
                }).then(
                    (data) => {
                        $('body').append('<h2> You are most like ' + data.data.results[0].name + '</h2>');
                        $('body').append('<h2>' + data.data.results[0].description + '</h2>');
                        $('body').append('<img src="' + data.data.results[0].thumbnail.path + "/landscape_incredible." + data.data.results[0].thumbnail.extension + '"/>')
                    },
                    (error) => {
                        console.log('ERROR');
                    }
                )
            })
            $('#hulkBtn').on('click', () => {
                $('body').empty();
                $.ajax({
                    url: 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=187c414f1f1e4d077498e7946b51406c&hash=0041ac5fd25fe417201b1259bcedacac&name=Hulk',
                }).then(
                    (data) => {
                        $('body').append('<h2> You are most like ' + data.data.results[0].name + '</h2>');
                        $('body').append('<h2>' + data.data.results[0].description + '</h2>');
                        $('body').append('<img src="' + data.data.results[0].thumbnail.path + "/landscape_incredible." + data.data.results[0].thumbnail.extension + '"/>')
                    },
                    (error) => {
                        console.log('ERROR');
                    }
                )
            })
        })

        $('#superIntBtn').on('click', () => {
            $('#modal1').css('display', 'none');
            $('#modal3').css('display', 'block');
            ///Answers taking them to intelligence hero pages
            $('#ironManBtn').on('click', () => {
                $('body').empty();
                $.ajax({
                    url: 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=187c414f1f1e4d077498e7946b51406c&hash=0041ac5fd25fe417201b1259bcedacac&name=Iron man',
                }).then(
                    (data) => {
                        $('body').append('<h2> You are most like ' + data.data.results[0].name + '</h2>');
                        $('body').append('<h2>' + data.data.results[0].description + '</h2>');
                        $('body').append('<img src="' + data.data.results[0].thumbnail.path + "/landscape_incredible." + data.data.results[0].thumbnail.extension + '"/>')
                    },
                    (error) => {
                        console.log('ERROR');
                    }
                )
            })
            $('#spiderBtn').on('click', () => {
                $('body').empty();
                $.ajax({
                    url: 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=187c414f1f1e4d077498e7946b51406c&hash=0041ac5fd25fe417201b1259bcedacac&name=Spider-Man',
                }).then(
                    (data) => {
                        $('body').append('<h2> You are most like ' + data.data.results[0].name + '</h2>');
                        $('body').append('<h2>' + data.data.results[0].description + '</h2>');
                        $('body').append('<img src="' + data.data.results[0].thumbnail.path + "/landscape_incredible." + data.data.results[0].thumbnail.extension + '"/>')
                    },
                    (error) => {
                        console.log('ERROR');
                    }
                )
            })
            $('#strangeBtn').on('click', () => {
                $('body').empty();
                $.ajax({
                    url: 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=187c414f1f1e4d077498e7946b51406c&hash=0041ac5fd25fe417201b1259bcedacac&name=Doctor Strange',
                }).then(
                    (data) => {
                        $('body').append('<h2> You are most like ' + data.data.results[0].name + '</h2>');
                        $('body').append('<h2>' + data.data.results[0].description + '</h2>');
                        $('body').append('<img src="' + data.data.results[0].thumbnail.path + "/landscape_incredible." + data.data.results[0].thumbnail.extension + '"/>')
                    },
                    (error) => {
                        console.log('ERROR');
                    }
                )
            })
        })

        $('#superGritBtn').on('click', () => {
            $('#modal1').css('display', 'none');
            $('#modal4').css('display', 'block');
            /// Answers taking them to grit hero pages
            $('#widowBtn').on('click', () => {
                $('body').empty();
                $.ajax({
                    url: 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=187c414f1f1e4d077498e7946b51406c&hash=0041ac5fd25fe417201b1259bcedacac&name=Black Widow',
                }).then(
                    (data) => {
                        $('body').append('<h2> You are most like ' + data.data.results[0].name + '</h2>');
                        $('body').append('<h2>' + data.data.results[0].description + '</h2>');
                        $('body').append('<img src="' + data.data.results[0].thumbnail.path + "/landscape_incredible." + data.data.results[0].thumbnail.extension + '"/>')
                    },
                    (error) => {
                        console.log('ERROR');
                    }
                )
            })
            $('#hawkeyeBtn').on('click', () => {
                $('body').empty();
                $.ajax({
                    url: 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=187c414f1f1e4d077498e7946b51406c&hash=0041ac5fd25fe417201b1259bcedacac&name=Hawkeye',
                }).then(
                    (data) => {
                        $('body').append('<h2> You are most like ' + data.data.results[0].name + '</h2>');
                        $('body').append('<h2>' + data.data.results[0].description + '</h2>');
                        $('body').append('<img src="' + data.data.results[0].thumbnail.path + "/landscape_incredible." + data.data.results[0].thumbnail.extension + '"/>')
                    },
                    (error) => {
                        console.log('ERROR');
                    }
                )
            })
            $('#falconBtn').on('click', () => {
                $('body').empty();
                $.ajax({
                    url: 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=187c414f1f1e4d077498e7946b51406c&hash=0041ac5fd25fe417201b1259bcedacac&name=Falcon',
                }).then(
                    (data) => {
                        $('body').append('<h2> You are most like ' + data.data.results[0].name + '</h2>');
                        $('body').append('<h2>' + data.data.results[0].description + '</h2>');
                        $('body').append('<img src="' + data.data.results[0].thumbnail.path + "/landscape_incredible." + data.data.results[0].thumbnail.extension + '"/>')
                    },
                    (error) => {
                        console.log('ERROR');
                    }
                )
            })
        })
    })





















        //
        // Request Method: GET
        // Params: {
        //   "apikey": "your api key",
        //   "ts": "a timestamp",
        //   "hash": "your hash"
        // }
        // Headers: {
        //   Accept: */*








})
