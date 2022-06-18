// https://www.selfridges.com/GB/en/cat/miaou-miaou-x-paloma-thais-semi-sheer-graphic-print-stretch-woven-maxi-dress_R03937408/#colour=Baby%20Plaid%20Limon
// if need to open https://www.digitalocean.com/community/tutorials/how-to-scrape-a-website-using-node-js-and-puppeteer
// node src/services/get-mock-data.js

const puppeteer = require("puppeteer-extra");
const fs = require("fs");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const stealth = StealthPlugin();
// Remove this specific stealth plugin from the default set
stealth.enabledEvasions.delete("user-agent-override");
puppeteer.use(stealth);

async function startBrowser() {
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 500,
      // @TODO: better do this in specific places rather than on every action
      defaultViewport: null,
      ignoreHTTPSErrors: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    console.log("Opening the browser... ✅");
  } catch (err) {
    console.log("Could not create a browser instance => : ", err);
  }
  return browser;
}

const keyWords = [
  "CHOCOLATE",
  "warm",
  "soft",
  "happy hop",
  "SELFRIDGES SELECTION",
  "the tech bar",
  "controller",
  "binoculars",
  "sustainable",
  "ecology",
  "planet",
  "tin",
  "shortbread",
  "selection",
  "disney",
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

const mocks = {};
async function main() {
  let browser = await startBrowser();
  console.log("startBrowser === done");

  if (browser) {
    let page = await browser.newPage();

    for (const searchWord of keyWords) {
      console.log(`Navigated to ${searchWord} url ✅`);
      await page.goto(
        `https://www.selfridges.com/GB/en/cat/?freeText=${searchWord}&srch=Y&pn=3`
      );

      await page.waitForSelector(".c-prod-card.--plp ");

      const btnShowMore = '[data-js-action="plpListingShowCta"]';
      if ((await page.$(btnShowMore)) !== null) {
        await page.waitForSelector(btnShowMore);
        await page.$eval(btnShowMore, (el) => el.click());
        if ((await page.$(btnShowMore)) !== null) {
          await page.waitForSelector(btnShowMore);
          await page.$eval(btnShowMore, (el) => el.click());
        }
      }
      console.log(`ask ${searchWord} search to show more`);

      let urls = await page.$$eval(
        "[data-js-plp-scroll]",
        (links, searchWord) => {
          const resultsOfScrape = [];
          links.forEach((el, id) => {
            const link = el.querySelector("[data-js-plp-scroll] > a").href;

            const img1El = el.querySelector(
              ".c-prod-card.--plp .c-prod-card__images-image"
            );
            const img1 = img1El.dataset.src || img1El.src;
            const img2EL = el.querySelector(
              ".c-prod-card.--plp .c-prod-card__images-image"
            );
            const img2 = img2EL.dataset.src || img2EL.src;

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
      //  await getCardsDataOnPage(page, searchWord);

      mocks[searchWord] = urls;
    }
  }

  const json = JSON.stringify(mocks);

  fs.writeFile("mocks.json", json, "utf8", (err) => {
    if (err) throw err;
    console.log("The file has been saved! ✅");
  });
}

main().catch((e) => console.log("ERROR! " + e)); // need to somehow exit browser here?
