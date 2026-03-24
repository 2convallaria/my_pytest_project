import requests
import json

def get_weather(city):
    url = f"https://wttr.in/{city}?format=j1"
    response = requests.get(url)
    data = response.json()
    return data

if __name__ == "__main__":
    result = get_weather("shanghai")
    print(json.dumps(result, indent=2, ensure_ascii=False))