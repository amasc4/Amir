function swap(array, firstIndex, secondIndex){

    var temp = array[firstIndex];

    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

function bubbleSort(array){
    var maxLength = array.length;
    for(var i = maxLength - 1; 0>=0; i--){
        for(var j = maxLength-1; j>=0; j--){
            if(array[j] < array[j-1]){
                swap(array, j, j-1);
            }
        }
    }
    return array
}



var tanashaSneaker = [
    {
        name: "sneaker1",
        priceUSD: 130
    },
    {
        name: "sneaker2",
        priceUSD: 45
    },
    {
        name: "sneaker3",
        priceUSD: 5000
    }
];

var prices = tanashaSneaker.map(function (x){
    return x["priceUSD"];
});

//console.log(prices);
console.log(bubbleSort(prices));