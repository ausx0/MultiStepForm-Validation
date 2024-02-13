let ipcRenderer;
if (false) {
  ipcRenderer = require("electron").ipcRenderer;
}

export default function printRX(target, pageSize, previewBeforePrint) {
  return new Promise(() => {
    let printContents = target.contentWindow.document.documentElement.outerHTML;
    console.log(target);
    if (true) {
      let fakeIFrame = window.document.createElement("iframe");
      document.body.appendChild(fakeIFrame);
      let fakeContent = fakeIFrame.contentWindow;
      fakeContent.document.open();
      fakeContent.document.write(printContents);
      fakeContent.document.close();
      fakeContent.focus();
      fakeIFrame.addEventListener("load", () => {
        fakeContent.print();
        document.body.removeChild(fakeIFrame);
      });
    } else {
      console.log(printContents);
      let blob = new Blob([printContents], {
        type: "text/html;charset=utf-8",
      });
      let url = URL.createObjectURL(blob);

      previewBeforePrint
        ? ipcRenderer.send("rx-view", url, pageSize)
        : ipcRenderer.send("printComponent", url, pageSize);
    }
    // printJS({
    //   printable: "print-rx",
    //   type: "html",
    //   style: [
    //     `@page {
    //     size: ${JSON.parse(fs.readFileSync(Settings, "utf8")).pageSize};
    //     margin-top:0mm;
    //     margin-left: ${
    //       JSON.parse(fs.readFileSync(Settings, "utf8")).sideMargins
    //     }mm;
    //     margin-right: ${
    //       JSON.parse(fs.readFileSync(Settings, "utf8")).sideMargins
    //     }mm;
    //   } body {
    //     margin-top:${JSON.parse(fs.readFileSync(Settings, "utf8")).topMargin}mm;
    //   }`,
    //   ],

    //   targetStyles: ["*"],
    // });
  });
}
