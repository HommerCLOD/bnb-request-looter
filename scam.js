var axios = require('axios');
var data = 'action=claim';

var config = {
    method: 'post',
    url: 'https://bnb-income.ltd/ajax.php',
    headers: {
        // your headers here
    },
    data: data
};

async function start() {
    setInterval(() => {

        try {

            axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                })

        } catch (error) {
            console.log(error)
        }

    }, 500)
}

start()
start()
start()
start()
start()
start()
start()
start()
start()
start()
start()
start()
start()
start()
start()
start()
start()


