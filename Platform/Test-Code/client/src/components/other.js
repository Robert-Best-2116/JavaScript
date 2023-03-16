

function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeadsSync() {
    let headsCount = 0;
    let attempts = 0;
    while(headsCount < 5) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if(result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
    }
    return `It took ${attempts} tries to flip five "heads"`;
}
console.log( fiveHeadsSync() );
console.log( "This is run after the fiveHeadsSync function completes" );

//using promises 

//need to add in the ability to resolve the solution when it reaches five heads,
//need to add in reject when the coin has been flipped more than 100 times. 
function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}
function fiveHeads() {
    let headsCount = 0;
    let attempts = 0;
    let maxAttempts = 100;
    return new Promise( (resolve, reject) => {
        while(headsCount < 5 && attempts <= maxAttempts) {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if(result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
        }
        if (attempts <= maxAttempts) {
            resolve(`it took ${attempts} tries to flip five "heads"`)
        } else {
            reject(`Attempts have reached ${maxAttempts} attempts`)
        }



    });
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "When does this run now?" );

