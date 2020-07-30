chrome.storage.sync.get((result) => {
  result["note"] ? setIconToActive() : setIconToInactive();
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

const suggestion = {
  description: "Append to your scratch pad",
};

chrome.omnibox.setDefaultSuggestion(suggestion);

chrome.omnibox.onInputEntered.addListener(function (text) {
  if (!text) return;
  setIconToActive();
  chrome.storage.sync.get((result) => {
    let note = result["note"];
    if (!note) {
      writeNoteToStorage(text);
    } else {
      writeNoteToStorage((note += `\n${text}`));
    }
  });
});
