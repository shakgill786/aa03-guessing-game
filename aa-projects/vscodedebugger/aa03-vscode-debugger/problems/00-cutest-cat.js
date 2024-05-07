/*

Fix the `cutestCat` function. Should return the cat with the highest `cuteness`
rating.
*/


function cutestCat(cats) {
  let cutest;
  let i = 0;
  while (i < cats.length) {
    const cat = cats[i];
    if (cat > cutest) {
      cutest = cat.cuteness;
    }
    i++;
  }

  return cutest;

}
/*function cutestCat(cats) {
  let cutest;
  let i = 0;

  while (i < cats.length) {
    const cat = cats[i];
    if (cutest === undefined || cat.cuteness > cutest.cuteness) {
      cutest = cat;
    }
    i++;
  }

  return cutest;
}

1. We initialize the `cutest` variable without setting any specific value to it, 
allowing us to handle the evaluation more accurately.
2. We compare the `cutest` object's `cuteness` property directly with the current 
cat's `cuteness` property rather than comparing the cats themselves. This ensures 
that we are comparing the correct values and choosing the cat with the highest 
cuteness rating.
3. We check if `cutest` is `undefined` to correctly handle the comparison for 
the first iteration and accurately update the `cutest` variable.*/

const cats = [
  { name: 'Fluffy', cuteness: 9 },
  { name: 'Princess', cuteness: 6 },
  { name: 'Tiger', cuteness: 7 },
  { name: 'Indie', cuteness: 5 },
]

console.log(cutestCat(cats)); // { name: 'Fluffy', cuteness: 9 }