//define parent element
var parentElement = document.getElementById('ochreTableBody');
//define API url
var url = "https://ochre.lib.uchicago.edu/ochre?uuid=accd571b-bae3-4d42-93d9-58b65ec79300";

//first function, called on <body>
function loadXML(){
    //chain the next function to create the XHR
    XMLrequest(url);
    console.log('loadXML -- ok');
};

function XMLrequest(link){
    //make the API call and send the results to the next function
    var connect = new XMLHttpRequest();
    connect.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            listTexts(this.responseXML);
        };
    };
    connect.open('GET', link, true);
    connect.send();
    console.log('XML request -- ok');
}

function listTexts(sourceXML){
    //select, parse, and display the data
    console.log(sourceXML);
    var textList = sourceXML.getElementsByTagName('text');
    console.log(textList);
    for (i=0; i < textList.length; i++) {
        //create one row per text
        var tr = document.createElement('tr');
        tr.setAttribute('class', 'ochreTableRows');
        tr.setAttribute('id', 'row_' + i);
        document.getElementById('ochreTableBody').appendChild(tr);
        //populate the cells in the row
        var td = document.createElement('td');
        td.setAttribute('id', 'td_name_'+ i);
        td.textContent = textList[i].children[0].children[0].innerHTML;
        document.getElementById('row_' + i).appendChild(td);
        var td2 = document.createElement('td');
        td2.setAttribute('id', 'td_desc_' + i);
        td2.textContent = textList[i].children[3].innerHTML;
        document.getElementById('row_' + i).appendChild(td2);
        
    }
}
/* 
/*var td3 = document.createElement('td');
        td3.setAttribute('id', 'td_photo_' + i);
        td3.textContent = textList[i].children[4].children[i].innerHTML;
        document.getElementById('row_' + i).appendChild(td3);
var links = textList[i].children[4];
        for (i = 0; i < 2; i++) {
        td3.setAttribute(‘id’, ‘td_photo_’ + i);
        var td3 = document.createElement(‘td’);
        var uuid = links.children[i].attributes[1].nodeValue;
        var url = “http://ochre.lib.uchicago.edu/ochre?uuid=” + uuid + “&preview”;
        td3.setAttribute(‘href’, XMLrequest(url));
        td3.textContent = links.children[i].innerHTML;
        document.getElementById(‘row_’ + i).appendChild(td3);
 */

/*function showImage() {
    var x=document.links;
    var txt = "http://ochre.lib.uchicago.edu/ochre?uuid=";
    var i;
    for (i=0; i<x.length;i++) {
        txt=txt + x[i].href + "&preview";
    }
    document.getElementById("resource").innerHTML = txt;
}

function showImage() {
    document.getElementById('td_name_' + i).href;
}
*/
