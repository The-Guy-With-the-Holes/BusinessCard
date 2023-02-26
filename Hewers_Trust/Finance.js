function diff(start, end) {
    start = start.split(":");
    end = end.split(":");
    var startDate = new Date(0, 0, 0, start[0], start[1], 0);
    var endDate = new Date(0, 0, 0, end[0], end[1], 0);
    var diff = endDate.getTime() - startDate.getTime();
    var hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    var minutes = Math.floor(diff / 1000 / 60);
    
    // If using time pickers with 24 hours format, add the below line get exact hours
    if (hours < 0)
       hours = hours + 24;
    
    return (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes;
    }
const ToggleRtT = function(){}
const Finance_Tools={
    CurrentUser:'',
    Currency:'AUD',

    // use API
    Available_Currencies:{K:['AUD','USD'],
        Pairs:{AUD_USD:0.68, USD_AUD:1.46676,}
    },
    convertValues:function (newCurrency){ 
        let FT,FAC,NewValue;
        FT = Finance_Tools;
        FAC = Finance_Tools.Available_Currencies;

        let nextCurrencyPos=(parseInt(FAC.K.indexOf(FT.Currency)+1)>FAC.K.length-1?0:parseInt(FAC.K.indexOf(FT.Currency)+1))
        let newTa=parseInt(FAC.K.indexOf(FT.Currency))
        if(!FAC.K.hasOwnProperty(newCurrency)){newCurrency=FAC.K[nextCurrencyPos];}
        
        let x = document.querySelectorAll('.Currency');
        for (ele in x){ let val =x[ele].value||x[ele].innerText;
            if(val==''||val==undefined){continue;}
            let a = parseInt(val.includes('$')?val.replace('$',''):val);
            if(newTa==0){
            NewValue = Math.floor(a*FAC.Pairs[FT.Currency+'_'+newCurrency]);
            }
            else{NewValue=a/(FAC.Pairs[FT.Currency+'_'+newCurrency]); }
            x[ele].classList.contains('eNum')?x[ele].value="$"+NewValue:x[ele].innerText=NewValue;
        }
        
        console.warn(`${nextCurrencyPos} ${newTa}`)
        Finance_Tools.Currency=FAC.K[nextCurrencyPos];
        document.getElementById('Currency_Switch').innerHTML=`Currency<br>(${FAC.K[nextCurrencyPos]})`;
        
    }  
}

let currentDate= new Date();
let currentTime = currentDate.getUTCHours()+":"+currentDate.getUTCMinutes()+":"+currentDate.getUTCSeconds();



const Finance = {  
    EwersTrust:{// 
       TotalVotes:null,
       value:10, total:null, Multi:10, TotalShares:null,SharesA:null,
       Holdings:[],
       HODLers:[],
        startingFShares:50,
        Issuance:{// $20*Issuances ( F-Shares?: (*multi)/2 : *multi ) 
            Jack:{Shares:370,F_Shares:25, PhoneNumber:'0417181353', Role:'Trustee', NSD:'00/00/0000', R:['1%Vote']},
            Michelle:{ Shares:250, F_Shares:50,PhoneNumber:'0417181353',Role:'Treasurer'},
            Sebastian:{Shares:100,F_Shares:50,},
            Kaitlyn:{Shares:50, F_Shares:50,}, 
            Emma:{Shares:50, F_Shares:50,},
            Luke:{Shares:50, F_Shares:50,},
            Wyatt:{Shares:50, F_Shares:50,},
            Demi:{Shares:50, F_Shares:50,},
            Thomas:{Shares:50, F_Shares:50,},
            Maddison:{Shares:50, F_Shares:50,},
        },
        Assets:[], 
        keys:[['Trust','The Trust is a synonym for the assests held by the `Hewers-Family-Trust'],
                ['H-S','Hewers Trust Shares'],['F-S','Fungiable Hewers-Trust Shares'],
                ['Trustee', 'The guy that gets his ass kicked if this goes tits up, the one that is also responsible for distributing rewards'],
                ['Governance', 'Any mention of Governance is tantamount to a desicion or ruling on the future of the Trust'],
                ['HODL','Represantion of Holders or the act of Holding an Asset/s , used in solidarity and kindship'],
                ['Immutable','An object which cannot be changed after it has been created, widely used in programming']],
        Laws:{
            //SubSections
            Shares:{ 
                'Hewers':[//H-Shares
                'Hewers Trust Shares or (HS) are an Immutable distrubtion of the culmination of value held by The `Hewers Family Trust`',
                'Hewers Shares have a value of $10 AUD for simplicity, this is subject to change',
                'Hodlers of (HS) are entitled to participate in Governance',
                'The first Distribution of Hewers shares was in 2018, at $20 a share, (100 shares were issued) '    
                ],
                'Fungiable':[ // F_Shares
                'Fungiable-Shares or (FS) are a form of shares,*Normally distributed for free, with a Sale value of 50% of the nomiminal H-Shares value. i.e, If 1 H-S is worth $10 then 1 F-S would be worth $5',
                'Shares Burn at a rate of 1 share / 3 months. (Share burning is a forced buyback of F-S at -90% value) and every time a (FS) is Burnt the burn timer will return to its original value of 3 months',
                'Issuing of (HS) will convert a single (FS) of any previous issuance into a (HS) at a ratio of 1:1',
                ],
            },
            Roles:{
                Trustee:[ // Trustee Requirements
                'The Trustee (☸) is a role responsible for handling trust allocations',
                'Distributions of Trust funds are managed, enforced and decided by the trustee, Major decisions (Transactions and Offers on Assets  >= 10% of the Trusts value will be subject to Financial Aid managment and may require a public vote, Offers on the trust itself will not be acknowledged for any value less than 10X the total HODLing of the trust)',
                'A minimum of 1 payout must be made from the trustee on behalf of the trust to all HODLers within 16 months of a last similar payment, Trust gift fund dispersions do not count',
                'The Trustee must ensure that the biyearly Trust rewards are distributed',
                'The Trustee cannot have more than 1% voting power in any and all Trust Governance Votes',
                ],
                HODLers:[
                'To be considered a HODLer you must always HODL atleast 1 (HS) they are required to be able to vote on Trust Governance issues and recieve rewards',
                'To Buy or Sell (HS) You age must be above or equal to 18 years old and have at least 1(HS) left after the sale',
                'To Vote in Governance Meetings and earn rewards you must be at least 16 years old',
                'HODLers with the "Special Earner" Role(as denoted by (*) will have a 1.5x Mint Muiltiplier, and 1.1x Buy multiplier. ie, if a Special Earner(*) was to purchase 10 HS (and had the trequired FS available) would recieve in total 16 HS',
                ],
                Treasurer:[
                    'The Treasurers (♄) requirements are to provide on the fly financial and legal aid in order to protect trust assets',
                    'The Treasurer Role is Held for a minimum of 6 Years and can appoint up to 2 nominees to assist in decisions',
                    'The Treasurer Recieves a biyearly payment for services provided ',
                ],

            },
            
        },Dates:{   'Key Dates':{ Not_a_List:true,
            'Unlock Date':daysUntil(new Date('10 29, 2024')),
            'Next Governance Vote':new Date((currentDate.getMonth(),currentDate.getDate(),currentDate.getUTCFullYear()+" 12:00:00")),
            'Rewards Pool': new Date('October 29 '+currentDate.getFullYear()),

        },
            'Historical Dates':{
                
                ' 2023':[
                    
                    "Governance : Hodler Rules added ",
                    "Purchase : 1x MarbleVerse[Legendary]Marble(NFT), $19USD(250$CRO)",
                    "Purchase : 5x MarbleVerse[common]Marble(NFT), $48USD(750$CRO)",
                    "Purchase : 1x MarbleVerse[Legendary]Marble(NFT), $450USD(7999$CRO)",
                    "Purchase : 1x Mad Hare(NFT), $89USD",
                    "Purchase : 500,000,000x Shiba($SHIB), $110USD",
                    "Distribution : 500x (FS), distributed across all members (approx. $5000AUD)",
                    "Governance : Fshares a.k.a (Fungiable shares) or (FS) created as an incetive to give and recieve more'"],
                ' 2022':[
                    'Purchase : 1000x Cronos($CRO), $86USD',
                    'Purchase : 3x $KO(Coke) Shares, $345USD',
                    'Governance : Treasurer :Michelle; appointed',
                    'Purchase : 1x Loaded Lion(NFT), $3000USD',    
                    'Distribution : 450x (HS) distrubuted across all members, (approx. $4500AUD)',
                    'Governance : Ewers Trust Rebranded to Hewers Trust ',
                    'Purchase : 2350x $CRO, $120USD'],
                ' 2020':['Governance : Ewers Trust Formed'],
                ' 2018':['Distribution : 100x (HS), The first Promising Shares are issued approx($2000AUD)'],
            },
          
        },
       Patch_Notes:{
        TODO:[
            //1.05 Hewers Trust Alpha Release
            /*'Flushed Login and user creation',
            ' Hidden For non Users Beta features'
            ' Holldings data appended'
            */
            //1.04 Login Beta
            'Currency Conversion messes up values',
            'Relocate FS Switch, restyle FS elements',
            'Add Login System'
        ],
        Fixed:{'22/02/2023: V1.03: FrameWork Upgrade':[
                    'Currency Conversion added',
                    'Escrow location and interaction Moved',
                    '(some) Historical dates backtracked'
                ],
                '18/01/2023: V1.02: CSS Upgrade':[
                    'Button styles Uniformity',
                    'Search Bar Buggy',
                    'Details & KeyDates List'
                ]
                },
       },
        unlockDate:new Date('10 29, 2024'),
        Next_GovernanceVote:new Date((currentDate.getMonth(),currentDate.getDate(),currentDate.getUTCFullYear()+" 12:00:00")),
        NextReward_unlockDate: new Date('October 29 '+currentDate.getFullYear()),
    },
}
const V_L = Finance.EwersTrust.value;
let HT = Finance.EwersTrust; 
let HiT = HT.Issuance;
let L = HT.Laws;
let D = HT.Dates;
let DK = HT.Dates["Key Dates"];

const Build_Area= document.getElementById('Build_Area');



let SumArray=function(arr){let x; arr.forEach(element => {x[0]+=arr[element]});return x[0]; }
 
let ConvertESNUM = function(e){let t= document.getElementById(e); (t.type=="password"||e.id=="Escrow_totalShares")?t.type="text":t.type="password";}

let sumTrustACC = function(x){ return x*Finance.EwersTrust.Multi*Finance.EwersTrust.value;}
7.04
let PrintHODLers = function(x,F_Shares){ let obj=[]; let KeyZ = Object.keys(HiT);
    if(x=='total'){return (PrintHODLers('values',F_Shares?true:false).reduce((partialSum,a) => partialSum + a, 0));}
    if(x=='holders'){ return KeyZ;}
    for(val in Finance.EwersTrust.HODLers){let FS = HiT[KeyZ[val]];//  alert(val+"/"+FS+"/"+KeyZ)
        switch (x) {
            case 'values': obj.push((FS.Shares*V_L)+((F_Shares==true&&FS.F_Shares)?(FS.F_Shares*V_L/2):0));
            break;
            case 'shares': obj.push(FS.Shares+((F_Shares==true&&FS.F_Shares)?":"+FS.F_Shares:0));
            break;
            default:
                obj.push([   // name, shares $val Fshares?$val
                    KeyZ[val], FS.Shares,"$"+FS.Shares*V_L,
                    (F_Shares===true&&FS.F_Shares)?FS.F_Shares:0,
                    (F_Shares===true&&FS.F_Shares)?"$"+FS.F_Shares*V_L:"$"+0,     
                ]);
            break;
        } 
    }
return obj;
}


let Return_SharesPercent= function(user){return (user.Shares/HT.SharesA*100-(1/HT.HODLers.length)).toFixed(2)+"%";}
let Return_SharesValue= function(shares,fshares){return fshares==true?shares*HT.value/5:shares*HT.value;}

function Toggle_Ele(eID,DisplayType){let x = document.getElementById(eID); x.style.display==DisplayType?x.style.display="none":x.style.display=DisplayType;}

function Toggle_E_Visibility(eID,y){let x = document.getElementById(eID); !y?(x.hidden!=false?x.hidden=false:x.hidden=true):x.hidden=y;}



let ToggleEscrow = function(){const x = document.getElementById('Holdings_Div');
    Toggle_Ele('Holdings_Div','flex');
    const ted=[document.getElementById('TES_0'),document.getElementById('TES_1')];
    if(x.hidden==true){x.hidden=false;ted[1].style.color="#000"; return ted[0].style.color="green";}
    x.hidden=true;ted[0].style.color="#000"; return ted[1].style.color="red";
}
const ToggleNavSelectors = function(x){let y = document.querySelectorAll('.NavSection_Div>button');
        for (e in y){ y[e].className="";}
        x.className="Select_Holdings";
        
}
function toggle_List_Vis(target){let x = document.querySelectorAll('span[id*="List_Main_"]');   let t;
    
    for (e in x){x[e].style?x[e].style.display="none":false;}
   if(!target||target==''){t=x[0];}
   else{t = document.getElementById(target);}
   t.style.display="block"; 
}



let PushNames= function(x){for (let i=0; i<HT.Issuance.length;i++){HT.Issuance[x[i]].name=x[i];}}
let PushValues=function(x){for (let i=0; i<HT.Issuance.length;i++){
    HT.Issuance[x[i]].HS_Value=Return_SharesValue(x[i].Shares);
    HT.Issuance[x[i]].FS_Value=Return_SharesValue(x[i].F_Shares);
}}
let CheckName = function(x){let H = PrintHODLers('holders');
    for (let i=0; i<H.length; i++){ let o = H[i].toLocaleLowerCase();
        if (o.includes(x.toLocaleLowerCase())){Finance_Tools.CurrentUser=H[i];
            let z=HiT[Finance_Tools.CurrentUser];   {console.log('hit');}
        }
    } 
}

function Build_Report(arr){let overlay = document.getElementById("Holdings_Report")||createElement('table',{id:"Holdings_Report",className:"Finance_Divs"});
let tr = createElement('tr',{id:'Holdings_HeadRow'});   
for(ele in arr){let th = createElement('th',{innerHTML:arr[ele]})
        tr.append(th);
    }
overlay.innerHTML=''; 
overlay.append(tr);
document.getElementById('Finance_FrontsidePage').append(overlay);
BuildUserStats();
}

const BuildList = function(target,ordered){
    let k = Object.keys(target);
    for (e in k){if(target[k[e]].hasOwnProperty('Not_a_List')){continue;}
        let Roles = Object.keys(target[k[e]]);
        
        let list_MainSection = createElement('span',{style:(e==0&&Roles.length>1)?true:"display:none;",id:'List_Main_'+k[e].replace(/\s+/g, '')});
        for (ele in Roles) { 
            let section = createElement('span',{id:`ListSubSection_${Roles[ele]}`,className:`List_${k[e]}Span`});
            let SubSection = createElement(ordered===true?'ol':'ul',{ innerHTML: `<p class="KeySections_Titles">${Roles[ele]}</p>`});
            section.append(SubSection);

            let Rules = target[k[e]][Roles[ele]]; //console.warn(`${Roles} ${Rules} ${k} ${t} `);
            for(let x=0; x<Rules.length; x++){ 
                let SectionPoint = createElement('li', { className: "KeySections_Points", innerHTML:Rules[x]});
                SubSection.append(SectionPoint);
            }
            list_MainSection.append(section);
        }     
        Build_Area.append(list_MainSection);
    }   
} 



const Build_Nav=function(target){
    let Nav = createElement('nav',{id:"Details_Nav"});
    let Nav_SubSect = Object.keys(target);
    for (let i = 0; i <Nav_SubSect.length; i++) {
        let NavSection = createElement('div',{className:"NavSection_Div"});
        let C_Button = createElement('button', { innerHTML: `${Nav_SubSect[i]}`,className:i==0?"Select_Holdings":"", onmouseenter:`ToggleNavSelectors(${document.getElementById('')})`,});
        NavSection.append(C_Button);
        let Roles = Object.keys(target[Nav_SubSect[i]]);let rm_Space =(Nav_SubSect[i].replace(/\s+/g,'_'))
        let ads=Nav_SubSect[i].replace('s','');console.warn(`${ads}  ${rm_Space}`);
        for (ele in Roles) { if(Roles[ele]=="Not_a_List")continue; console.warn(`ele=${ele}`);
            NavSection.innerHTML+=`<a href="#ListSubSection_${Roles[ele]}" class="${Nav_SubSect[i]}_NavCells">${Roles[ele]}</a>`;}
        Nav.append(NavSection);
    }
    Build_Area.append(Nav);
    $('.NavSection_Div>button').bind('mouseover', function(){ 
        $(this).trigger('click'); 
        console.log('hover'); // let me know when it hovering <a>
    });
}







let loadUserStats = function(user){ 
    let HR = document.getElementById('Holdings_Report'); 
    HR.style.display="none"?HR.style.display="table":false;if(HR.innerHTML.includes(user.name)){return 'Already Appended';}
    let tr = createElement('tr'); let localeName=LS_Name();
    let Name = createElement('td',{innerHTML:(user.name==localeName)?`<p class="Current_User">${user.name}</p>`:user.name ,className:"Table_Values"});
    let Shares = createElement('td',{innerHTML:`<p class="HS">${user.Shares}</p><p style="display:none;" class="Hideable_Fshares FS">${user.F_Shares}</p>`,className:"Table_Values"}); 
    let Val = createElement('td',{innerHTML:`<p class="Currency">${user.value}</p><p style="display:none;" class="Hideable_Fshares Table_Equation">(<i class="FS">`+((user.F_Shares?user.F_Shares:0)*(V_L/2))+`</i>+<i class="HS">$${user.Shares*HT.value}</i>)</p>`,className:"Table_Values"});
    let Vote = createElement('td',{innerHTML:user.name=="Jack"?"1.00%":(Return_SharesPercent(user)),className:"Table_Values %"});
    tr.append(Name,Shares,Val,Vote);
    (user.name==localeName)?HR.insertBefore(tr,document.getElementById('Holdings_HeadRow').nextSibling):HR.append(tr);
}
const BuildUserStats= function(){
    Toggle_E_Visibility('Build_Area',false);
    for(ele in HiT){loadUserStats(HiT[ele]);}
}


function Build_Hewers_NavPage(type){ // Builds Pages, Use Finance_Keys
    let target = Build_Area;
    target.innerHTML='';

    let Build_Hewers__RnR=function(){ Build_Nav(L);BuildList(L,true); }

    let Build_Hewers_KeyDates = function name() { 
        const setKeyDates= function(){
         DK["Unlock Date"]=daysUntil(HT.unlockDate);
         DK["Rewards Pool"]=(((PrintHODLers('total')/10)/daysUntil(HT.NextReward_unlockDate))/(PrintHODLers('total')/10)*100).toFixed(2)+'%';
        }
        
        let H_total = (PrintHODLers('total')/10).toFixed(0);
        let C_total = (H_total/daysUntil(HT.NextReward_unlockDate)).toFixed(0)<10?(H_total/daysUntil(HT.NextReward_unlockDate)).toFixed(0)+10:(H_total/daysUntil(HT.NextReward_unlockDate)).toFixed(0);
        const PoolPercent=((C_total/H_total*100).toFixed(2)+'%');
        let Next_Reward_Unlock = daysUntil(HT.NextReward_unlockDate);
        setKeyDates();
    
        let span = createElement('span', {id:'List_Main_KeyDates'});
        let M = createElement('p',{className:"KeyDates_Divs", id:'ListSubSection_Unlock_Date',innerHTML:`<p class="KeySections_Titles">First Share BuyBack: <p class="Date">🔒<${DK["Unlock Date"]}days🔒</p> <i class="Bold">Max Share Buys:</i><p class="Date">25</p>`});
        let p = createElement('p',{className:"KeyDates_Divs",id:"ListSubSection_Next_Governance_Vote",innerHTML:`<p class="KeySections_Titles">Rewards</p><b> RewardsPool is <i>${PoolPercent}</i> full</b>:<p class="Date"><b class="Currency">${C_total}</b>/<b class="Currency">${H_total}</b></p><i class ="Bold">Next Reward Unlock:</i><p class="Date"><${Next_Reward_Unlock}days &#127881;</p>`});
        let GV=createElement('p',{className:"KeyDates_Divs",id:"ListSubSection_Rewards_Pool",innerHTML:'<p class="KeySections_Titles">Next Governance Vote:</p> <p class="Date"> <'+
        diff(currentTime,HT.Next_GovernanceVote.getUTCHours()+":"+currentDate.getUTCMinutes()+":"+currentDate.getUTCSeconds())+'hrs</i></p><b>Reward</b>:<p  class="Date">1 F-Share🗠</p></p>'});
        let T = createElement('i',{id:"ACTUAL_TIMER",innerHTML:"🕧"});
        
        Build_Nav(HT.Dates); 
        span.append(M,p,GV,T);
        target.append(span);
        BuildList(HT.Dates);
    }

    
    let Build_Hewers_Members = function name(params) {
        let p1 =createElement('span',{id:"Check_HODLers_SearchBar",
            innerHTML:
            `<br><p>Search:</p><input type="search" id="Check_Holdings_Name_Input" placeholder="Name" onkeyup="SearchUser()" onchange="SearchUser()"/>`}); 
        let p2 = createElement("div",{id:"HT_SearchSettings_Div",
            innerHTML:`<button name="Toggle_Fshares" class="HT_SearchSettings_Buttons"><p style="margin: 0 auto; ">Hide(FS)</p>
                        <input id="Toggle_Fshares_Checkbox" checked type="checkbox" class="HT_SearchSettings_Buttons" name="Toggle_Fshares"  /></button>`
        });
    
        target.append(p1,p2);
        Build_Report(['Name','Shares','Value<p>(AUD)</p>','Vote Power']);
        BuildUserStats();
    }

    switch (type) {
        case 'Details':
            Build_Hewers__RnR(); toggle_List_Vis();
            break;
        case 'Key-Dates':
            Build_Hewers_KeyDates(); toggle_List_Vis();
            break;
        
        case 'Members':
            Build_Hewers_Members();
            break;
        default:
            break;
    }
    Toggle_E_Visibility('Build_Area',false);
}

        
function OpenFinance(){ 
    let pidiv= createElement('div',{id:"Conic",
        style:"display:flex; background-color:#fff; padding:4%; margin:2%;"});

    const Hodl=PrintHODLers(); let PiHodler=[]; const NoPi=[];
    let values = PrintHODLers('values'); let sharecount=PrintHODLers('shares',true);
    const TotalShares = sharecount.reduce((partialSum,a) => partialSum + a, 0);
    const totalsum = values.reduce((partialSum,a) => partialSum + a, 0);
    const Average = (totalsum/Hodl.length).toFixed(2);
    let P=[]; let NP='';
    
    for(let i =0;  i<Hodl.length; i++){
        if(sharecount[i]<(TotalShares/(Hodl.length-1))){NoPi.push(Hodl[i]); NP+=sharecount[i]; continue;}
        PiHodler.push([Hodl[i]],[(sharecount[i]/(TotalShares/(Hodl.length-1))*10).toFixed(2)]);
        P.push([(sharecount[i]/(TotalShares/(Hodl.length-1))*10).toFixed(0)]);
      
    }
    P.reverse();
let pi='';
for(let i =0; i<P.length; i++){
    if(i>0){P[i]=parseInt(P[i])+parseInt(P[i-1]);}
    pi+=" #"+randomHex()+" "+P[i]+"%, red 0,";
}
    let Table = createElement('div',{id:'Conic_Table'});

    for (let i = 0; i<values.length; i++) {
        let e =Hodl[i];
        let element = createElement('div',{innerHTML:e,name:'Conic'+i})
        Table.append(element);
    }

   let Pie = createElement('div'); setAttributes(Pie,{name:'ConicPi','style':"background:conic-gradient("+pi+"black 0);"})
  // Pie.style.background="conic-gradient("+P+"gray"+"0);";
    pidiv.append(Pie,Table);
  document.body.append(pidiv);

 return Hodl.length+' AVG:'+Average+' /'+PiHodler+"/noPI//"+NoPi+"//SHARE:"+sharecount+"/"+TotalShares+"/total shares//"+totalsum;

}


function loadFinance(e){let t$=PrintHODLers('total',true); 
    const LoadEscrowData = function(){ vals =[['NUM',t$],['MC',HT.TotalVotes*HT.value]]
        for (el in vals){document.getElementById('Escrow_'+vals[el][0]).value="$"+vals[el][1];}
    }
    HT.TotalVotes=PrintHODLers('shares').reduce((partialSum,a) => partialSum + a, 0);
    HT.HODLers=Object.keys(HiT); 
   const PushNewPersonObjects = function(){PushNames(HT.HODLers);PushValues(HT.HODLers)}
   const PushMains = function(){LoadEscrowData();PushNewPersonObjects();
    HT.total=t$; HT.SharesA=HT.TotalVotes-HT.Issuance.Jack.Shares; 
    }
    PushMains(); 
};


function SearchUser() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("Check_Holdings_Name_Input");
    filter = input.value.toUpperCase();
    table = document.getElementById("Holdings_Report");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }


let NavBTNS=document.querySelectorAll('.Finance_NavButtons');
const NavDivs=document.querySelectorAll('.Finance_Divs');
let toggleNav=function(x){
    
    let UntoggleNav= function(){ for (let index = 0; index <NavBTNS.length; index++) { const c = NavBTNS[index]; 
            c.classList.toggle('Select_Holdings',false);  
        }
    }
    UntoggleNav(); x.classList.toggle('Select_Holdings',true);
}
let Clear_divs = function(){for(let i=0; i<NavDivs.length; i++){(NavDivs[i]&&NavDivs[i].hidden!=true)?NavDivs[i].hidden=true:false;} 
}


NavBTNS.forEach(el => el.addEventListener('click',e =>{ Clear_divs(); 
    document.getElementById('Holdings_Report').innerHTML=''; 
    
    toggleNav(e.target);
    Build_Hewers_NavPage(e.target.innerHTML);

     switch(e.target.id){
      
     
    }   
}));


let value_cells = document.querySelectorAll('.Table_Equation');
setTimeout(() => {
    for(y in HT.HODLers){ let x = HT.Issuance[HT.HODLers[y]];
        x.name=HT.HODLers[y];
        x.value=(x.Shares*V_L+((x.F_Shares?x.F_Shares:0)*(V_L/2)))
        CheckName(HT.HODLers[y]);    
    }
}, 30);

let Toggle_Fshares = function() {  const x = document.querySelectorAll('.Hideable_Fshares');
    let res = x[0].style.display=="none"?"block":"none"; //
    for(ele in x){x[ele].style?x[ele].style.display=res:console.log('Toggled a non existant element -- FSHARRES');}
}

document.querySelector('header').addEventListener('click',function(event){
    const t = event.target; const p = event.target.parentNode;
    console.log(`Click Handler: \nT=[${t} , id:$${t.id} , class:${t.className} ]  \n p=${p.name}`) 
    
    if(t.className.includes('eNum')&&t.id=="Escrow_NUM"){ConvertESNUM(t.id);}
   
   
    if(event.target.className.includes('_NavCells')){return;}
        if([p.name,t.name].includes("Toggle_Fshares") ){let tog = document.getElementById('Toggle_Fshares_Checkbox');
              t.id!='Toggle_Fshares_Checkbox'?document.getElementById('Toggle_Fshares_Checkbox').checked=(tog.checked==true?false:true):false;
            
            return Toggle_Fshares();}

    if(p.className.includes('NavSection_Div')){toggle_List_Vis('List_Main_'+t.innerHTML.replace(/\s+/g, ''));ToggleNavSelectors(event.target);}
    
    
    
});

const switchNavCells= function(x,c){ let NavCells,i;  
    switch (x) {
        case "Roles":NavCells=document.querySelectorAll('.Roles_NavCells');break;
    
        case "Shares":NavCells=document.querySelectorAll('.Shares_NavCells');break;
            
        default: 
            NavCells=document.querySelectorAll('.Shares_NavCells')
            for (i=0; i<NavCells.length; i++) {NavCells[i].style.display="none";}
            NavCellsdocument.querySelectorAll('.Roles_NavCells') 
            for (i=0; i<NavCells.length; i++) {NavCells[i].style.display="none";}
            
    }

    for (i=0; i<NavCells.length; i++) {(c=="Show"||NavCells[i].style.display!="inline-block")?NavCells[i].style.display="block":NavCells[i].style.display="none";}

}

const login= function(p){

    let SetSwitchStatus = function(){
        document.getElementById('Login_Switch').style.display="none";
        document.getElementById('Login_Replacement').style.display="";
    }
    const Set_User = function(){ document.getElementById("User_Name").innerText=p;
    }
    const Set_Styles = function(){
        document.querySelector('header').style.removeProperty('background-image');
    }

   SetSwitchStatus(); Set_User(); Set_Styles();
}


loadFinance();
setTimeout(() => { Toggle_E_Visibility('Build_Area',false);
Build_Hewers_NavPage('Members'); 
//time may be an issue, adjust as needed
let l = LS_Name(); 
if(HT.HODLers.includes(l)){login(l);} 
}, 38);
 