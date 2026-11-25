// One Star, Five Stars for the Food
// make.fun bounty u-po-pu-one-star-five-stars-for-the-food-f9166ee7
//
// Program (program/v1, Node 22): writes a single sentence to /output/entry.txt —
// a one-star review of planet Earth in the voice of an alien tourist, slipping
// in a real compliment about the food. One sentence, at most 200 characters,
// per the competition gate (UTF-8 text, 1-200 chars, not only whitespace).

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "One star: Earth charged me rent to sleep, made me queue behind honking metal boxes, and served air that tastes of exhaust — but the dumplings were so good I would invade twice.";

// The gate counts characters of the file's text: keep it exactly one sentence,
// 1-200 chars. Fail loudly here rather than shipping an invalid entry.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} characters, must be 1-200`);
}
if (ENTRY.trim() !== ENTRY || ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace or padded");
}
// One sentence: exactly one terminal stop, at the very end. The em dash
// mid-sentence is a pause inside the same sentence, not a second one.
const stops = ENTRY.match(/[.!?]/g) ?? [];
if (stops.length !== 1 || !ENTRY.endsWith(".")) {
  throw new Error(`entry must be exactly one sentence (found ${stops.length} stops)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${chars} chars)`);
