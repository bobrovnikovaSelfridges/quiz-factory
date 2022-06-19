// https://www.selfridges.com/GB/en/cat/miaou-miaou-x-paloma-thais-semi-sheer-graphic-print-stretch-woven-maxi-dress_R03937408/#colour=Baby%20Plaid%20Limon
// if need to open https://www.digitalocean.com/community/tutorials/how-to-scrape-a-website-using-node-js-and-puppeteer
// node src/services/get-mock-data.js

const puppeteer = require("puppeteer-extra");
const fs = require("fs");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");

puppeteer.use(StealthPlugin());
// const puppeteer = require("puppeteer-extra");
// const fs = require("fs");
// const StealthPlugin = require("puppeteer-extra-plugin-stealth");
// const stealth = StealthPlugin();
// // Remove this specific stealth plugin from the default set
// stealth.enabledEvasions.delete("user-agent-override");
// puppeteer.use(stealth);

async function startBrowser() {
  let browser;
  try {
    console.log("Opening the browser......");
    browser = await puppeteer.launch({
      headless: false,
      // slowMo: 500,
      // @TODO: better do this in specific places rather than on every action
      // defaultViewport: null,
      // ignoreHTTPSErrors: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
  } catch (err) {
    console.log("Could not create a browser instance => : ", err);
  }
  return browser;
}

const mocks = {};
async function main() {
  let browser = await startBrowser();
  console.log("startBrowser ✅");

  if (browser) {
    let page = await browser.newPage();

    const imgSelector = ".c-prod-card__images > img";
    const btnShowMore = '[data-js-action="plpListingShowCta"]';
    for (const searchWord of keyWords) {
      await page.goto(
        `https://www.selfridges.com/GB/en/cat/?freeText=${searchWord}`
      );

      console.log(`Navigate to ${searchWord} url ✅`);
      await page.waitForSelector("[data-js-plp-scroll]");
      await page.waitForSelector(imgSelector);

      if ((await page.$(btnShowMore)) !== null) {
        await page.waitForSelector(btnShowMore);
        await page.$eval(btnShowMore, (el) => el.click());
        console.log("check the more btn ✅");
        if ((await page.$(btnShowMore)) !== null) {
          await page.waitForSelector(btnShowMore);
          await page.$eval(btnShowMore, (el) => el.click());
        }
      }

      let urls = await page.$$eval(
        "[data-js-plp-scroll]",
        (links, searchWord) => {
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

            const img1El = el.querySelector(
              ".c-prod-card.--plp .c-prod-card__images-image"
            );
            const img1 = img1El.dataset.src || img1El.src;
            const img2EL = el.querySelector(
              ".c-prod-card.--plp .c-prod-card__images-image"
            );
            const img2 = img2EL.dataset.src || img2EL.src;
            const priceElement = el.querySelector(
              ".c-prod-card__cta-box-price"
            );
            const price = priceElement ? priceElement.innerText : "";
            resultsOfScrape.push({
              title,
              description,
              img: img1 || img2,

              link,
              price,
              id: searchWord + "_" + id,
            });
          });
          return resultsOfScrape;
        }
      );

      mocks[searchWord] = urls;
    }
  }
  console.log("final mocks ✅: ", { mocks });

  const json = JSON.stringify(mocks);
  fs.writeFile("mocks.json", json, "utf8", (err) => {
    if (err) throw err;
    console.log("The file has been saved! ✅");
  });
}

main().catch((e) => console.log("ERROR! " + e)); // need to somehow exit browser here?

const keyWords = [
  "cozy",
  "tin",
  "handmade",
  "grill",
  "DR. MARTENS",
  "pool",
  "chocolate gift",
  "fruit",

  // "play centre",
  // "water slide",
  // "CHOCOLATE",
  // "warm",
  // "soft",
  // "SELFRIDGES SELECTION",
  // "the tech bar",
  // "controller",
  // "binoculars",
  // "sustainable",
  // "ecology",
  // "planet",
  // "tin",
  // "shortbread",
  // "selection",
  // "disney",
  // "handmade",
  // "potato",
  // "grill",
  // "sweets",
  // "sweatshirt",
  // "hoodie",
  // "tea",
  // "honey",
  // "marmalade",
  // "CHOCOLATE BOX",
  // "watches",
  // "set",
  // "luxury",
  // "box",
  // "kit",
  // "rose",
  // "Game of Thrones",
  // "ANCIENT",

  // "box",
  // "pool",
  // "rome",
  // "games",
  // "mindfulness",
  // "Bio-Synergy",
  // "BOTTLE OPENER",
  // "DR. MARTENS",
  // "black bag",
  // "earth",
  // "fruit",
  // "fresh",
  // "rainbow",
  // "beer",
  // "gentlemen",
  // "lazy",
  // "gaming",
  // "aesthetic",
  // "design",
  // "satin",
  // "apple",

  // "chocolate gift",
  // "coffee",
  // "chocolate",
  // "fragrance",
  // "funny",
  // "bundle",
  // "set",
  // "cozy",
];

// const randomiserGifts = [
//   "CHOCOLATEs",
//   "watches",
//   "set",
//   "luxury",
//   "box",
//   "kit",
// ];

// const pallette = ["white", "red", "blue", "green", "pink"];
