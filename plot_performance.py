import matplotlib.pyplot as plt

# 1.准备数据
concurrency = [10, 20, 50, 100]  # 并发数量(x轴)
avg_response = [356.2, 338.88, 360.8, 491.21]  # 平均响应时间
perclient_95 = [578.45, 520.35, 623.8, 1157.75]  # 95%分位响应时间
throughput = [17.63, 24.67, 32.17, 34.15]  # 吞吐量

# 2.设置中文字体（防止图表中的中文乱码）
plt.rcParams['font.sans-serif'] = ['SimHei']
plt.rcParams['axes.unicode_minus'] = False  # 解决负号显示问题

# 3. 图1：响应时间
plt.figure(figsize=(8, 5))
plt.plot(concurrency, avg_response, marker='o', label='平均响应时间 (ms)')
plt.plot(concurrency, perclient_95, marker='s', label='95% 分位响应时间 (ms)')
plt.xlabel('并发用户数')
plt.ylabel('响应时间 (ms)')
plt.title('不同并发下的响应时间变化')
plt.legend()
plt.grid(True, linestyle='--', alpha=0.7)
plt.savefig('response_time.png', dpi=300, bbox_inches='tight')
plt.show()

# 4. 图2：吞吐量
plt.figure(figsize=(8, 5))
plt.plot(concurrency, throughput, marker='^', color='green', label='吞吐量 (req/s)')
plt.xlabel('并发用户数')
plt.ylabel('吞吐量 (req/s)')
plt.title('不同并发下的吞吐量变化')
plt.legend()
plt.grid(True, linestyle='--', alpha=0.7)
plt.savefig('throughput.png', dpi=300, bbox_inches='tight')
plt.show()

print("图表已生成：response_time.png 和 throughput.png")

