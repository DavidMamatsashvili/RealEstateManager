const TOKEN = `9d23f75b-6e75-4c93-8be3-6c099c19a90e`;
const link = `https://api.real-estate-manager.redberryinternship.ge/api/real-estates`;

let house=JSON.parse(localStorage.getItem("house"));
let id = house.id;



async function getData(){
    try{
        const fetch_data = await fetch(`https://api.real-estate-manager.redberryinternship.ge/api/real-estates/${id}`,{
            method:'GET',
                headers:{
                    Authorization: `Bearer ${TOKEN}`
                }
        });
        const data = await fetch_data.json();

        //house image
        const house_img = document.querySelector(".real-estate-house-img");
        house_img.src=`${data.image}`;

        //is rental
        const rental_category = document.querySelector(".rental-category");
        rental_category.innerText=(data.is_rental==1)?"ქირავდება":"იყიდება";

        //date of upload
        const date_of_upload = document.querySelector(".date-of-upload");
        date_of_upload.innerText=`გამოქვეყნების თარიღი ${String(data.created_at).substring(0,10)}`;

        //price
        const price_container = document.querySelector(".price-container");
        price_container.innerText=`${data.price}₾`;

        //address
        const address_container = document.querySelector(".address");
        address_container.innerText=data.address;

        //area
        const area_container = document.querySelector(".area");
        area_container.innerText=`ფართი ${house.area}მ2`;

        //bed-count
        const bed_count_container = document.querySelector(".bed-count");
        bed_count_container.innerText=`საძინებელი ${house.bedrooms}`;

        //zip-code
        const zip_code_container = document.querySelector(".zip-code");
        zip_code_container.innerText=`საფოსტო ინდექსი ${data.zip_code}`;

        //description
        const description_container = document.querySelector(".description-container");
        description_container.innerText=data.description;

        //agent
        const agent_name=document.querySelector(".agent-name");
        agent_name.innerText=data.agent.name+" "+data.agent.surname;

        //const agent email, image and phone
        const agent_email = document.querySelector(".email-text");
        agent_email.innerText=data.agent.email;
        const agent_phone = document.querySelector(".phone-text");
        agent_phone.innerText=`${String(data.agent.phone).substring(0,3)} ${String(data.agent.phone).substring(4,6)} ${String(data.agent.phone).substring(7,9)}`;
        const agent_image = document.querySelector(".owner");
        agent_image.src=`${data.agent.avatar}`;
    }
    catch(err){
        console.log(err);
    }
}
getData();

const go_back_btn = document.querySelector(".go-back-btn");
go_back_btn.addEventListener("click",()=>{
    window.location.href='index4.html';
})