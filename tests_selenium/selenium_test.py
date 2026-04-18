from selenium import webdriver
from selenium.webdriver.chrome.service import Service   # 新增导入
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# 指定 chromedriver 的路径（假设放在当前脚本同目录下）
driver_path = './chromedriver.exe'   # 如果放在其他目录，改成绝对路径
service = Service(driver_path)
driver = webdriver.Chrome(service=service)

# 线上应用URL
URL = 'https://furikae.pythonanywhere.com/'
driver.get(URL)

try:
    # 添加任务
    input_box = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, 'taskInput'))
    )
    input_box.send_keys('Selenium测试任务')
    add_btn = driver.find_element(By.XPATH, '//button[text()="添加"]')
    add_btn.click()

    # 等待任务出现在列表中
    task_span = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, '//li/span[text()="Selenium测试任务"]'))
    )
    print("✅ 添加任务成功，任务已显示")

    # 删除任务
    del_btn = driver.find_element(By.XPATH, '//li/button[text()="删除"]')
    del_btn.click()

    # 等待任务消失（等待元素从DOM中移除）
    WebDriverWait(driver, 10).until(
        EC.staleness_of(task_span)
    )
    print("✅ 删除任务成功，任务已消失")

    # 可选：验证列表最终为空（取决于你的初始状态，这里不强制）
    # 可以再获取所有任务，检查是否为空

except Exception as e:
    print(f"❌ 测试失败: {e}")
    # 可选：截图
    driver.save_screenshot('error.png')
finally:
    driver.quit()