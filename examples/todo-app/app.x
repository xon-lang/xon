class ToDo:
  str name
  bool done

class App:
  ToDo[] items

  addItem: ToDo item
    this.items.push(item)

  
