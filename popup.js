const textarea = document.querySelector("textarea");
textarea.focus();

chrome.storage.sync.get(
  {
    note: "",
    bgColor: "#fff",
    textColor: "#000",
    textSize: 12,
    textAlign: "left",
  },
  function (result) {
    textarea.value = result["note"];
    textarea.style.background = result["bgColor"];
    textarea.style.color = result["textColor"];
    textarea.style.fontSize = result["textSize"].toString() + "px";
    textarea.style.textAlign = result["textAlign"];
    document.body.style.background = result["bgColor"];
  }
);

const background = chrome.extension.getBackgroundPage();

window.addEventListener(
  "unload",
  function (e) {
    let text = textarea.value;
    background.writeNoteToStorage(text);
    text ? background.setIconToActive() : background.setIconToInactive();
  },
  true
);
