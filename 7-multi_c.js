const x = parseInt(process.argv[2]);

if (isNaN(x)) {
    console.log("Missing number of occurences");
} else {
    for (let s = 0; s < x; s++) {
        console.log("C is fun");
    }
}