const saveButton = document.querySelector("#options-save");
const bgColorPicker = document.querySelector("#background-color");
const textColorPicker = document.querySelector("#text-color");
const textSizeSelect = document.querySelector("#text-size");
const textAlignSelect = document.querySelector("#text-align");
const updateMessage = document.querySelector("#update-message");

chrome.storage.sync.get(
  { bgColor: "#ffffff", textColor: "#000000", textSize: 16, textAlign: "left" },
  function (results) {
    bgColorPicker.value = results["bgColor"];
    textColorPicker.value = results["textColor"];
    textSizeSelect.value = results["textSize"];
    textAlignSelect.value = results["textAlign"];
  }
);

saveButton.addEventListener("click", () => {
  chrome.storage.sync.set({ bgColor: bgColorPicker.value });
  chrome.storage.sync.set({ textColor: textColorPicker.value });
  chrome.storage.sync.set({ textSize: textSizeSelect.value });
  chrome.storage.sync.set({ textAlign: textAlignSelect.value });
  updateMessage.style.opacity = "1";
  setTimeout(function () {
    updateMessage.style.opacity = "0";
  }, 3000);
});
