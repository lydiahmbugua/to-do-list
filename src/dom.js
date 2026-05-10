import {
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
} from "./logic.js";

const sidebar = document.createElement("div");
sidebar.classList.add("sidebar");

const sidebarNav = document.createElement("div");
sidebarNav.classList.add("sidebar-nav");

const folderTitle = document.createElement("h1");
folderTitle.textContent = "Folders";

const addFolderBtn = document.createElement("button");
addFolderBtn.classList.add("add-btn");
addFolderBtn.textContent = "+";

const addItemBtn = document.createElement("button");
addItemBtn.classList.add("add-btn");
addItemBtn.textContent = "+";

const folderListDiv = document.createElement("div");
folderListDiv.classList.add("folder-list");

const itemsListDiv = document.createElement("div");
itemsListDiv.classList.add("items-list");

function renderFoldersList(foldersList) {
  folderListDiv.textContent = "";
  const folderList = document.createElement("ul");
  folderList.textContent = "";
  foldersList.folders.forEach((folder) => {
    const folderBtn = document.createElement("button");
    folderBtn.classList.add("folder-btn");
    const folderEl = document.createElement("li");
    folderBtn.textContent = folder.title;
    folderBtn.addEventListener("click", () => {
      renderItems(folder);
    });

    folderEl.append(folderBtn);
    folderList.append(folderEl);
  });
  folderListDiv.append(folderList);
}

function renderItems(folder) {
  const itemsNav = document.createElement("div");
  itemsNav.classList.add("items-nav");
  const folderName = document.createElement("h1");
  folderName.textContent = folder.title;
  itemsListDiv.textContent = "";
  const itemsList = document.createElement("ul");
  itemsList.textContent = "";
  if (folder.items != "") {
    folder.items.forEach((item) => {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      const itemBtn = document.createElement("button");
      itemBtn.classList.add("item-btn");
      const itemEl = document.createElement("li");
      itemBtn.textContent = item.title;
      itemBtn.addEventListener("click", () => {
        itemBtn.textContent = "";
        itemBtn.textContent = item.title;
        const itemDetails = document.createElement("div");
        itemDetails.classList.add("item-deets");

        const itemDescriptionPara = document.createElement("p");
        itemDescriptionPara.textContent = item.description;

        const itemDatePara = document.createElement("p");
        itemDatePara.textContent = item.dueDate;

        const itemPriorityPara = document.createElement("p");
        itemPriorityPara.textContent = item.priority;

        itemDetails.append(itemDescriptionPara, itemDatePara, itemPriorityPara);
        itemBtn.append(itemDetails);
      });
      itemEl.append(checkbox, itemBtn);
      itemsList.append(itemEl);
    });
  } else {
    itemsListDiv.textContent = "No items yet";
  }
  itemsNav.append(folderName, addItemBtn);
  itemsListDiv.append(itemsNav, itemsList);
}

const createFolderForm = document.createElement("form");
createFolderForm.classList.add("hidden");

const createFolderLabel = document.createElement("label");
createFolderLabel.classList.add("folder-label");
createFolderLabel.textContent = "Folder Name: ";

const folderNameInput = document.createElement("input");
folderNameInput.classList.add("input");

const buttonsDiv = document.createElement("div");
buttonsDiv.classList.add("buttons");

const createFolderBtn = document.createElement("button");
createFolderBtn.classList.add("submit-button");
createFolderBtn.textContent = "Create Folder";

const cancelBtn = document.createElement("button");
cancelBtn.classList.add("submit-button");
cancelBtn.textContent = "Cancel";
buttonsDiv.append(createFolderBtn, cancelBtn);
createFolderForm.append(createFolderLabel, folderNameInput, buttonsDiv);

const createItemForm = document.createElement("form");
createItemForm.classList.add("hidden");
createFolderForm.classList.add("item-form");

const createItemLabel = document.createElement("label");
createItemLabel.classList.add("item-label");
createItemLabel.textContent = "Item Name: ";

const itemNameInput = document.createElement("input");
itemNameInput.classList.add("input");

const createDescription = document.createElement("label");
createDescription.classList.add("description-label");
createDescription.textContent = "Description: ";

const descriptionInput = document.createElement("input");
descriptionInput.classList.add("input");

const dateLabel = document.createElement("label");
dateLabel.classList.add("due-date");
dateLabel.textContent = "Due Date: ";

const dateInput = document.createElement("input");
dateInput.classList.add("input");
dateInput.type = "date";

const priorityLabel = document.createElement("label");
priorityLabel.classList.add("due-date");
priorityLabel.textContent = "Priority: ";

const priorityInput = document.createElement("input");
priorityInput.classList.add("input");

const buttonsItemsDiv = document.createElement("div");
buttonsItemsDiv.classList.add("buttons");

const createItemBtn = document.createElement("button");
createItemBtn.classList.add("submit-button");
createItemBtn.textContent = "Create Item";

const cancelItemBtn = document.createElement("button");
cancelItemBtn.classList.add("submit-button");
cancelItemBtn.textContent = "Cancel";
buttonsItemsDiv.append(createItemBtn, cancelItemBtn);
createItemForm.append(
  createItemLabel,
  itemNameInput,
  createDescription,
  descriptionInput,
  dateLabel,
  dateInput,
  priorityLabel,
  priorityInput,
  buttonsItemsDiv,
);

addFolderBtn.addEventListener("click", () => {
  createFolderForm.classList.remove("hidden");
});
addItemBtn.addEventListener("click", () => {
  createItemForm.classList.remove("hidden");
  createItemForm.classList.add("item-form");
});
createFolderBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (folderNameInput.value != "") {
    createFolder(folderNameInput.value);
    folderNameInput.value = "";
    createFolderForm.classList.add("hidden");
    renderFoldersList(foldersList);
  } else {
    return "ERROR";
  }
});
cancelBtn.addEventListener("click", () => {
  createFolderForm.classList.add("hidden");
});

const main = document.createElement("div");
main.classList.add("main");

renderFoldersList(foldersList);
sidebarNav.append(folderTitle, addFolderBtn);
sidebar.append(sidebarNav, createFolderForm, folderListDiv);
main.append(itemsListDiv, createItemForm);
export { sidebar, main };
