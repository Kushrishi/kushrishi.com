import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
const routes=['/','/cv','/research/truemargin','/research/model-regression-forensics','/projects/autonomy-simulation-lab','/projects/prairiereach'];
for(const width of [320,390,768,1440]){
 test(`all pages remain readable at ${width}px`,async({page})=>{
  await page.setViewportSize({width,height:900});
  for(const route of routes){
   const response=await page.goto(route);expect(response?.status()).toBe(200);
   await expect(page.locator('h1')).toHaveCount(1);
   const overflow=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,elements:[...document.querySelectorAll('body *')].filter(e=>e.getBoundingClientRect().right>innerWidth+1).slice(0,8).map(e=>({tag:e.tagName,class:e.className,right:e.getBoundingClientRect().right}))}));
   expect(overflow.scroll,JSON.stringify({route,...overflow})).toBeLessThanOrEqual(width);
   expect(await page.locator('body').innerText()).not.toContain('\u2014');
   await expect(page.locator('main')).toBeVisible();
  }
 });
}
test('comparison selection changes the recorded values and remains keyboard accessible',async({page})=>{
 await page.goto('/');
 await page.getByLabel('Compare ensemble spread with').selectOption('residual');
 await page.getByLabel('Inspect anatomy').selectOption('1');
 await expect(page.locator('[aria-live="polite"]')).toContainText('0.610');
 await expect(page.locator('[aria-live="polite"]')).toContainText('0.560');
 await page.getByLabel('Compare ensemble spread with').focus();
 await expect(page.getByLabel('Compare ensemble spread with')).toBeFocused();
 await page.getByText('Data and provenance',{exact:true}).click();
 await expect(page.getByRole('link',{name:'Source CSV',exact:true})).toBeVisible();
 await expect(page.getByRole('table')).toHaveCount(2);
});
test('WCAG automated checks on all routes',async({page})=>{
 for(const route of routes){await page.goto(route);const result=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa']).analyze();expect(result.violations).toEqual([]);}
});
test('reduced motion removes graphical transitions',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/');
 expect(await page.locator('circle').first().evaluate(e=>getComputedStyle(e).transitionDuration)).toBe('0s');
});
test('recorded values and navigation are present without JavaScript',async({browser})=>{
 const context=await browser.newContext({javaScriptEnabled:false});const page=await context.newPage();await page.goto('http://127.0.0.1:3011/');
 await expect(page.getByRole('heading',{name:'Kush Rishi',exact:true})).toBeVisible();
 await page.getByText('Data and provenance',{exact:true}).click();
 await expect(page.getByRole('link',{name:'Source CSV',exact:true})).toBeVisible();
 await context.close();
});
