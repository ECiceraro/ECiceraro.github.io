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
            ///Thor Stats
            $('#thorBtn').on('click', () => {
                $('body').empty();
                $.ajax({
                    url: 'https://cors-anywhere.herokuapp.com/https://gateway.marvel.com/v1/public/characters?ts=1&apikey=187c414f1f1e4d077498e7946b51406c&hash=0041ac5fd25fe417201b1259bcedacac&name=Thor',
                }).then(
                    (data) => {
                        console.log(data);
                        $('body').append('<h2> You are most like ' + data.data.results[0].name + '</h2>');
                        $('body').append('<h2>' + data.data.results[0].description + '</h2>');
                        $('body').append('<img src="' + data.data.results[0].thumbnail.path + "/portrait_incredible." + data.data.results[0].thumbnail.extension + '"/>');
                        $('body').append('<br>');
                        $('body').append('<button type="button" id="restartBtn">Play Again</button>');
                        $('#restartBtn').on('click', () => {
                            location.reload();
                        })
                    },
                    (error) => {
                        console.log('ERROR');
                    }
                )
            })
            ///Captain America Stats
            $('#capBtn').on('click', () => {
                $('body').empty();
                $.ajax({
                    url: 'https://cors-anywhere.herokuapp.com/https://gateway.marvel.com/v1/public/characters?ts=1&apikey=187c414f1f1e4d077498e7946b51406c&hash=0041ac5fd25fe417201b1259bcedacac&name=Captain America',
                }).then(
                    (data) => {
                        $('body').append('<h2> You are most like ' + data.data.results[0].name + '</h2>');
                        $('body').append('<h2>' + data.data.results[0].description + '</h2>');
                        $('body').append('<img src="' + data.data.results[0].thumbnail.path + "/portrait_incredible." + data.data.results[0].thumbnail.extension + '"/>');
                        $('body').append('<br>');
                        $('body').append('<button type="button" id="restartBtn">Play Again</button>');
                        $('#restartBtn').on('click', () => {
                            location.reload();
                        })
                    },
                    (error) => {
                        console.log('ERROR');
                    }
                )
            })
            ///Hulk Stats
            $('#hulkBtn').on('click', () => {
                $('body').empty();
                $.ajax({
                    url: 'https://cors-anywhere.herokuapp.com/https://gateway.marvel.com/v1/public/characters?ts=1&apikey=187c414f1f1e4d077498e7946b51406c&hash=0041ac5fd25fe417201b1259bcedacac&name=Hulk',
                }).then(
                    (data) => {
                        $('body').append('<h2> You are most like ' + data.data.results[0].name + '</h2>');
                        $('body').append('<h2>' + data.data.results[0].description + '</h2>');
                        $('body').append('<img src="' + data.data.results[0].thumbnail.path + "/portrait_incredible." + data.data.results[0].thumbnail.extension + '"/>');
                        $('body').append('<br>');
                        $('body').append('<button type="button" id="restartBtn">Play Again</button>');
                        $('#restartBtn').on('click', () => {
                            location.reload();
                        });
                    },
                    (error) => {
                        console.log('ERROR');
                    }
                )
            })
        })
        /// Intelligence Hero Question Tree
        $('#superIntBtn').on('click', () => {
            $('#modal1').css('display', 'none');
            $('#modal3').css('display', 'block');
            ///Answers taking them to intelligence hero pages
            ///Iron Man Stats
            $('#ironManBtn').on('click', () => {
                $('body').empty();
                $.ajax({
                    url: 'https://cors-anywhere.herokuapp.com/https://gateway.marvel.com/v1/public/characters?ts=1&apikey=187c414f1f1e4d077498e7946b51406c&hash=0041ac5fd25fe417201b1259bcedacac&name=Iron man',
                }).then(
                    (data) => {
                        $('body').append('<h2> You are most like ' + data.data.results[0].name + '</h2>');
                        $('body').append('<h2>' + data.data.results[0].description + '</h2>');
                        $('body').append('<img src="' + data.data.results[0].thumbnail.path + "/portrait_incredible." + data.data.results[0].thumbnail.extension + '"/>');
                        $('body').append('<br>');
                        $('body').append('<button type="button" id="restartBtn">Play Again</button>');
                        $('#restartBtn').on('click', () => {
                            location.reload();
                        })
                    },
                    (error) => {
                        console.log('ERROR');
                    }
                )
            })
            ///Spider-Man Stats
            $('#spiderBtn').on('click', () => {
                $('body').empty();
                $.ajax({
                    url: 'https://cors-anywhere.herokuapp.com/https://gateway.marvel.com/v1/public/characters?ts=1&apikey=187c414f1f1e4d077498e7946b51406c&hash=0041ac5fd25fe417201b1259bcedacac&name=Spider-Man',
                }).then(
                    (data) => {
                        $('body').append('<h2> You are most like ' + data.data.results[0].name + '</h2>');
                        $('body').append('<h2>' + data.data.results[0].description + '</h2>');
                        $('body').append('<img src="' + data.data.results[0].thumbnail.path + "/portrait_incredible." + data.data.results[0].thumbnail.extension + '"/>');
                        $('body').append('<br>');
                        $('body').append('<button type="button" id="restartBtn">Play Again</button>');
                        $('#restartBtn').on('click', () => {
                            location.reload();
                        })
                    },
                    (error) => {
                        console.log('ERROR');
                    }
                )
            })
            ///Doctor Strange Stats
            $('#strangeBtn').on('click', () => {
                $('body').empty();
                $.ajax({
                    url: 'https://cors-anywhere.herokuapp.com/https://gateway.marvel.com/v1/public/characters?ts=1&apikey=187c414f1f1e4d077498e7946b51406c&hash=0041ac5fd25fe417201b1259bcedacac&name=Doctor Strange',
                }).then(
                    (data) => {
                        $('body').append('<h2> You are most like ' + data.data.results[0].name + '</h2>');
                        $('body').append('<h2>After a car crash severely damages his hands and hinders his ability to perform surgery, Doctor Strange searched the globe for a way to repair them and encounters the Ancient One... who ultimately passes the title of Sorcerer Supreme after Strange mastered the mystical arts. </h2>');
                        $('body').append('<img src="' + data.data.results[0].thumbnail.path + "/portrait_incredible." + data.data.results[0].thumbnail.extension + '"/>');
                        $('body').append('<br>');
                        $('body').append('<button type="button" id="restartBtn">Play Again</button>');
                        $('#restartBtn').on('click', () => {
                            location.reload();
                        })
                    },
                    (error) => {
                        console.log('ERROR');
                    }
                )
            })
        })
        /// Grit Question Tree
        $('#superGritBtn').on('click', () => {
            $('#modal1').css('display', 'none');
            $('#modal4').css('display', 'block');
            /// Answers taking them to grit hero pages
            ///Black Widow Stats
            $('#widowBtn').on('click', () => {
                $('body').empty();
                $.ajax({
                    url: 'https://cors-anywhere.herokuapp.com/https://gateway.marvel.com/v1/public/characters?ts=1&apikey=187c414f1f1e4d077498e7946b51406c&hash=0041ac5fd25fe417201b1259bcedacac&name=Black Widow',
                }).then(
                    (data) => {
                        $('body').append('<h2> You are most like ' + data.data.results[0].name + '</h2>');
                        $('body').append('<h2> Black Widow is a human, trained in the arts of espionage and martial arts, with specialities in hand-to-hand combat and interrogation. She has the athletic prowess of an Olympic class athlete and appears nearly superhuman at times.</h2>');
                        $('body').append('<img src="' + data.data.results[0].thumbnail.path + "/portrait_incredible." + data.data.results[0].thumbnail.extension + '"/>');
                        $('body').append('<br>');
                        $('body').append('<button type="button" id="restartBtn">Play Again</button>');
                        $('#restartBtn').on('click', () => {
                            location.reload();
                        });
                    },
                    (error) => {
                        console.log('ERROR');
                    }
                )
            })
            ///Hawkeye Stats
            $('#hawkeyeBtn').on('click', () => {
                $('body').empty();
                $.ajax({
                    url: 'https://cors-anywhere.herokuapp.com/https://gateway.marvel.com/v1/public/characters?ts=1&apikey=187c414f1f1e4d077498e7946b51406c&hash=0041ac5fd25fe417201b1259bcedacac&name=Hawkeye',
                }).then(
                    (data) => {
                        $('body').append('<h2> You are most like ' + data.data.results[0].name + '</h2>');
                        $('body').append('<h2> The man who would become known as Hawkeye was born Clint Barton. Orphaned at an early age, he joined the circus and apprenticed himself to the Bowman, a performer who specialized in tricks with bow and arrow.</h2>');
                        $('body').append('<img src="' + data.data.results[0].thumbnail.path + "/portrait_incredible." + data.data.results[0].thumbnail.extension + '"/>');
                        $('body').append('<br>');
                        $('body').append('<button type="button" id="restartBtn">Play Again</button>');
                        $('#restartBtn').on('click', () => {
                            location.reload();
                        });
                    },
                    (error) => {
                        console.log('ERROR');
                    }
                )
            })
            /// Falcon Stats
            $('#falconBtn').on('click', () => {
                $('body').empty();
                $.ajax({
                    url: 'https://cors-anywhere.herokuapp.com/https://gateway.marvel.com/v1/public/characters?ts=1&apikey=187c414f1f1e4d077498e7946b51406c&hash=0041ac5fd25fe417201b1259bcedacac&name=Falcon',
                }).then(
                    (data) => {
                        $('body').append('<h2> You are most like ' + data.data.results[0].name + '</h2>');
                        $('body').append('<h2>' + data.data.results[0].description + '</h2>');
                        $('body').append('<img src="' + data.data.results[0].thumbnail.path + "/portrait_incredible." + data.data.results[0].thumbnail.extension + '"/>');
                        $('body').append('<br>');
                        $('body').append('<button type="button" id="restartBtn">Play Again</button>');
                        $('#restartBtn').on('click', () => {
                            location.reload();
                        });
                    },
                    (error) => {
                        console.log('ERROR');
                    }
                )
            })
        })
    })


})
