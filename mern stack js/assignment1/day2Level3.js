// 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let sentence1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(sentence1.split("love").length-1)

// 2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence2= 'You cannot end a sentence with because because because is a conjunction'
console.log((sentence2.match(/because/g)).length)

// 3. Clean the following text and Ind the most frequent word (hint, use replace and regular expressions).
//  const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is Welcome to#World&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
const sentence3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is Welcome to#World&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
const sentReg = /\W(?<!1)/g;
let sent = sentence3.replace(/ /g, "1");
// console.log(sent);

let finalSent = sent.replace(sentReg, "");
// console.log(finalSent);
let finalfinalSent = finalSent.replace(/1/g, " ");
console.log(finalfinalSent );

//  4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.
let txt = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let numbers = txt.match(/\d+/g)
console.log(numbers)
let totalAnnual = 0;
for(let i=0; i<=numbers.length; i++){
    totalAnnual= totalAnnual+parseInt(numbers)
}
console.log(totalAnnual)

