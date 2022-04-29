# Steam Vanity URL Checker

---

## Installation
```shell
git clone https://github.com/znixbtw/steam-url-checker.git
npm install
```

## Usage
1. Add Steam API Key ([Register Here](https://steamcommunity.com/dev/apikey)) in `index.js`.
2. Add Vanity URLs to `urls.txt`, few are added as an example.
3. Run `npm run start` to start searching for steam URLs.

* A text file named `available.txt` will be created with all the available vanity URLs.

## Error Codes
* 1: No `urls.txt` file was detected. Make sure there is a file named `urls.txt`
