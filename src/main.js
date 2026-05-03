import "./main.css";
import reasons from "./reasons.json";

function h(tag, attributes, ...children) {
  const element = document.createElement(tag);
  if (attributes) {
    Object.entries(attributes).forEach((entry) => {
      element.setAttribute(entry[0], entry[1]);
    });
  }
  element.append(...children);
  return element;
}

let reasonIndex = -1;
await webxdc.setUpdateListener(({ payload }) => {
  reasonIndex = payload;
});
if (reasonIndex === -1) {
  reasonIndex = Math.floor(Math.random() * reasons.length);
  webxdc.sendUpdate({ payload: reasonIndex });
}

const root = document.getElementById("root");
const reason = reasons[reasonIndex];
const quote = h("div", { class: "quote" }, reason);

root.append(h("div", { class: "quote-wrapper" }, quote));
