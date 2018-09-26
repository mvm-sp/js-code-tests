function groupingDishes(dishes) {

    var aDish = {},
        aName = {};
    for(var dish of dishes.sort()) {
        var meal = dish[0];
        for(var ix = 1; ix<dish.length; ++ix) {
            var ingred = dish[ix].replace(/\s/g, '_');
            aName[ingred] = dish[ix];
            
            if(aDish[ingred])
                aDish[ingred].push(meal);
            else
                aDish[ingred] = [meal];
        }
    }
    

    var ret = [];
    for(var c in aDish)
        if(aDish[c].length>1)
            ret.push([aName[c], ...aDish[c]]);
    
    //Sort the final output
    return ret.sort( (a,b) => a[0]<b[0] ? -1 : a[0]>b[0] ? 1 : 0 );
}
