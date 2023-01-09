//GLOBAL VARIABLE//

var mainsection = document.querySelector('#main-section');
var header = document.querySelector('#header');
var content = document.querySelector('#content');
var footer =document.querySelector('#footer');
var Homeicon=document.querySelector('#Homeicon');
var Resumeicon=document.querySelector('#Resumeicon');



var InformationSection= document.querySelector('#InformationSection');


var Hello=document.querySelector('.Hello');
var Note=document.querySelector('.Note');
var Description=document.querySelector('.Description');



//LOCAL VARIABLE//


const displaySkills=()=>{
   
    InformationSection.innerHTML='';
    skillsection= document.createElement("div")
    skillsection.classList.add('skillsection');

    skill1 = document.createElement("div");
    skill1.textContent = "INFORMATICA 9.6";
    skill1.classList.add('skill');

    skill2 = document.createElement("div");
    skill2.textContent = "MS SQL SERVER";
    skill2.classList.add('skill');

    skill3 = document.createElement("div");
    skill3.textContent = "NETEZZA";
    skill3.classList.add('skill');

    skill4 = document.createElement("div");
    skill4.textContent = "ETL TESTING";
    skill4.classList.add('skill');

    skill5 = document.createElement("div");
    skill5.textContent = "TABLEAU";
    skill5.classList.add('skill');

    skillsection.appendChild(skill1);
    skillsection.appendChild(skill2);
    skillsection.appendChild(skill3);
    skillsection.appendChild(skill4);
    skillsection.appendChild(skill5);
    InformationSection.appendChild(skillsection);
    
}

const displayClients=()=>{
    InformationSection.innerHTML='';
    
    const clients=['AMERISOURCE BERGEN CORP  - ','EXPERIAN  - ','TILLYS -   ','CMC HOSPITAL  - '];
    const Dates=['03/2015-06/2016','11/2014-03/2015','02/2014-08/2014','10/2012-09/2013'];
    

    Clientssection= document.createElement("div")
    Clientssection.classList.add('skillsection');

    Clientlist=document.createElement("ol");
    Clientlist.classList.add('Clientlist');

    var client1 = document.createElement("li");
    var c1 = document.createTextNode(clients[0].concat (Dates[0]));
    client1.classList.add('orderedclientlist');
    

    var client2 = document.createElement("li");
    var c2 = document.createTextNode(clients[1] .concat (Dates[1]));
    client2.classList.add('orderedclientlist');

    var client3 = document.createElement("li");
    var c3 = document.createTextNode(clients[2].concat (Dates[2]));
    client3.classList.add('orderedclientlist');

    var client4 = document.createElement("li");
    var c4 = document.createTextNode(clients[3].concat (Dates[3]));
    client4.classList.add('orderedclientlist');
    
    client1.appendChild(c1);
    Clientlist.appendChild(client1);

    client2.appendChild(c2);
    Clientlist.appendChild(client2);

    client3.appendChild(c3);
    Clientlist.appendChild(client3);

    client4.appendChild(c4);
    Clientlist.appendChild(client4);

    Clientssection.appendChild(Clientlist);
    InformationSection.appendChild(Clientssection);

}
const displayEducation=()=>
{

    InformationSection.innerHTML='';
    const Education=['COMPUTER SCIENCE ENGINEERING','BUSINESS ENGLISH CERT-B1','BUSINESS ENGLISH CERT-B2'];
    
    EducationSection = document.createElement('div');
    EducationSection.classList.add('skillsection');
    InformationSection.appendChild(EducationSection);

    return Education.forEach(Education => {
        
        EducationSection.innerHTML += `<ol class="Educationlist">
        <li class="Educationlistitem">${Education} </li>
        </ol>`;
    
});
}


const displayDomain=()=>
{

    InformationSection.innerHTML='';
    const Domain=['HEALTHCARE','FINANCE','LOGISTICS'];
    
    DomainSection = document.createElement('div');
    DomainSection.classList.add('skillsection');
    InformationSection.appendChild(DomainSection);

    return Domain.forEach(Domain => {
        
        DomainSection.innerHTML += `<ol class="Domainlist">
        <li class="Domainlistitem">${Domain} </li>
        </ol>`;
    
});
}

const displayHome=()=>
{
    InformationSection.innerHTML='';
    var divInfoSec=document.createElement('div');

    var Para1=document.createElement('p');
    Para1.textContent=Hello.textContent;
    Para1.classList.add('Hello');
    
    var Para2=document.createElement('p');
    Para2.textContent=Note.textContent;
    Para2.classList.add('Note');

    var Para3=document.createElement('p');
    Para3.textContent=Description.textContent;
    Para3.classList.add('Description');

    divInfoSec.appendChild(Para1);
    divInfoSec.appendChild(Para2);
    divInfoSec.appendChild(Para3);
    
    InformationSection.appendChild(divInfoSec);
    
}

const displayResume=()=>
{
    
        console.log('g')
        var res="Images/esf.pdf";
         
        return window.open(res);
        
        //Resumeicon.setAttribute("href", "Images/Resume-Swathi Sampath Balaji.docx");
        //Resumeicon.click();//

    
}


SkillBtn.addEventListener('click', displaySkills);
ClientBtn.addEventListener('click', displayClients);
EducationBtn.addEventListener('click', displayEducation);
DomainBtn.addEventListener('click', displayDomain);
Homeicon.addEventListener('click', displayHome);
Resumeicon.addEventListener('click', displayResume);
