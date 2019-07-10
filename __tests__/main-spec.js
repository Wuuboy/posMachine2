const caculateItemCounts = require('../main');
const  itemCount = {"0001": 1, "0003": 2, "0005": 1}
it ('should add two numbers', () => {
    expect(caculateItemCounts(['0001', '0003', '0005', '0003'])).toEqual(itemCount);
});

const getAllData = require('../main');
const resultData = [
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
it ('should add two numbers', () => {
    expect(getAllData()).toEqual(resultData);
});

const itemCountsDict = {"0001": 1, "0003": 2, "0005": 1}
const itemPrice = [{"count": 1, "name": "Coca Cola", "price": 3}, {"count": 2, "name": "Pepsi-Cola", "price": 5}, {"count": 1, "name": "Dr Pepper", "price": 7}]
const getSingleItemPrice = require('../main');
it ('should add two numbers', () => {
    expect(getSingleItemPrice(itemCountsDict)).toEqual(itemPrice);
});

const caculateTotalPrice = require('../main');
it ('should add two numbers', () => {
    expect(caculateTotalPrice()).toBe(20);
});

const createReceipt = require('../main');
it ('should add two numbers', () => {
    expect(createReceipt()).toBe(`Receipts
Coca Cola 3 1
Pepsi-Cola 5 2
Dr Pepper 7 1
Price: 20`);
});


const createReceipt = require('../main');
it ('should add two numbers', () => {
    expect(createReceipt()).toBe(`Receipts
Coca Cola 3 1
Pepsi-Cola 5 2
Dr Pepper 7 1
Price: 20`);
});


const printErrorMessage = require('../main');
it ('should add two numbers', () => {
    expect(printErrorMessage()).toBe("ERROR");
});