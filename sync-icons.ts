import { dspItems } from "./src/data.ts";
// import { fetch } from "https://esm.sh/lightfetch";
// import fetch from "https://esm.sh/node-fetch"
// import fs from "fs";
// // import { Buffer } from "buffer";
// import { access } from "fs/promises";

import { writableStreamFromWriter } from "https://deno.land/std@0.118.0/streams/mod.ts";

console.log("Syncing all times")

dspItems.map(async (item) => {
  const url = new URL(item.icon);
  const pathname = url.pathname;
  const filename = pathname.substring(pathname.lastIndexOf("/") + 1);

  const file = `src/img/${filename}`;

  return Deno.open(file).catch(() => {
    return fetch(item.icon, {
      headers: {
        "User-Agent":
          "Dyson Perfect Calculator/0.1 https://dysoncalc.rockerboo.net",
      },
    }).then(async (res) => {
      // save to file
      const openedFile = await Deno.open(file, { write: true, create: true });

      console.log("Saving icon to file", file);

      const writableStream = writableStreamFromWriter(openedFile);
      await res.body?.pipeTo(writableStream);
      // fs.createWriteStream(file).write(buffer);
    });
  });
});


console.log("Sync complete.")

export default {};
