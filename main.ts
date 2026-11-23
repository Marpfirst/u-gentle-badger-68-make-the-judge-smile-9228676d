// Make the Judge Smile — one small good thing that happened today.
// A real small kindness, told plainly: a time of day, a whispered phrase, a secret.
// Writes a single original line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "At 7 a.m. the warung lady slipped an extra krupuk into my bag and whispered 'for the road' — like a secret she'd been saving all morning.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
