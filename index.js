//JSON
const shop ={
    Name:'Alia shop',
    address: 'Ranbir road',
    profit:15000,
    products:['laptop','mobile','pepsi'],
    owner:{
        name:'Alia Bhatt',
        profession:'Actor'
    },
    isExpensive:false
};
const shopStringified = JSON.stringify(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted.owner); 