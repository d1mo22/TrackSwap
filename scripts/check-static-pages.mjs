import { readFileSync } from "node:fs";
import { test } from "node:test";
import assert from "node:assert/strict";

const pages = ["trackswap-cinematic.html", "trackswap-brutalist.html"];

for (const page of pages) {
  const html = readFileSync(new URL(`../${page}`, import.meta.url), "utf8");

  test(`${page} has no dead buttons and supports demo bookings`, () => {
    assert.match(html, /id="bookingModal"/);
    assert.match(html, /data-action="open-booking"/);
    assert.match(html, /data-action="open-owner"/);
    assert.match(html, /data-action="open-signin"/);
    assert.match(html, /data-action="search-venues"/);
    assert.match(html, /data-venue-id="jerez"/);
    assert.match(html, /data-venue-id="rota"/);
    assert.match(html, /data-venue-id="lloret"/);
    assert.doesNotMatch(html, /href="#"/);
    assert.doesNotMatch(html, /onsubmit="return false;"/);
  });
}
