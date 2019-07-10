const items = ['0001', '0003', '0005', '0003']

//计算item数量
caculateItemCounts = (items) => {
    let itemCountsDict = {}
    for(let i=0;i<items.length;i++){
        if(items[i] in itemCountsDict){
            itemCountsDict[items[i]]++
        }else {
            itemCountsDict[items[i]]=1
        }
    }
    console.log(itemCountsDict)
    return itemCountsDict
}
module.exports = caculateItemCounts;
// 获取所有数据
getAllData=()=>{
    const allData = [
        {"id": "0001", "name" : "Coca Cola", "price": 3},
        {"id": "0002", "name" : "Diet Coke", "price": 4},
        {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
        {"id": "0004", "name" : "Mountain Dew", "price": 6},
        {"id": "0005", "name" : "Dr Pepper", "price": 7},
        {"id": "0006", "name" : "Sprite", "price": 8},
        {"id": "0007", "name" : "Diet Pepsi", "price": 9},
        {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
        {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
        {"id": "0010", "name" : "Fanta", "price": 12}
    ]
    return allData
}
module.exports = getAllData;

//获得单个item的价格
getSingleItemPrice=(itemCountsDict)=> {
    const allData = getAllData()
    const result = new Array()
    for (let key in itemCountsDict){
        for(let i=0;i<allData.length;i++){
           if (key == allData[i]["id"]){
               const singleItemPrice = {
                   name:allData[i]["name"],
                   price:allData[i]["price"],
                   count:itemCountsDict[key]
               }
               result.push(singleItemPrice)
               break
           }
        }
    }
    return result
}
module.exports = getSingleItemPrice;

//计算总价
caculateTotalPrice=()=> {
    const itemCountsDict = caculateItemCounts(items)
    const itemInfo = getSingleItemPrice(itemCountsDict)
    let totalPrice = 0
    for (let i = 0; i < itemInfo.length; i++) {
        totalPrice += itemInfo[i]["count"] * itemInfo[i]["price"]
    }
    return totalPrice
}
module.exports = caculateTotalPrice;

//创建receiptTemplate
createReceipt=()=>{
    const itemCountsDict = caculateItemCounts(items)
    const itemInfo = getSingleItemPrice(itemCountsDict)
    const totalPrice = caculateTotalPrice()
    let result = 'Receipts\n'
    for(let i=0;i<itemInfo.length;i++) {
        result += `${itemInfo[i]["name"]} ${itemInfo[i]["price"]} ${itemInfo[i]["count"]}\n`
    }
    result += `Price: ${totalPrice}`
    return result
}
module.exports = createReceipt;

//posMachine打印
printReceipt=()=>{
    let result
    try{
        result = createReceipt()
    }catch (e) {
        result = printErrorMessage()
    }
   return result

}
module.exports = printReceipt;

//打印错误信息
printErrorMessage=()=>{
    return "ERROR"
}
module.exports = printErrorMessage;