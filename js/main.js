function submit_search(text){
  var ele = $('searchengine');
  // console.log(ele)
  var wait = ele.getAttribute('searchurl');
  window.open(wait.replace('%q',text))
}
function chooseme(){
  var url = event.srcElement.getAttribute('searchurl'),
      text = event.srcElement.innerText,
      ele = $$('choose')[0];
  ele.innerText = text;
  ele.setAttribute('searchurl',url)
}
$('searchinput').onkeydown = function(){
  tt()
}
function tt(){
  if (event.keyCode == 13){
    $("submitbutton").click()
  }
};
