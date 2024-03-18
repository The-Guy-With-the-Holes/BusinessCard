//HTML title should match short title ie: Example_Post == Example_Blog.short_title

// list of all blogs available in blogs{}
blog_list=['The_benefits_of_ice_baths','Optimal_IP_Addressing_for_Programmers','Securing_Your_Small_Business'];
// blogs loaded on this page.. 
loaded_blogs=[];

const blogs={

    Example_Blog:{
        title:'',
        short_title:'Example Post',
        head_img_src:'image.jpg',
        tags:['Sample','Information-Blog'],
        meta:{ 
            id:'JDE-0',
            author_name:'First Last',
            author_address:'http://www.First_Last.com',
            author_img:'http://www.First_Last.com/favicon.ico',
            publish_date:'10-29-1995',
        },
        content:' The content of the page (HTML) ',  
    },

    Optimal_IP_Addressing_for_Programmers:{
        category:'Development',
        title:'Optimal IP Addressing for Programmers: Enhancing Efficiency and Organization',
        short_title:'Optimal IP Addressing for Programmers',
        head_img_src:'../i/blog-images/optimal-ips.jpg',
        meta:{ id:'JDE-0',
            author_name:'Jack Ewers',
            author_address:'http://www.jackewers.com',
            author_img:'http://www.jackewers.com/favicon.ico',
            publish_date:'10-29-1995',
        },
        content:``,
    
         
    },

    Securing_Your_Small_Business:{
        title:"Securing Your Small Business: A Guide to Cybersecurity with TOR and Kali Linux",
        short_title:'Securing Your Small Business with TOR and Kali',
        head_img_src:'../i/blog-images/kali.jpeg',
        meta:{ id:'JDE-0',
            author_name:'Jack Ewers',
            author_address:'http://www.jackewers.com',
            author_img:'http://www.jackewers.com/favicon.ico',
            publish_date:'10-29-1995',
    },
        content:`
          <p>By incorporating these cybersecurity measures and leveraging tools like TOR and Kali Linux, your small business can significantly enhance its resilience against cyber threats. Stay vigilant, adapt to emerging threats, and continuously educate your team to foster a secure and proactive cybersecurity culture within your organization.</p>
        `
        
    },  

    The_benefits_of_ice_baths:{
        title:'The Benefits of having ice baths',
        short_title:'The Benefits of having ice baths',
        head_img_src:'../i/blog-images/ice.jpeg',
        meta:{ id:'JDE-0',
            author_name:'Jack Ewers',
            author_address:'http://www.jackewers.com',
            author_img:'http://www.jackewers.com/favicon.ico',
            publish_date:'10-29-1995',
        },
        content:``
        
    },  

}

current_blog=blogs[`${document.title.replaceAll(' ','_')}`];
loaded_blogs+=current_blog;

function create_blog_header(blog){
    let published_date=new Date(blog.meta.publish_date);
    let days_since_publish=daysUntil(published_date).toString().replace('-','');

    let header=createElement('header',{ innerHTML:
        `<h1>${blog.title}</h1>`+ // The long title
        `<div class="author"> <img src="${blog.meta.author_img}"> by <a href="${blog.meta.author_address}"> ${blog.meta.author_name}</a> • Published <i>${days_since_publish} days ago</i></div>`
        +`<img src="${blog.head_img_src}">` // the main image
    });
    let main=createElement('main',{innerHTML:`${blog.content}`})
    document.body.prepend(header);
   if (!document.querySelector('main')){ document.body.append(main);}
}


function create_additional_post_links(){
    let footer=createElement('footer',{innerHTML:`<p>Done Reading?<br>Check out theses other posts</p>`})
    let post_container=createElement('div',{id:'next_blog_post_container'})

    for(let i=0; i<blog_list.length; i++){
        if(current_blog.title==blogs[blog_list[i]].title){
        
            }    create_next_post(blogs[blog_list[i]]);

    }
    
    function create_next_post(blog){
        new_post=createElement('a',{'className':"next_post",href:`${blog.short_title.replaceAll(' ','_')}.html`, innerHTML:`<p>${blog.title}</p> <img src="${blog.head_img_src}"/> `});
        post_container.append(new_post)
    }
    footer.append(post_container);
    document.body.append(footer)
}



create_blog_header(current_blog);
create_additional_post_links();

