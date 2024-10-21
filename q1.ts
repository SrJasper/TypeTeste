import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const Items = [
  { name: 'pedra', value: 1 },
  { name: 'corda', value: 2 },
  { name: 'agua', value: 5 }
];

function packSize  (): Promise <number> {
  return new Promise ((resolve) => {
    rl.question('Digite o tamanho da mochila: ', (InputPackSize) => {
      const pack = parseFloat(InputPackSize);
      if(isNaN(pack)){
        console.log('Digite um valor válido')
        resolve(packSize())
      } else {
        resolve(pack)
      }
    })
  })
}

function BiggerItem (): Promise <number> {
  let biggerItem: number = 0;  
  const itemList = Object.values(Items);
  let itemToRemove: number;
  
  return new Promise((resolve) => {
    for(let i = 0; i < Object.keys(Items).length; i++){
      if(biggerItem < itemList[i].value){
        biggerItem = itemList[i].value;
        itemToRemove = i;
      }
      else if (Object.keys(Items).length === 0) {
        resolve (0);
      }
    }
   
    Items.splice(itemToRemove)
    resolve(biggerItem);
  })
}

const mochila = async () => {

  const pack = await packSize();
  let packSizeLeft = pack;

  const itemList = Object.values(Items);

  let biggerItem = await BiggerItem();

  while(biggerItem !== 0){
    if(packSizeLeft < biggerItem){
      biggerItem = await BiggerItem();
    } else {
      packSizeLeft = packSizeLeft - biggerItem;
      console.log(biggerItem);
    }
  }

  
}  

mochila();