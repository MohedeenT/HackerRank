function designerPdfViewer(h, word) {
    // Write your code here

    const positions = word.split('').map((letter)=>letter.charCodeAt()-97);
    let maxHeight = -Infinity;

    for (const position of positions) {
        if (h[position] > maxHeight) maxHeight = h[position];
    }

    return word.length * maxHeight;

}

console.log(designerPdfViewer([1,3,1,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],'abc')); 
