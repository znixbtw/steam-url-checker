const fs = require('fs');
const axios = require('axios');

// Enter STEAM API KEY HERE!
const STEAM_KEY = ''

axios.defaults.baseURL = 'https://api.steampowered.com/ISteamUser/ResolveVanityURL/v1';
axios.defaults.params = {
    key: STEAM_KEY,
};

const sleep = ms => new Promise(r => setTimeout(r, ms));

const checkVanity = async (url) => {
    try {
        const { data } = await axios.get(`?vanityurl=${url}`);
        if (data.response.success === 42) {
            fs.appendFileSync('available.txt', url + '\n');
            console.log('URL Found:', url);
        }
    } catch (error) {
            console.log('Unknown Error! Please report it: https://github.com/znixbtw/steam-url-checker/issues');
            fs.appendFileSync('error.txt', error + '\n');
            process.exit(1);
    }
}

const main = async () => {
    try {
        const vanity = fs.readFileSync('urls.txt').toString().split("\n");
        console.log('Searching for Vanity URLs...');
        for (let i in vanity) {
            const url = vanity[i];
            if (url !== '') await checkVanity(url);
            await sleep(1000);
        }
    } catch (error) {
        if (error.code === 'ENOENT') console.log('Error Code: 1');
        else {
            console.log('Unknown Error! Please report it: https://github.com/znixbtw/steam-url-checker/issues');
            fs.appendFileSync('error.txt', error + '\n');
            process.exit(1);
        }
    }
}

(async function () {
    await main();
})();
