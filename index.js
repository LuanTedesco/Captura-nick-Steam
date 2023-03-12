const puppeteer = require('puppeteer');

console.log('Processando...');

async function robo() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const idSteam = 'mastershow1'
  const urlSteam = `https://steamcommunity.com/id/${idSteam}/`
  await page.goto(urlSteam);

  const nameProfile = await page.$(".actual_persona_name");
  const name = await (await nameProfile.getProperty('textContent')).jsonValue();

  console.log(`O nome atual desse perfil é ${name}`);
  await browser.close();
}

robo();