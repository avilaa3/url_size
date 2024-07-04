const axios = require('axios');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'urls.txt');

function getPageSize(url) {
    return axios.get(url, { responseType: 'arraybuffer' })
        .then(response => {
            const pageSize = response.data.length;
            console.log(`The size of ${url} is: ${pageSize} bytes`);
            return { url, pageSize };
        })
        .catch(error => {
            console.error(`Error fetching ${url}: ${error.message}`);
            return { url, pageSize: null };
        });
}

function main() {
    if (!fs.existsSync(filePath)) {
        console.error(`File ${filePath} not found.`);
        return;
    }

    const urls = fs.readFileSync(filePath, 'utf-8').split('\n').filter(Boolean);

    const requests = urls.map(url => getPageSize(url));

    Promise.all(requests).then(results => {
        const logFilePath = path.join(__dirname, 'url_sizes.log');
        const logStream = fs.createWriteStream(logFilePath, { flags: 'a' });
        
        results.forEach(({ url, pageSize }) => {
            const logMessage = pageSize !== null ?
                `The size of ${url} is: ${pageSize} bytes` :
                `Failed to retrieve size for ${url}`;
            logStream.write(logMessage + '\n');
        });

        logStream.end();
        console.log(`Results logged to ${logFilePath}`);
    });
}

main();
