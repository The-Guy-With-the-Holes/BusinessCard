
// links [ ['name','href','img-href'] , [set 2]]
function createLinkTree(user){

main=createElement('main',{id:'AML_container'});
    
    function make_title(){
        let header=createElement('h1',{innerHTML:`<img src="${user[0]}"><h1>${user[1]}</h1>`})
        main.prepend(header);
    }

    for (let i=0; i<Socials.links.length; i++){ let x=Socials.links[i];
        let link_element=createElement('div',{ className:'AML_link',innerHTML:
        `<a href="${x[1]}">${x[0]}</a>`,
        style:`background-image:url(${x[2]})`
        })
        main.append(link_element);
    }

    function make_footer(){
        let footer=createElement('footer',{innerHTML:`<img src="BloodW.png"> <p>Bloodweb</p>`})
        main.append(footer);
    }

 
        make_title();
        make_footer();
        document.body.append(main);
 
}

createLinkTree(['i/Personal/mainimg1.png','@the_guy_with_the_holes']);
