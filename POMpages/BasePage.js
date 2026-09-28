export class BasePage{

    constructor(page){
        this.page=page
    }

    async retry(action, errorMsg, retries=3){
        for(let i=0;i<retries;i++){
            try{
                await action()
                return
            }catch(error){
                if(i===retries-1){
                    await this.page.screenshot({
                        path:`error-${Date.now()}.png`,
                        fullPage:true
                    })
                }
                throw new Error(`${error}:${error.message}`)
            }

            await new Promise(res=>setTimeout(res, 500))
        }

    }

    async navigation(url){
        try{
            await this.page.goto(url, {waitUntil:'domcontentloaded'})
        }catch(error){
            console.error(`navigation failed on ${url}`);
            
        }
    }

    async click(locator, name='element'){
        await this.retry(async ()=>{
            await locator.waitFor({state:'visible'})
            await locator.click()
        },`click failed on ${name}`)
    }

    async fill(locator,value,name='field'){
        await this.retry(async ()=>{
            await locator.waitFor({state:'visible'})
            await locator.fill(value)
        },`fill failed on ${name}`)
    }


}