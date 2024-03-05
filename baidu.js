const webdriver = require("selenium-webdriver");
const By = webdriver.By;
// until 模块提供了一些条件等待（Wait）的方法
const until = webdriver.until;

// let driver_fx = new webdriver.Builder().forBrowser("firefox").build();

// let driver_chr = new webdriver.Builder().forBrowser("chrome").build();

let driver_edge = new webdriver.Builder().forBrowser("MicrosoftEdge").build();
// forBrowser(name, version, opt)
// name 浏览器名称， version 版本， opt 系统版本
// let driver_edge = new webdriver.Builder().forBrowser("MicrosoftEdge", "46", "MAC").build();

// searchTest(driver_fx);
// searchTest(driver_chr);
testEdge(driver_edge);

/*

 */
function searchTest(driver) {
    driver.get("http://www.baidu.com");
    driver.findElement(By.name("wd")).sendKeys("webdriver");

    driver.sleep(1000).then(() => {
        driver.findElement(By.name("wd")).sendKeys(webdriver.Key.TAB);
    });

    driver.findElement(By.id("su")).click();

    driver.sleep(2000).then(() => {
        driver.getTitle().then((title) => {
            if (title === "百度一下，你就知道") {
                console.log("Test passed");
            } else {
                console.log("Test failed");
            }
            driver.quit();
        });
    });
}



function testEdge(driver) {
    driver.get("https://www.baidu.com")

    
    driver.sleep(2000).then(async () => {
        
        let btn = await driver.findElement(By.id('su'))
        // console.log(typeof btn);
        let btnValue = await btn.getAttribute('value')

        console.log(`btnValue=${btnValue}`);
        driver.quit();
    }).catch((error => {
        console.log(error + '111');

        driver.quit();
    }))
}