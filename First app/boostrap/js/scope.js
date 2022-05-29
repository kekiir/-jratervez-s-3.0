// Global scope.
var globalName = "Joe"; //global name

function somthing() {
    var globalName = "Jack"; //local name, fg-en belül él. Ha fg belül var-al hozok létre 
    // localis változo lesz pl var globalName="Jack". De fg-belül tudok globális változot 
    //át írni pl globalname=piri

    console.log(globalName)

}
somthing();
console.log(globalName);

//ez egy block
{

}

let name = "Sanyi"; // name mint globális változó


{
    let name = "Pisti"; // name mint lokális változó a let block scop-ú
    console.log(name);
}
console.log(name);

// ezért érdemes különböző neveket adni globalis és localis scopeokban 



const NAME1 = "Feri";  //const változók NAGYBETŰVEL

{
    const NAME1 = "Viki";  // a const-ot local blockon belül SEM LEHET MÓDOSÍTANI 
    //pl NAME1="Viki", csak mint új localis const változó pl const NAME1 = "Viki"
    console.log(NAME1);
}
console.log(NAME1);
