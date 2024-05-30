function write(element,content){ element.innerHTML=content; }

function color_text(text,color){return`<span style="color:${color};">${text}</span>`}

function kg_to_lb(weight){return (weight * 2.20462).toFixed(0);}

computing_list=['coding','programming','office','scripting']
travel_list=['on the move','travelling','driving','moving','grooving','flying']
excersise_list=['lifting','working out','excersising']

good_moods=["great",'good','ok','content'] // 🙂
great_moods=['extatic','excited','happy','joyful','amazed'] // 😁

function set_contact_method(){
    cur=profile.currently.toLocaleLowerCase()
    text_list=['travelling','moving','grooving']
    if (computing_list.includes(cur)){ result="Email: get@jackewers.com" }
    else if (travel_list.includes(cur)){  result="Text: +61 479 000 429"}
    write(document.querySelector('#get_in_touch .value'),result)
}


// Loop through the items and update items that alreayd exist on the page
// let profileProperties = Object.keys(profile).length;
if (profile){
for (let key in profile) {
    let propertyName = key;
    let propertyValue = profile[key];
    if (document.querySelector(`.info-item[data-info="${propertyName}"]`)){
        console.log(`Property :${propertyName} Value :${propertyValue} inserting property`)
        switch (propertyName){ 
            case "currently": // append emojis to status
                if (computing_list.includes(propertyValue.toLocaleLowerCase())){propertyValue=`${propertyValue} 💻`}
                else if (travel_list.includes(propertyValue.toLocaleLowerCase())){propertyValue=`${propertyValue} 🚗`}
                else if (excersise_list.includes(propertyValue.toLocaleLowerCase())){propertyValue=`${propertyValue} 🏋`}
                else {newValue = `${newValue} ❓`}
                break;
            case 'mood':
                propertyValue
                break;
            case "weight": propertyValue = `${propertyValue}kg / ${kg_to_lb(propertyValue)}lb `; break;
            case "jackewers.com": // Run same as below
            case "bloodweb.net":propertyValue=`${propertyName}:${propertyValue=="active"?(color_text(propertyValue,"green")+'✅'):(color_text(propertyValue,"red")+'❌')}`;break;
        }
        write(document.querySelector(`.info-item[data-info="${propertyName}"] .value`),propertyValue)
    }
    else{console.log("%c"+`Property :${propertyName} Value :${propertyValue} property not found, new value?`,'background: #222; color: #bada55')}
}
}
set_contact_method()
write(document.querySelector("#last_profile_edit"),last_profile_edit)