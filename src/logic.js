class FoldersList {
  constructor() {
    this.folders = [];
  }
}
const saved = localStorage.getItem("folderslist");
const foldersList = saved ? JSON.parse(saved) : new FoldersList();
class Folder {
  constructor(title) {
    this.title = title;
    this.items = [];
  }
}

class Item {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isDone = false;
  }
}

function createFolder(name) {
  const newFolder = new Folder(name);
  foldersList.folders.push(newFolder);
  localStorage.setItem("folderslist", JSON.stringify(foldersList));
  return newFolder;
}
function createItem(title, description, due, priority) {
  const newItem = new Item(title, description, due, priority);
  return newItem;
}
function addItemToFolder(item, folder) {
  folder.items.push(item);
  localStorage.setItem("folderslist", JSON.stringify(foldersList));
}
function toggleCheck(item) {
  if (item.isDone == true) {
    item.isDone = false;
  } else {
    item.isDone = true;
  }
  localStorage.setItem("folderslist", JSON.stringify(foldersList));
}
function changePriority(item, newPriority) {
  item.priority = newPriority;
  localStorage.setItem("folderslist", JSON.stringify(foldersList));
}
function deleteItem(itemToDelete, folder) {
  folder.items = folder.items.filter((item) => item !== itemToDelete);
  localStorage.setItem("folderslist", JSON.stringify(foldersList));
  return folder.items;
}
function deleteFolder(folderToDelete) {
  foldersList.folders = foldersList.folders.filter(
    (item) => item !== folderToDelete,
  );
  localStorage.setItem("folderslist", JSON.stringify(foldersList));

  return foldersList.folders;
}

export {
  FoldersList,
  Folder,
  Item,
  createFolder,
  createItem,
  addItemToFolder,
  toggleCheck,
  changePriority,
  deleteItem,
  deleteFolder,
  foldersList,
};
