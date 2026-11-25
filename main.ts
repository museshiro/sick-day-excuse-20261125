import { mkdirSync, writeFileSync } from "node:fs";

// The entry is exactly one line. Write it byte-for-byte with no trailing
// newline, and only to /output/entry.txt — the grader's working directory
// is read-only, so a relative write would throw and fail the run.
const line = "Pulled a muscle bringing groceries in. One bag. I'm 31.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
