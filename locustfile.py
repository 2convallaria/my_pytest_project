from locust import HttpUser, task, between

class WebsiteUser(HttpUser):
    wait_time = between(1, 3)  # 每个用户等待1-3秒再执行下一个任务
    
    @task
    def get_home(self):
        self.client.get("/get")  #访问 httpbin.org/get