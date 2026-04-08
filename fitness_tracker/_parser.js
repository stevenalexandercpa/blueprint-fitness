const fs = require("fs");
const js = fs.readFileSync("g:/dev/projects/fitness/fitness_tracker/_tmp_check.js", "utf8");
const lines = js.split("
");
let depth = 0, inS = false, inD = false, inT = false, tStack = [], openStack = [];
const BS = String.fromCharCode(92);
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  for (let j = 0; j < line.length; j++) {
    const c = line[j];
    if ((inS || inD || inT) && c === BS) { j++; continue; }
    if (inS) { if (c === String.fromCharCode(39)) inS = false; continue; }
    if (inD) { if (c === String.fromCharCode(34)) inD = false; continue; }
    if (inT) {
      if (c === String.fromCharCode(96)) { inT = false; continue; }
      if (c === "$" && line[j+1] === "{") { tStack.push(depth); j++; depth++; inT = false; continue; }
      continue;
    }
    if (c === String.fromCharCode(39)) { inS = true; continue; }
    if (c === String.fromCharCode(34)) { inD = true; continue; }
    if (c === String.fromCharCode(96)) { inT = true; continue; }
    if (c === "/" && line[j+1] === "/") break;
    if (c === "{") { depth++; openStack.push({line:i+1,depth,text:line.trim().substring(0,80)}); }
    if (c === "}") { if(tStack.length>0&&depth===tStack[tStack.length-1]+1){tStack.pop();inT=true;} depth--; if(openStack.length>0) openStack.pop(); }
  }
}
console.log("Final depth:", depth, "inS:", inS, "inD:", inD, "inT:", inT);
console.log("Unclosed opens:", openStack.length);
openStack.forEach(h => console.log("  Line " + h.line + " depth->" + h.depth + ": " + h.text));