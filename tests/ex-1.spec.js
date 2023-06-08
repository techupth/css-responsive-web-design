//tests/[example.spec.js]

// @ts-check
const { test, expect } = require("@playwright/test");
import path from "path";
test("exercise-1-test", async ({ page }) => {
  const currentPath = path.join(process.cwd(), "ex-1/index.html"); // change [Folder] to name of folder to test.

  const url = "file:///" + currentPath;
  await page.setViewportSize({
    width: 375, //width browser of test
    height: 1080, // height browser of test
  });
  await page.goto(url);
  expect(
    await page.screenshot({
      fullPage: true,
    })
  ).toMatchSnapshot({
    name: "ex-1-result.png", // ['example'] should be same file name, must include .png
    threshold: 0.5, // you can adjust to fit each hackhour
    maxDiffPixels: 30000, //you can adjust to fit each hackhour
    maxDiffPixelRatio: 0.2, //you can adjust to fit each hackhour
  });
});

//
