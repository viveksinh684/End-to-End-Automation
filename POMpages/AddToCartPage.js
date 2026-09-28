import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class AddToCartPage extends BasePage{

    constructor(page){
        super(page)

        this.allavlprd=page.locator('.hrefch')

    }

    // async addtocart(productname){
    //     const allprd=await this.allavlprd.allTextContents()
    //     if(allprd.includes(productname)){
    //         await this.click(this.page.getByRole('link', { name: 'Nexus 6' }),'add to cart')
    //     }

    //     this.page.once('dialog',async dialog=>{

    //         expect(dialog.message()).toContain('added')
    //         await dialog.accept()
    //     })


    //     await this.click(this.page.getByRole('link', { name: 'Add to cart' }))
    // }

        async addtocart(productname){
            await this.allavlprd.first().waitFor()
            const allproduct=await this.allavlprd.all()
            for(const product of allproduct){

                const textprd= await product.textContent()
                if(textprd==='Nexus 6'){
                    await product.click()
                    break
                }
            }
            this.page.once('dialog',async dialog=>{

            expect(dialog.message()).toContain('added')
            await dialog.accept()
        })
            await this.click(this.page.getByRole('link', { name: 'Add to cart' }))



        }



}