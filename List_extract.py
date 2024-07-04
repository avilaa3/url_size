# URL List extract
import requests
from bs4 import BeautifulSoup
import urllib.parse

def get_all_urls(domain):
    urls = set()
    to_visit = [domain]

    while to_visit:
        url = to_visit.pop(0)
        try:
            response = requests.get(url)
            if response.status_code != 200:
                continue

            soup = BeautifulSoup(response.text, 'html.parser')
            for link in soup.find_all('a', href=True):
                href = link['href']
                parsed_href = urllib.parse.urljoin(url, href)
                parsed_url = urllib.parse.urlparse(parsed_href)
                
                if parsed_url.netloc == urllib.parse.urlparse(domain).netloc:
                    full_url = parsed_url.geturl()
                    if full_url not in urls:
                        urls.add(full_url)
                        to_visit.append(full_url)
        except requests.RequestException as e:
            print(f"Failed to access {url}: {e}")
    
    return urls
def filename():
    pass
def save_urls_to_file(urls, filename='urls.txt'):
    with open(filename, 'w') as f:
        for url in urls:
            f.write(f"{url}\n")

if __name__ == "__main__":
    domain = "http://yourdomain_name"  # Replace with the domain you want to crawl
    urls = get_all_urls(domain)
    save_urls_to_file(urls)
    print(f"Found {len(urls)} URLs. Saved to {filename}.")
