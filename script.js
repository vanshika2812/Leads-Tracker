const inputBtn= document.getElementById("input-button")
const inputEl=document.getElementById("input-el")
const deleteBtn = document.getElementById("delete")
const tabBtn= document.getElementById("tab-btn")
let myleads = []
const ulEl = document.getElementById("ul-el")
const leadsfromlocalstorage = JSON.parse(localStorage.getItem("myleads"))
if(leadsfromlocalstorage){
  myleads=leadsfromlocalstorage
  renderleads(myleads)
}
const tabs= [
  {url :"https://www.linkedin.com/in/vanshika-batra-16300a211/"}
]
tabBtn.addEventListener("click",function(){
  chrome.tabs.query({active:true,currentWindow:true}, function(tabs){
    myleads.push(tabs[0].url)
    localStorage.setItem("myleads",JSON.stringify(myleads))
    renderleads(myleads)
  })
 
})

deleteBtn.addEventListener("click",function(){
  localStorage.clear()
  myleads=[]
  renderleads(myleads)
})
inputBtn.addEventListener("click",function(){
myleads.push(inputEl.value)
inputEl.value = ""
localStorage.setItem("myleads",JSON.stringify(myleads))
renderleads(myleads)
})


function renderleads(leads){
    let listItems=""
    for(let i=0;i<leads.length;i++){
      // listItems +=  "<li><a target = '_blank' href = '"+ myleads[i] + "'>" +  myleads[i] + "</a></li>"
       listItems += `
       <li>
       <a target = '_blank' href = '${leads[i]}'> 
       ${leads[i]}
       </a></li>

       `
       // const li=document.createElement("li")
       //li.textContent = myleads[i]
       //ulEl.append(li)
    
    }
    ulEl.innerHTML=listItems
}