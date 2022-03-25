function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

//start of finding next day
var days = 4; // Days you want to subtract
var date = new Date();
var last = new Date(date.getTime() + (days * 24 * 60 * 60 * 1000));
var day =last.getDate();
var x;
ans = document.getElementsByClassName("day");
for (var i = 0; i < ans.length; i++){
    if (ans[i].innerText == day){
        x = ans[i]
    }
}
//end of finding next day

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var date_on_calendar = x;
var book_6to7 = '//*[@id="slot_div_35566"]/div[1]/label/span'
try{
    date_on_calendar.click();
    document.getElementById("select-type").click(); 
}
catch(err){
    getElementByXpath(book_6to7).click();
    document.getElementById("bookNow").click();
}
    
