//HTML title should match short title ie: Example_Post == Example_Blog.short_title

const blogs={

    Example_Blog:{
        title:'',
        short_title:'Example Post',
        head_img_src:'image.jpg',
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
        content:`      
        <p>In the fast-paced world of programming, optimizing every aspect of your workflow is crucial. One often-overlooked yet impactful aspect is IP addressing for your devices. Adopting a strategy of assigning similar IP addresses to specific types of devices, such as computers and printers, can significantly streamline your network management. This practice not only facilitates ease of change but also enhances organization and efficiency in a programmer's daily tasks.</p>

        <b>1. Ease of Change and Network Management</b>
    
        <p>Assigning similar IP addresses simplifies the process of adapting to changes within your network. For example, when transitioning from IP.127 to IP.137, only a single change is required, minimizing the potential for errors and reducing downtime. This simplicity becomes particularly advantageous in dynamic environments where devices are added or removed regularly. Additionally, it eases troubleshooting by creating a logical structure, making it straightforward to identify and rectify any issues.</p>
    
        <!-- <p>For more information, check out this research paper: <a href="#link1">Research Paper Title 1</a></p> -->
    
        <b>2. Keeping Numbers Relative to the Task</b>
    
        <p>Implementing a systematic approach to IP addressing, such as IP.1*7 for computers and IP.1*9 for printers, adds a layer of intuitiveness to your network. The use of numbers corresponding to the type of device (7 for computers, 9 for printers) creates a visual association, aiding quick identification. This practice not only simplifies the setup of new devices but also fosters a sense of order and clarity, making it easier for programmers to navigate and understand the network architecture.</p>
    
        <!-- <p>For further insights, refer to this research paper: <a href="#link2">Research Paper Title 2</a></p> -->
    
        <b>3. Enhanced Security and Access Control</b>
    
        <p>Similar IP addressing can contribute to bolstering your network's security measures. By grouping devices based on their functions, such as separating computers from printers, you can implement more refined access control policies. This enables programmers to fine-tune security settings and permissions tailored to specific device types, reducing the risk of unauthorized access and potential security breaches.</p>
    
        <!-- <p>Explore this research paper for in-depth information: <a href="#link3">Research Paper Title 3</a></p> -->
    
        <b>4. Efficient Network Monitoring and Optimization</b>
    
        <p>Maintaining a consistent IP addressing structure facilitates efficient network monitoring. Utilizing tools that leverage IP addresses for analysis becomes more effective when devices are logically organized. This enables programmers to identify patterns, detect anomalies, and optimize network performance with greater precision. An organized IP scheme enhances the overall visibility of the network, making it easier to implement improvements and address potential bottlenecks.</p>
        `,
    
         
    },

    Securing_Your_Small_Business:{
        title:"Securing Your Small Business: A Guide to Cybersecurity with TOR and Kali Linux",
        short_title:'Securing Your Small Business',
        content:`
            <b>1. Understanding the Cyber Threat Landscape:</b>
            <p>Small businesses are not immune to cyber threats. Familiarize yourself with common attack vectors, such as phishing, ransomware, and social engineering, to better assess and mitigate potential risks.</p>
           
            <b>2. Establishing a Strong Foundation:</b>
            -<i>Employee Training:</i>
            <p>Educate your staff on cybersecurity best practices. Emphasize the importance of strong passwords, recognizing phishing attempts, and following secure protocols.</p>

            -<i>Regular Updates and Patches:</i>
            Ensure that all software, including operating systems and applications, is kept up-to-date with the latest security patches.

            <b>3. Implementing Network Security Measures:</b>
            <i>Firewalls and Intrusion Detection Systems (IDS):</i>
            <p>Set up firewalls to monitor and control incoming and outgoing network traffic. Implement an IDS to detect and respond to suspicious activities.</p>

        - **Virtual Private Network (VPN):**
            Encourage the use of VPNs to encrypt data transmitted over the internet, providing an extra layer of security, especially when employees are working remotely.

        **4. Utilizing TOR for Enhanced Privacy:**
        - **Introduction to TOR:**
            The Tor network, or The Onion Router, is designed to enhance online privacy by routing internet traffic through a series of volunteer-operated servers. Consider integrating TOR into your network to add an extra layer of anonymity for sensitive tasks.

        - **Secure Browsing Practices:**
            Train employees on using the Tor Browser for secure and private web browsing, especially when accessing confidential business information.

        **5. Leveraging Kali Linux for Penetration Testing:**
        - **Introduction to Kali Linux:**
            Kali Linux is a powerful and versatile penetration testing platform widely used by cybersecurity professionals. Consider employing Kali Linux to identify and address potential vulnerabilities in your network.

        - **Penetration Testing for Small Businesses:**
            Regularly conduct penetration tests to simulate real-world cyber attacks. Identify weaknesses in your network infrastructure and address them promptly to enhance overall security.

        **6. Data Backup and Recovery:**
        - **Regular Backups:**
            Implement a robust data backup strategy. Regularly back up critical business data, and store backups in a secure offsite location.

        - **Incident Response Plan:**
            Develop an incident response plan to guide your team in the event of a cybersecurity incident. Define roles, responsibilities, and steps to be taken during and after an attack.

        **7. Ongoing Security Monitoring:**
        - **Security Audits:**
            Conduct regular security audits to assess the effectiveness of your cybersecurity measures. Identify areas for improvement and implement necessary adjustments.

        - **Employee Report                                                                                                                                                                                                             ing:**
            <p>Encourage employees to report any suspicious activities promptly. Establish clear communication channels for reporting potential security incidents.</p>

        <p>By incorporating these cybersecurity measures and leveraging tools like TOR and Kali Linux, your small business can significantly enhance its resilience against cyber threats. Stay vigilant, adapt to emerging threats, and continuously educate your team to foster a secure and proactive cybersecurity culture within your organization.</p>
        `
        
    },

}

current_blog=blogs[`${document.title.replaceAll(' ','_')}`];


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
    let post_container=createElement('div',{id:'next_blog_post_container    '})
}



create_blog_header(current_blog);


