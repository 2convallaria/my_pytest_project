import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
import time

Base_URL = "https://furikae.pythonanywhere.com/"

@pytest.fixture
def driver():
    driver_path = "./chromedriver.exe"
    service = Service(driver_path)
    driver = webdriver.Chrome(service=service)
    driver.implicitly_wait(5)  #隐式等待
    yield driver
    driver.quit()
    
def test_add_and_delete_task(driver):
    wait = WebDriverWait(driver, 10)
    driver.get(Base_URL)
    
    #清空已有任务
    # 测试批量删除任务
    while True:
        # 检查是否还有任务
        lis = driver.find_elements(By.XPATH, '//li')
        if not lis:
            break
        # 直接定位第一个任务的删除按钮（使用索引，XPath 索引从 1 开始）
        first_delete = driver.find_element(By.XPATH, '(//li)[1]//button')
        first_delete.click()
        # 等待第一个 <li> 消失（注意：这里不能依赖之前的引用，需要重新获取）
        wait.until(EC.staleness_of(first_delete))
        
    #测试批量添加任务
    tasks = ["学习selenium", "压测jemeter", "学习新工具"]
    for task in tasks:
        input_box = driver.find_element(By.ID, 'taskInput')
        input_box.clear()
        input_box.send_keys(task)
        driver.find_element(By.XPATH, '//button[text()="添加"]').click()
        # time.sleep(1)
    wait.until(EC.presence_of_element_located((By.XPATH, f'//li/span[text()="{tasks[-1]}"]')))
    
    task_span = driver.find_elements(By.XPATH, '//li/span')
    assert len(task_span) == 3
        
    # 测试批量删除任务
    while True:
        # 检查是否还有任务
        if not driver.find_elements(By.XPATH, '//li'):
            break
        # 直接定位第一个任务的删除按钮（使用索引，XPath 索引从 1 开始）
        first_delete = driver.find_element(By.XPATH, '(//li)[1]//button')
        first_delete.click()
        # 等待第一个 <li> 消失（注意：这里不能依赖之前的引用，需要重新获取）
        wait.until(EC.staleness_of(first_delete))
        
    
        
    
