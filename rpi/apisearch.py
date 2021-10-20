import requests

def foodApi():
    print("this is log")
    response = requests.get("https://jsonplaceholder.typicode.com/todos/1")
    print(response.json())



foodApi()
