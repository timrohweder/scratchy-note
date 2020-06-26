chrome.storage.sync.get((result) => {
  result["note"] ? setIconToActive() : setIconToInactive();
  console.log(result["note"]);
});

function writeNoteToStorage(v) {
  chrome.storage.sync.set({ note: v });
}

function setIconToActive() {
  chrome.browserAction.setIcon({
    path: {
      "16": "images/note-active-icon16.png",
    },
  });
}

function setIconToInactive() {
  chrome.browserAction.setIcon({
    path: {
      "16": "images/note-icon16.png",
    },
  });
}
