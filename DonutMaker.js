export default class DonutMaker{

    constructor(){
        
        this.DonutCount = 0;
        this.AutoclickCount = 0;
        this.AutoCost= 100;
        this.MultiCost= 15;
        this.MultiplierCount = 0;
        this.AutoBuy = false;
        this.MultiBuy = false;
        this.reloadPage;
    }
    
    click(){
       //Make donuts and multiply autoclicker
        if (this.MultiplierCount === 0){
            this.DonutCount += 1;
        }else{
            this.DonutCount += Math.pow(1.2, this.MultiplierCount);
        }
        
         
        // if (this.DonutCount >= 100){
        //     this.AutoclickCount = true;
        // }
        // if (this.DonutCount >= 10){
        //     this.Multiplier = true;
        // }

        //buy buttons = true
        if (this.DonutCount >= this.AutoCost) {
            this.AutoBuy = true;
        }
        if (this.DonutCount >= this.MultiCost) {
            this.MultiBuy = true;
        }

        console.log(this.DonutCount)

    }

    

    BuyAutoClick(){

        if (this.DonutCount >= this.AutoCost){
            this.DonutCount -= this.AutoCost;
            this.AutoclickCount += 1;
        }
        if (this.DonutCount < this.AutoCost){
            this.AutoBuy = false;
        }
        // if (this.Autoclick === 0){
        //     this.autoCost = false;
        // }
    }

    BuyMultiClick(){

        if (this.DonutCount >= this.MultiCost){
            this.DonutCount -= this.MultiCost;
            this.MultiplierCount += 1;
        }
        if (this.DonutCount < this.MultiCost){
            this.MultiBuy = false;
        }
        if(this.donutCount >= this.MultiCost){
            this.MultiplierCount++
            this.donutCount -= this.MultiCost;
            this.MultiCost = this.MultiCost * 1.1;
        }
    }   

     reloadPage(){
        // resetButton.onclick=
        window.location.reload();

        }
    



}
