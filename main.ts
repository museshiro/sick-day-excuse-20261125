import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });

const line =
  "Lost my voice doing a pirate voice at my nephew's birthday, " +
  "so I can't take calls today. Still typing arrr.";

writeFileSync("/output/entry.txt", line, "utf8");
