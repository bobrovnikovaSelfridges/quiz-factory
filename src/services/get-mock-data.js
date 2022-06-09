// https://www.selfridges.com/GB/en/cat/miaou-miaou-x-paloma-thais-semi-sheer-graphic-print-stretch-woven-maxi-dress_R03937408/#colour=Baby%20Plaid%20Limon
// if need to open https://www.digitalocean.com/community/tutorials/how-to-scrape-a-website-using-node-js-and-puppeteer
// node src/services/get-mock-data.js

const puppeteer = require("puppeteer-extra");
const fs = require("fs");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");

puppeteer.use(StealthPlugin());

async function startBrowser() {
  let browser;
  try {
    console.log("Opening the browser......");
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 500,
      // @TODO: better do this in specific places rather than on every action
      defaultViewport: null,
      ignoreHTTPSErrors: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
  } catch (err) {
    console.log("Could not create a browser instance => : ", err);
  }
  return browser;
}

const randomiserGifts = [
  "CHOCOLATEs",
  "watches",
  "set",
  "luxury",
  "box",
  "kit",
];

const pallette = ["white", "red", "blue", "green", "pink"];

const mocks = {};
async function main() {
  let browser = await startBrowser();
  console.log("startBrowser done");

  if (browser) {
    let page = await browser.newPage();
    const searchWords = pallette;
    const imgSelector = ".c-prod-card__images > img";
    const btnShowMore = '[data-js-action="plpListingShowCta"]';
    for (const searchWord of searchWords) {
      await page.goto(
        `https://www.selfridges.com/GB/en/cat/?freeText=${searchWord}&srch=Y&pn=3`
      );

      console.log(`Navigating to ${searchWord} url`);
      await page.waitForSelector("[data-js-plp-scroll]");
      await page.waitForSelector(imgSelector);

      await page.$eval(btnShowMore, (el) => el.click());
      await page.waitForSelector(btnShowMore);
      await page.$eval(btnShowMore, (el) => el.click());
      await page.waitForSelector(btnShowMore);
      await page.$eval(btnShowMore, (el) => el.click());
      await page.waitForSelector(btnShowMore);

      console.log(`ask ${searchWord} search to show more`);

      let urls = await page.$$eval(
        "[data-js-plp-scroll]",
        (links, searchWord) => {
          const imgSelector = ".c-prod-card__images > img";

          // Extract the links from the data
          const resultsOfScrape = [];
          links.forEach((el, id) => {
            const link = el.querySelector("[data-js-plp-scroll] > a").href;
            const titleElement = el.querySelector(
              ".c-prod-card__cta-box-product-title"
            );
            const titleAndDescription = titleElement
              ? titleElement.innerText
              : "";
            const title = titleAndDescription.split("\n")[0];

            const descriptionElement = el.querySelector(
              ".c-prod-card__cta-box-description"
            );
            const description = descriptionElement
              ? descriptionElement.innerText
              : "";
            const img = el.querySelector(imgSelector).src;

            const imgV2 = "https:" + el.querySelector(imgSelector).dataset.src;

            const priceElement = el.querySelector(
              ".c-prod-card__cta-box-price"
            );
            const price = priceElement ? priceElement.innerText : "";
            resultsOfScrape.push({
              title,
              description,
              img: img || imgV2,
              link,
              price,
              id: searchWord + "_" + id,
            });
          });
          return resultsOfScrape;
        },
        searchWord
      );

      mocks[searchWord] = urls;
    }
  }
  console.log("final mocks are: ", { mocks });

  console.log(mocks);
  const json = JSON.stringify(mocks);
  console.log(json);

  fs.writeFile("mocks.json", json, "utf8", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
}

main().catch((e) => console.log("ERROR! " + e)); // need to somehow exit browser here?
