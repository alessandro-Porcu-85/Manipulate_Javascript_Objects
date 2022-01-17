var products = [{
        id: 1,
        name: 'coke',
        price: 7,

    },
    {
        id: 2,
        name: 'chips',
        price: 2.5,

    }

];




var dates = {
    date_1: {
        value: '2021-11-15',

    },
    date_2: {
        value: '2019-12-29',

    },
    date_3: {
        value: '2020-02-22',


    },
    date_4: {
        value: '2020-01-03',

    },
};

var total = 0; //<---define variable to sum the total


function calculateTotalPrice() {

    //initialize variable total = 0;
    let total = 0;

    products.forEach(item => {

        total = total + item.price;
        //total += item.price

    });

    console.log("The total price of items selected is:" + ' ' + total);


}


function showItemPrice() {

    products.forEach(item => {

        console.log('The item' + ' ' + item.name + ' ' + 'has a price of:' + ' ' + item.price + '$')

    });

}

function showDate() {

    for (var i = 0; i < products.length; i++) {


    }
    console.log(dates.date_1, dates.date_2, dates.date_3, dates.date_4);
}


//--REVENUE 1--//
function getRevenue_1() {

    let amount = 0;

    for (var i = 0; i < products.length; i++) {



        amount = (products[0].price * 2) + (products[1].price * 2);


        //console.log(dates.date_1); //<--print date 2021-11-15


        console.log('For the day:' + ' ' + dates.date_1.value + ' ' + 'the total amount of item' + ' ' + products[0].name + ' ' + 'plus item' + ' ' + products[1].name + ' ' + 'is:' + ' ' + amount + '$'); //<--print date 2021-11-15

    }
    console.log('The sum is:' + products[0].price + '+' + products[0].price + '+' + products[1].price + '+' + products[1].price);
}

//--REVENUE 2--//
function getRevenue_2() {

    let amount = 0;

    for (var i = 0; i < products.length; i++) {

        if (dates.date_1 == dates.date_1) {

            amount = (products[0].price * 3) + (products[1].price * 3);


            //console.log(dates.date_1); //<--print date 2021-11-15

        }
        console.log('For the day:' + dates.date_2.value + ',' + ' ' + dates.date_4.value + ',' + ' ' + dates.date_3.value + ' ' + 'the total amount of item' + ' ' + products[0].name + ' ' + 'plus item' + ' ' + products[1].name + ' ' + 'is:' + ' ' + amount + '$'); //<--print date 2021-11-15

    }
    console.log('The sum is:' + products[0].price + '+' + products[0].price + '+' + products[0].price + '+' + products[1].price + '+' + products[1].price + '+' + products[1].price);
}


//--REVENUE 3--//
function getRevenue_3() {

    let amount = 0;

    for (var i = 0; i < products.length; i++) {

        if (dates.date_1 == dates.date_1) {

            amount = (products[0].price * 2) + (products[1].price * 4);


            //console.log('dates.date_1'); //<--print date 2021-11-15


        }
        //console.log('REVENUE_3:'); //<--print date 2021-11-15



    }
    console.log('REVENUE_3:');
    console.log('The day' + ' ' + dates.date_2.value + ' has been bought the item' + ' ' + products[1].name + ' of value:' + ' ' + products[1].price + '$'); //<--print date and its purchase
    console.log('The day' + ' ' + dates.date_4.value + ' has been bought the item' + ' ' + products[0].name + ' of value:' + ' ' + products[0].price + '$'); //<--print date and its purchase
    console.log('The day' + ' ' + dates.date_4.value + ' has been bought two times the item' + ' ' + products[1].name + ' of total value:' + ' ' + products[1].price * 2 + '$'); //<--print date and its purchase
    console.log('The day' + ' ' + dates.date_3.value + ' has been bought the item' + ' ' + products[0].name + ' of total value:' + ' ' + products[0].price + '$'); //<--print date and its purchase
    console.log('The day' + ' ' + dates.date_3.value + ' has been bought the item' + ' ' + products[1].name + ' of total value:' + ' ' + products[1].price + '$'); //<--print date and its purchase
    console.log('The sum is:' + products[0].price + '+' + products[0].price + '+' + products[1].price + '+' + products[1].price + '+' + products[1].price + '+' + products[1].price);
    console.log('The total amount of Revenue 3 is:' + ' ' + amount + '$');
}




//--CONSOLE.LOG OUTPUT--//

// Testing the function:
// console.log('revenue1=', getRevenue([
//     "2021-11-15,coke",
//     "2021-11-15,coke",
//     "2021-11-15,chips",
//     "2021-11-15,chips"
// ]));

// console.log('revenue2=', getRevenue([
//     "2019-12-29,coke",
//     "2020-01-03,coke",
//     "2020-01-03,chips",
//     "2020-01-03,chips",
//     "2020-02-22,coke",
//     "2020-02-22,chips"
// ]));

// console.log('revenue3=', getRevenue([
//     "2019-12-29,chips",
//     "2020-01-03,coke",
//     "2020-01-03,chips",
//     "2020-01-03,chips",
//     "2020-02-22,coke",
//     "2020-02-22,chips"
// ])