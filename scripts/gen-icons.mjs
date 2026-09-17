// Generates simple solid-brand-color PNG app icons (no external deps),
// for use as PWA manifest icons / apple-touch-icon.
import { deflateSync } from "node:zlib";
import { writeFileSync } from "node:fs";

const GREEN = [0x58, 0xcc, 0x02]; // brand green
const WHITE = [0xff, 0xff, 0xff];

function crc32(buf) {
  let c;
  const table = crc32.table || (crc32.table = (() => {
    const t = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
      c = n;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      t[n] = c >>> 0;
    }
    return t;
  })());
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) crc = table[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuf = Buffer.from(type, "ascii");
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

// Simple 5x7 bitmap font for "NL" (1 = pixel on)
const N = [
  "1...1",
  "11..1",
  "1.1.1",
  "1..11",
  "1...1",
  "1...1",
  "1...1",
];
const L = [
  "1....",
  "1....",
  "1....",
  "1....",
  "1....",
  "1....",
  "11111",
];

function drawLetter(pixels, size, letter, offsetX, offsetY, scale, color) {
  for (let ry = 0; ry < letter.length; ry++) {
    for (let rx = 0; rx < letter[ry].length; rx++) {
      if (letter[ry][rx] !== "1") continue;
      for (let sy = 0; sy < scale; sy++) {
        for (let sx = 0; sx < scale; sx++) {
          const x = offsetX + rx * scale + sx;
          const y = offsetY + ry * scale + sy;
          if (x < 0 || y < 0 || x >= size || y >= size) continue;
          const idx = (y * size + x) * 3;
          pixels[idx] = color[0];
          pixels[idx + 1] = color[1];
          pixels[idx + 2] = color[2];
        }
      }
    }
  }
}

function generateIcon(size) {
  const pixels = Buffer.alloc(size * size * 3);
  // Fill background with rounded-ish square (just solid fill — manifest icons get masked by the OS anyway)
  for (let i = 0; i < pixels.length; i += 3) {
    pixels[i] = GREEN[0];
    pixels[i + 1] = GREEN[1];
    pixels[i + 2] = GREEN[2];
  }

  const scale = Math.max(1, Math.floor(size / 22));
  const letterWidth = 5 * scale;
  const gap = 2 * scale;
  const totalWidth = letterWidth * 2 + gap;
  const totalHeight = 7 * scale;
  const startX = Math.floor((size - totalWidth) / 2);
  const startY = Math.floor((size - totalHeight) / 2);

  drawLetter(pixels, size, N, startX, startY, scale, WHITE);
  drawLetter(pixels, size, L, startX + letterWidth + gap, startY, scale, WHITE);

  // Raw scanlines with filter byte 0 prefix per row
  const raw = Buffer.alloc((size * 3 + 1) * size);
  for (let y = 0; y < size; y++) {
    raw[y * (size * 3 + 1)] = 0;
    pixels.copy(raw, y * (size * 3 + 1) + 1, y * size * 3, (y + 1) * size * 3);
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // color type: RGB
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const idat = deflateSync(raw);

  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const png = Buffer.concat([
    signature,
    chunk("IHDR", ihdr),
    chunk("IDAT", idat),
    chunk("IEND", Buffer.alloc(0)),
  ]);
  return png;
}

writeFileSync("public/icon-192.png", generateIcon(192));
writeFileSync("public/icon-512.png", generateIcon(512));
writeFileSync("public/apple-touch-icon.png", generateIcon(180));
console.log("Icons generated.");
