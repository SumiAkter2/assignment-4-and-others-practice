//Problem-1:
function anaToVori(ana){
    // let vori = ana / 16 ;
    
   if(goldAna<0){
    console.log('enter valid number')
   }
   else{
    let vori = ana / 16 ;
     return vori;
   }
 }
 let goldAna = 64;
 let vori = anaToVori(goldAna);
  console.log(vori);





//problem-2:

function pandaCost(singaraQuantity, samuchaQuantity, jilapiQuantity){
    const perSingaraPrice= 7;
    const perSamuchaPrice= 10; 
    const perJilapiPrice= 15;

    //calculation
    
    if(samuchaQuantity<0 && singaraQuantity<0 && jilapiQuantity<0){
    console.log('please enter some Quantity');
   
    }
     else if(singaraQuantity>0 && jilapiQuantity>0 && samuchaQuantity<0){
         const  totalPrice = (singaraQuantity*perSingaraPrice)+(0*perSamuchaPrice)+(jilapiQuantity*perJilapiPrice);
     return totalPrice;
     }
     else if(samuchaQuantity>0 && jilapiQuantity>0 && singaraQuantity<0){
        const  totalPrice = (0*perSingaraPrice)+(samuchaQuantity*perSamuchaPrice)+(jilapiQuantity*perJilapiPrice);
    return totalPrice;
    }
     else if(samuchaQuantity>0 && singaraQuantity>0 && jilapiQuantity<0){
         const  totalPrice = (singaraQuantity*perSingaraPrice)+(samuchaQuantity*perSamuchaPrice)+(0*perJilapiPrice);
    return totalPrice;
    }
    else{
        const  totalPrice = (singaraQuantity*perSingaraPrice)+(samuchaQuantity*perSamuchaPrice)+(jilapiQuantity*perJilapiPrice);
         return totalPrice;
    }
}

const totalfood=pandaCost(10,20,10);
console.log(totalfood);







//problem-3:

function picnicBudget(members){
  const  firstGroupTaka= 5000;
  const secondGroupTaka =4000;
  const thirdGroupTaka  =3000;
    if (members<0){
        console.log('please enter valid members')
    }

    else if (members<=100){
        const firstGroup = members*firstGroupTaka;
        return firstGroup;
    }
    
    else if (members<=200){
        const firstGroupBudget=100*firstGroupTaka;
        const secondGroupBudget=(members-100)*secondGroupTaka;
        const totalBudget=firstGroupBudget+secondGroupBudget;
        return totalBudget;
    }
    else{
        const firstGroupBudget=100*firstGroupTaka;
        const secondGroupBudget=100*secondGroupTaka;
        const thirdGroupBudget=(members-200)*thirdGroupTaka;
        const totalBudget=firstGroupBudget+secondGroupBudget+thirdGroupBudget;
        return totalBudget;
    }
}
const budget= picnicBudget(300);
console.log(budget);







//problem-4:
function oddFriend(friends){
   
    let names=0;
 for(let i=0; i<friends.length; i++ ){
      const element = friends[i];
 if (element.length % 2 != 0){
    names=element;
    break;
 }
 
   }
   return names;
}
const myFriends=['lili', 'ria', 'rabeya', 'kiara' , 'kajol', 'rini', 'jui'];
const bestFriend = oddFriend(myFriends);
console.log(bestFriend);