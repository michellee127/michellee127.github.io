// wrap alert in a function 
function sayHello() {
    alert("Hello, world!");
}

// get the textarea
function txt() {
    return document.getElementById("textInput");
}

// Bigger button changes font size to 24pt
function makeBigger() {
    txt().style.fontSize = "24pt";
}

// style radio buttons
function updateStyle() {
    const fancy = document.getElementById("fancyRadio").checked;
    const area = txt();

    if (fancy) {
        // FancySchmancy blue, bold, underline
        area.style.fontWeight = "bold";
        area.style.color = "blue";
        area.style.textDecoration = "underline";
    } else {
        // BoringBetty back to normal
        area.style.fontWeight = "normal";
        area.style.color = "";
        area.style.textDecoration = "none";
    }
}

// moo button
function mooify() {
    const area = txt();
    // make text uppercase
    let value = area.value.toUpperCase();

    const parts = value.split(".");
    const processed = parts.map((segment) => {
        const s = segment.trim();
        if (!s) return ""; 

        const words = s.split(/\s+/);
        // append "-Moo" to the last word
        words[words.length - 1] = words[words.length - 1] + "-Moo";
        return words.join(" ");
    });

    // rebuild with periods; preserve a trailing period if the user had one
    let rebuilt = processed.join(". ");
    // if original ended with a period, keep it
    if (/\.\s*$/.test(area.value)) rebuilt = rebuilt.replace(/\s*$/, "") + ".";

    area.value = rebuilt;
}
