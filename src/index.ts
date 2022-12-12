class SlotTest extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "wrapper");

    const slots = {
      info: document.createElement("div"),
    };
    slots.info.setAttribute("class", "info");

    const info = this.querySelector("[slot='info']");

    const observer = new MutationObserver(() => {
      slots.info.querySelector("[slot='info']").remove();
      slots.info.appendChild(info.cloneNode(true));
    });

    observer.observe(this, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
    });

    shadow.appendChild(wrapper);
    wrapper.appendChild(slots.info);
    slots.info.appendChild(info.cloneNode(true));
  }
}

// 新しい要素を定義
customElements.define("o-slot-test", SlotTest);
