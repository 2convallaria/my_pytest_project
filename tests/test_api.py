import requests
import pytest
import json

def test_get_request():
    url = "https://httpbin.org/get"
    params = {"key": "value"}
    response = requests.get(url, params=params)
    
    #断言状态码
    assert response.status_code == 200
    
    #解析Json响应
    data = response.json()
    # 断言返回的args中包含我们发送的参数
    assert data["args"] == {"key": "value"}
    # 断言返回的url包含正确的参数
    assert "key=value" in data["url"]
    
def test_post_form():
    url = "https://httpbin.org/post"
    data = {"username": "keyword", "password": "123456"}
    response = requests.post(url, data=data)
    
    assert response.status_code == 200
    json_data = response.json()
    assert json_data['form'] == data
    print(json.dumps(json_data, indent=2, ensure_ascii=False))