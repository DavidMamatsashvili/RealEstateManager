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
        let similar_rental_units=[];
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


        async function getDataForSlider(){
            const similar_units_fetch = await fetch(link,{
                method:'GET',
                headers:{
                    Authorization: `Bearer ${TOKEN}`
                }
            });
            const similar_units_data = await similar_units_fetch.json();
            similar_units_data.forEach((element)=>{
                if((element.bedrooms==data.bedrooms || element.city.region.name==data.city.region.name || element.is_rental==data.is_rental) && element.address!=data.address){
                    //similar_rental_units.push(element);
                    //tag_name, rental_category1, region_name1, image_link, price1, address1, bed_count1, area1, zipcode1
                    addRentalUnit("random",element.is_rental,element.city.region.name,element.image,element.price,element.address,element.bedrooms,element.area,element.zip_code);
                }
            })
        }
        getDataForSlider();
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


const leftButton=document.querySelector(".left");
const rightButton=document.querySelector(".right");
const itemWidth=404;
function slideLeft() {
    carousel.style.transition = 'transform 0.3s ease';
    carousel.style.transform = `translateX(${itemWidth}px)`;

    carousel.addEventListener('transitionend', function handleTransition() {
        carousel.style.transition = 'none';
        carousel.style.transform = 'none';
        const lastItem = carousel.lastElementChild;
        carousel.prepend(lastItem); 
        carousel.removeEventListener('transitionend', handleTransition);
    });
}
function slideRight() {
    carousel.style.transition = 'transform 0.3s ease';
    carousel.style.transform = `translateX(-${itemWidth}px)`;
  
    carousel.addEventListener('transitionend', function handleTransition() {
      carousel.style.transition = 'none';
      carousel.style.transform = 'none';
      const firstItem = carousel.firstElementChild;
      carousel.append(firstItem); 
      carousel.removeEventListener('transitionend', handleTransition);
    });
}
leftButton.addEventListener("click", slideLeft);
rightButton.addEventListener("click", slideRight);







const carousel=document.querySelector(".carousel");
function addRentalUnit(tag_name, rental_category1, region_name1, image_link, price1, address1, bed_count1, area1, zipcode1) {
    //create a wrapper container
    let real_estate_container = document.createElement("div");
    real_estate_container.classList.add("real-estate-container");
    real_estate_container.classList.add(`${tag_name}`);
    switch (tag_name) {
        case "region":
            if (region_name1 == "შიდა ქართლი" || region_name1 == "ქვემო ქართლი") {
                real_estate_container.classList.add("ქართლი");
            }
            else if (region_name1 == "რაჭა" || region_name1 == "ლეჩხუმი") {
                real_estate_container.classList.add("რაჭა-ლეჩხუმი");
            }
            else {
                real_estate_container.classList.add(`${region_name1}`);
            }
            break;
        case "price":
            real_estate_container.classList.add("price-tag-unit");
            break;
        case "area":
            real_estate_container.classList.add("area-tag-unit");
            break;
        case "bed-count":
            real_estate_container.classList.add("bed-count-tag-unit");
            break;
    }
    carousel.appendChild(real_estate_container);
    //create image container
    let real_estate_image_container = document.createElement("div");
    real_estate_image_container.classList.add("real-estate-image-container");
    real_estate_container.appendChild(real_estate_image_container);
    //add image and is_rental in container
    let house_img = document.createElement("img");
    house_img.classList.add("real-estate-house-img");
    house_img.src = image_link;
    real_estate_image_container.appendChild(house_img);
    let rental_category = document.createElement("p");
    rental_category.classList.add("rental-category");
    rental_category.innerText = (rental_category1 == 1) ? "ქირავდება" : "იყიდება";
    real_estate_image_container.appendChild(rental_category);
    //create real estate data container
    let real_estate_data_container = document.createElement("div");
    real_estate_data_container.classList.add("real-estate-data-container");
    real_estate_container.appendChild(real_estate_data_container);
    //create price address data container
    let price_address_data_container = document.createElement("div");
    price_address_data_container.classList.add("price-address-data");
    real_estate_data_container.appendChild(price_address_data_container);
    let h2 = document.createElement("h2");
    h2.innerText = `${price1} ₾ `;
    price_address_data_container.appendChild(h2);
    let address_icons_container = document.createElement("div");
    address_icons_container.classList.add("address-icons");
    price_address_data_container.appendChild(address_icons_container);
    let marker = document.createElement("img");
    marker.src = "images/location-marker.jpg";
    marker.style.width = 20;
    marker.style.height = 20;
    address_icons_container.appendChild(marker);
    let p = document.createElement("p");
    p.classList.add("address");
    p.innerText = address1;
    address_icons_container.appendChild(p);
    //create price address icons container
    let price_address_icons_container = document.createElement("div");
    price_address_icons_container.classList.add("price-address-icons");
    real_estate_data_container.appendChild(price_address_icons_container);
    //create bed area and zip-code containers
    //bed
    let bed_count_icon_container = document.createElement("div");
    bed_count_icon_container.classList.add("bed-count-icon-data");
    price_address_icons_container.appendChild(bed_count_icon_container);
    let bed_count_img = document.createElement("img");
    bed_count_img.src = "images/bed.jpg";
    bed_count_icon_container.appendChild(bed_count_img);
    let bed_count_text = document.createElement("p");
    bed_count_text.classList.add("bed-count-data");
    bed_count_text.innerText = bed_count1;
    bed_count_icon_container.appendChild(bed_count_text);
    //area
    let area_icon_container = document.createElement("div");
    area_icon_container.classList.add("area-icon-data");
    price_address_icons_container.appendChild(area_icon_container);
    let area_img = document.createElement("img");
    area_img.src = "images/Vector (3).jpg";
    area_icon_container.appendChild(area_img);
    let area_text = document.createElement("p");
    area_text.classList.add("area-data");
    area_text.innerText = area1;
    area_icon_container.appendChild(area_text);
    //zip-code
    let zip_code_container = document.createElement("div");
    zip_code_container.classList.add("zip-code-icon-data");
    price_address_icons_container.appendChild(zip_code_container);
    let zip_code_img = document.createElement("img");
    zip_code_img.src = "images/Vector (4).jpg";
    zip_code_container.appendChild(zip_code_img);
    let zip_code_text = document.createElement("p");
    zip_code_text.classList.add("zip-code-data");
    zip_code_text.innerText = zipcode1;
    zip_code_container.appendChild(zip_code_text);
}