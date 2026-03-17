class TodoList:
    def __init__(self, tasks=None):
        self._items = tasks if tasks is not None else []
        
    def add(self, item):
        self._items.append(item)
        
    def items(self):
        return self._items 
    
    #写入文件
    def save_to_file(self, filename):   
        with open(filename, 'w') as f:
            for item in self._items:
                f.write(item)
                
    #读取文件
    @classmethod
    def load_from_file(cls, filename):
        tasks=[]
        try:
            with open(filename, 'r') as f:
                for line in f:
                    line = line.strip()
                    if line:
                        tasks.append(line)
        except FileNotFoundError:
            pass
        return cls(tasks)             
            
# to_do_list = TodoList()
# to_do_list.add('写代码\n')
# to_do_list.add('吃饭\n')
# to_do_list.add('投简历\n')
# to_do_list.save_to_file('1.txt')