# URL Crawler

This project contains scripts to crawl a domain and collect all URLs found on that domain. The URLs are then saved to a file named `urls.txt`.

## Python Version

### Requirements

- Python 3.x
- `requests` library
- `beautifulsoup4` library

### Installation

1. Clone the repository or download the script.
2. Install the required libraries:
    ```bash
    pip install requests beautifulsoup4
    ```

### Usage

1. Replace `"http://example.com"` in the script with the domain you want to crawl.
2. Run the script:
    ```bash
    python url_crawler.py
    ```
3. The script will crawl the domain, collect all URLs, and save them to `urls.txt`.

### Script Explanation

- The script uses the `requests` library to send HTTP requests.
- The `beautifulsoup4` library is used to parse the HTML and extract URLs.
- The `urllib.parse` module is used to handle URL parsing and joining.
- The `get_all_urls` function crawls the domain and collects URLs.
- The `save_urls_to_file` function saves the collected URLs to a file.

### URL Page Size Fetcher

This Node.js application reads a list of URLs from a file (urls.txt), fetches each URL, calculates the size of the page, and logs the results to a file (url_sizes.log).

Prerequisites

Node.js installed on your system. You can download it from nodejs.org.
Installation

Clone the repository or download the source code.
Navigate to the project directory.
Install the necessary dependencies by running:
sh
Copy code
npm install axios
Usage

Create a file named urls.txt in the project directory and list the URLs you want to check, each on a new line. For example:

arduino
Copy code
https://www.example.com
https://www.google.com
Run the application:

sh
Copy code
node index.js
Description

Files
index.js: The main script file containing the logic to read URLs, fetch page sizes, and log the results.
urls.txt: A text file containing the list of URLs to be processed. You need to create this file in the project directory.
url_sizes.log: The output log file where the results will be saved.
Functions
getPageSize(url): Fetches the content of the given URL and calculates its size in bytes. Logs the size to the console and returns an object with the URL and its size. In case of an error, logs the error and returns an object with the URL and pageSize set to null.
main(): Reads the list of URLs from urls.txt, initiates the size fetching for each URL, and logs the results to url_sizes.log.
Example

Create a urls.txt file with the following content:

arduino
Copy code
https://www.example.com
https://www.google.com
Run the script:

sh
Copy code
node index.js
After the script completes, you will find a url_sizes.log file with the following content:

arduino
Copy code
The size of https://www.example.com is: 1256 bytes
The size of https://www.google.com is: 3052 bytes
Error Handling

If a URL cannot be fetched, an error message will be logged to the console and the url_sizes.log file.
If urls.txt does not exist, an error message will be logged to the console, and the script will exit.