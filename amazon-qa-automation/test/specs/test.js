   // ./node_modules/.bin/wdio wdio.conf.js

const assert = require('assert');

describe('Amazon', () => {
     
    it('get tablets that cost less than 70$', () => {
        browser.url("https://www.amazon.com");
        browser.setValue('//*[@id="twotabsearchtextbox"]', "tablet");
        browser.element('//*[@class="nav-input"]').click();      
        let tablet_count=0;     
        let tablet_prices = browser.elements(".sx-price-whole").getText();
        let tablet_names = browser.elements(".s-access-title").getText();
        
        for(let i=0; i<tablet_names.length; i++)
        {          
            let price=parseInt(tablet_prices[i]);
            if(tablet_count>14)
            {
                console.log("Done!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                break;
            }
            if(price<70)
            {           
                console.log("number " + (tablet_count+1));
                console.log("name  " + tablet_names[i]);
                console.log("price  " + price + "$");
                console.log("************************************");
                tablet_count++;
            }
            if( i===tablet_names.length-1 && tablet_count<14)
            {
                browser.element('//*[@id="pagnNextString"]').click();
                console.log( "NEXT PAGE ");                    
                tablet_prices = browser.elements(".sx-price-whole").getText();
                tablet_names = browser.elements(".s-access-title").getText();
                i=0;
                //break;
            }               
        }
            
    })
        


})




                    

       
        
    






