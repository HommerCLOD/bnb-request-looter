var axios = require('axios');
var data = 'action=claim';

var config = {
    method: 'post',
    url: 'https://bnb-income.ltd/ajax.php',
    headers: {
        'authority': 'bnb-income.ltd',
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'en-US,en;q=0.9,ru;q=0.8,uk;q=0.7',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'cookie': 'PHPSESSID=d92294cdb0a6b382b9d452899d19b85c; referral=31866; cf_clearance=q31pLBjs.kkhXKvRadz30IIddZO9PV70zIJ3U83R1mI-1652642939-0-150',
        'origin': 'https://bnb-income.ltd',
        'referer': 'https://bnb-income.ltd/?r=31866',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="101", "Microsoft Edge";v="101"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36 Edg/101.0.1210.47',
        'x-requested-with': 'XMLHttpRequest'
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


