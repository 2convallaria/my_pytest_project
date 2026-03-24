import pytest
import requests
from weather import get_weather

def test_get_weather(mocker):
    fake_response_data = {
        "current_condition": [
            {
                "temp_C": "22",
                "weatherDesc": [{"value": "Sunny"}],
                "humidity": "60"
            }
        ],
        "nearest_area": [
            {"areaName": [{"value": "Beijing"}]}
        ]
    }
    mock_rep = mocker.Mock()
    mock_rep.json.return_value = fake_response_data
    mocker.patch('requests.get', return_value = mock_rep)
    result = get_weather("beijin")
    assert result == fake_response_data
    
@pytest.mark.parametrize("city",["shanghai", "suzhou", "zhejiang"])
def test_get_weather_cities(mocker, city):
    # fake_response_data = {
    #     "shanghai":{
    #             "current_condition": [
    #                 {
    #                     "temp_C": "22",
    #                     "weatherDesc": [{"value": "Sunny"}],
    #                     "humidity": "60"
    #                 }
    #             ],
    #             "nearest_area": [
    #                 {"areaName": [{"value": "shanghai"}]}
    #             ],
    #         },
    #     "suzhou":{
    #         "current_condition": [
    #             {
    #                 "temp_C": "22",
    #                 "weatherDesc": [{"value": "Sunny"}],
    #                 "humidity": "60"
    #             }
    #         ],
    #         "nearest_area": [
    #             {"areaName": [{"value": "suzhou"}]}
    #         ],
    #     },
    #     "zhejiang":{
    #         "current_condition": [
    #             {
    #                 "temp_C": "22",
    #                 "weatherDesc": [{"value": "Sunny"}],
    #                 "humidity": "60"
    #             }
    #         ],
    #         "nearest_area": [
    #             {"areaName": [{"value": "zhejiang"}]}
    #         ],
    #     },
    # }
    fake_response_data = {
        "current_condition": [
            {
                "temp_C": "22",
                "weatherDesc": [{"value": "Sunny"}],
                "humidity": "60"
            }
        ],
        "nearest_area": [
            {"areaName": [{"value": city}]}
        ]
    }
    mocker_ts = mocker.Mock()
    mocker_ts.json.return_value = fake_response_data
    mocker.patch("requests.get", return_value = mocker_ts)
    result = get_weather(city)
    assert fake_response_data == result
    
#异常情况
@pytest.mark.parametrize("exception", [
    requests.ConnectionError,
    requests.Timeout,
    requests.HTTPError,
    ValueError
])
def test_get_weather_exceptions(mocker, exception):
    mocker.patch("requests.get", side_effect=exception)
    with pytest.raises(exception):
        get_weather("shanghai")
        
#空值情况
def test_get_weather_empty_response(mocker):
    mocker_exc = mocker.Mock()
    mocker_exc.json.side_effect = ValueError("No Json")
    mocker.patch("requests.get", return_value=mocker_exc)
    
    with pytest.raises(ValueError):
        get_weather("shanghai")