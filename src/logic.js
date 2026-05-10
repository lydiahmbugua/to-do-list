class FoldersList {
  constructor() {
    this.folders = [];
  }
}
const foldersList = new FoldersList();
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
  return newFolder;
}
function createItem(title, description, due, priority) {
  const newItem = new Item(title, description, due, priority);
  return newItem;
}
function addItemToFolder(item, folder) {
  folder.items.push(item);
}
function toggleCheck(item) {
  if (item.isDone == true) {
    item.isDone = false;
  } else {
    item.isDone = true;
  }
}
function changePriority(item, newPriority) {
  item.priority = newPriority;
}
function deleteItem(itemToDelete, folder) {
  folder.items = folder.items.filter((item) => item !== itemToDelete);
  return folder.items;
}
function deleteFolder(folderToDelete) {
  foldersList.folders = foldersList.folders.filter(
    (item) => item !== folderToDelete,
  );
  return foldersList.folders;
}

const folder1 = createFolder("Work");
const folder2 = createFolder("Personal");

const item1 = createItem(
  "Finish report",
  "Complete the quarterly report",
  "2024-12-01",
  "high",
);
const item2 = createItem(
  "Email team",
  "Send update to the team",
  "2024-11-30",
  "medium",
);
const item3 = createItem(
  "Buy groceries",
  "Milk, eggs, bread",
  "2024-11-28",
  "low",
);
const item4 = createItem("Go to gym", "Leg day", "2024-11-28", "medium");

addItemToFolder(item1, folder1);
addItemToFolder(item2, folder1);
addItemToFolder(item3, folder2);
addItemToFolder(item4, folder2);

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
