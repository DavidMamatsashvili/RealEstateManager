// resolve 2 problems:
// 1) elements should also be deleted from arrays if customer presses to delete them from tag container
// 2) the range units must have only one container(resolved), tags should not be repeated(resolved)
// 3) regions should not be repeated
// 4) if tag is deleted the fetched data should also be deleted
const filter_hover_img = document.querySelectorAll(".filter-hover-img");
const options = document.querySelectorAll(".options");
const filter_category = document.querySelectorAll(".filter-category");


for(let i=0; i<options.length; i++){
    options[i].addEventListener("click",()=>{
        filter_hover_img[i].classList.toggle("filter_hover_img_rotation");
        filter_category[i].classList.toggle("visible");
        for(let j=0; j<options.length; j++){
            if(j!=i){
                filter_hover_img[j].classList.remove("filter_hover_img_rotation");
                filter_category[j].classList.remove("visible");
            }
        }
    })
}
//buttons
const region_btn = document.querySelector(".region-btn");
const price_btn = document.querySelector(".price-btn");
const area_btn = document.querySelector(".area-btn");
const bed_btn = document.querySelector(".bed-count-btn");

//tag-container
const tags_container = document.querySelector(".tags-container");
const delete_all = document.createElement("p");
delete_all.innerText = "გასუფთავება";
delete_all.classList.add("clear-all");


//insert delete-all button 
/*this code works also
function insertAfter(newNode, existingNode) {
    return existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}*/
function insertAfter(newNode,existingNode){
    return existingNode.insertAdjacentElement("afterend",newNode); 
}

//clear all elements function
function clearAll(){
    const clear_elements = document.querySelector(".clear-all");
    clear_elements.addEventListener("click",()=>{
        tags_container.innerHTML="";
        //tags_container.removeChild(delete_all);
        region_array.splice(0,region_array.length);
        min_price_container.splice(0,min_price_container.length);
        max_price_container.splice(0,max_price_container.length);
        min_area_container.splice(0,min_area_container.length);
        max_area_container.splice(0,max_area_container.length);
        bed_count.splice(0,bed_count.length);
    })
}



//add element in tag container
function addTagElement(element,type){
    if(type=="bed-count"){
        if(bed_count.length>0){
            bed_count.splice(0,bed_count.length);
        }
    }
    else if(type=="region"){
        /*if(region_array.length>0){
            region_array.splice(0,region_array.length);
        }*/
    }
    let newElement = document.createElement("div");
    newElement.innerText = element;
    newElement.classList.add("tags-element");
    let delete_btn = document.createElement("div");
    delete_btn.classList.add("tag-delete-btn");
    let first_vector = document.createElement("img");
    let second_vector = document.createElement("img");
    first_vector.classList.add("delete-vector");
    second_vector.classList.add("delete-vector");
    first_vector.src="images/Vector.svg";
    second_vector.src="images/Vector (1).svg";
    delete_btn.appendChild(first_vector);
    delete_btn.appendChild(second_vector);
    newElement.appendChild(delete_btn);
    tags_container.appendChild(newElement);
    insertAfter(delete_all,newElement);
}

function MinMaxArrayAddTagElement(min_array_element,max_array_element,type){
    let newElement = document.createElement("div");
    if(type=="price"){
        newElement.innerText = `${min_array_element}₾-${max_array_element}₾`;
        min_price_container.splice(0,min_price_container.length);
        max_price_container.splice(0,max_price_container.length);
    }
    else if(type=="area"){
        newElement.innerText = `${min_array_element}მ²-${max_array_element}მ²`;
        max_area_container.splice(0,max_area_container.length);
        min_area_container.splice(0,min_area_container.length);
    }
    newElement.classList.add("tags-element");
    let delete_btn = document.createElement("div");
    delete_btn.classList.add("tag-delete-btn");
    let first_vector = document.createElement("img");
    let second_vector = document.createElement("img");
    first_vector.classList.add("delete-vector");
    second_vector.classList.add("delete-vector");
    first_vector.src="images/Vector.svg";
    second_vector.src="images/Vector (1).svg";
    delete_btn.appendChild(first_vector);
    delete_btn.appendChild(second_vector);
    newElement.appendChild(delete_btn);
    tags_container.appendChild(newElement);
    insertAfter(delete_all,newElement);
}

//delete elements from tag container
//dont delete from arrays, delete from form object
//this logic needs to be fixed.
/*
    if(parent.innerText.includes('₾')){
        form.delete("min-max-price");
    }
    else if(parent.innerText.includes('მ²)){
        form.delete("min-max-area");
    }
    else if(parseInt(parent.innerText)<6){
        form.delete("bed-count");
    }
    else{
        form.delete("region-container");
    }
*/
function deleteElement(type){
    const delete_tag = document.querySelectorAll(".tag-delete-btn");
    for(let i=0; i<delete_tag.length; i++){
        delete_tag[i].addEventListener("click",()=>{
            if(type=="region"){
                const parent = delete_tag[i].parentElement;
                tags_container.removeChild(parent);
                region_array.splice(i,1);
            }
            else if(type=="bed-count"){
                const parent = delete_tag[i].parentElement;//
                tags_container.removeChild(parent);
                //tags_container.splice(i,1);
                console.log(bed_count);
                bed_count.splice(i,1);
                //bed_count.reverse().splice(i,bed_count.length);
            }
        })
    }
}

function MinMaxArrayDeleteElement(type){
    const delete_tag = document.querySelectorAll(".tag-delete-btn");
    for(let i=0; i<delete_tag.length; i++){
        delete_tag[i].addEventListener("click",()=>{
            if(type=="price"){
                const parent = delete_tag[i].parentElement;
                tags_container.removeChild(parent);
                min_price_container.splice(i,1);
                max_price_container.splice(i,1);
            }
            else if(type=="area"){
                const parent = delete_tag[i].parentElement;
                tags_container.removeChild(parent);
                min_area_container.splice(i,1);
                max_area_container.splice(i,1);
            }
        })
    }
}



//regions
const region_inputs = document.querySelectorAll("input");
const region_array = [];

region_btn.addEventListener("click",()=>{
    region_inputs.forEach((element)=>{
        if(element.checked && !region_array.includes(element.value)){
            region_array.push(element.value);
            console.log(region_array);
        }
    })
    if(region_array.length>0){
        region_array.forEach((region_name)=>{
            //getRegionData(region_name);
            addTagElement(region_name,"region");//
        })
    }
    deleteElement("region");
    clearAll();
})




//price
const min_price = document.querySelectorAll(".min-price-item");
const max_price = document.querySelectorAll(".max-price-item");
const min_price_div = document.querySelector(".min-price");
const max_price_div = document.querySelector(".max-price");
const min_price_container = [];
const max_price_container = [];

/* this code works also
min_price.forEach((element)=>{
    element.addEventListener("click",()=>{
        min_price_container.push(element.innerText);
        min_price_div.innerText = `${element.innerText}₾`;
    })
})

max_price.forEach((element)=>{
    element.addEventListener("click",()=>{
        max_price_container.push(element.innerText);
        if(parseInt(min_price_container[min_price_container.length-1])>parseInt(max_price_container[max_price_container.length-1])){
            max_price_div.style.border="1px solid red";
            max_price_div.innerText="";
            alert("enter a valid number");
        }
        else{
            max_price_div.style.border="1px solid rgba(128, 138, 147, 1)";
            max_price_div.innerText = `${element.innerText}₾`;
        }
    })
})

price_btn.addEventListener("click",()=>{
    if(min_price_container.length>0){
        for(let i=0; i<min_price_container.length; i++){
            MinMaxArrayAddTagElement(min_price_container[i],max_price_container[i],"price");
        }
    }
    MinMaxArrayDeleteElement("price");
    clearAll();
})*/
min_price.forEach((element)=>{
    element.addEventListener("click",()=>{
        if(min_price_container.length==0){
            min_price_container.push(element.innerText);
            min_price_div.innerText = `${element.innerText}₾`;
        }
        else if(min_price_container.length>0){
            min_price_container.splice(0,1);
            min_price_container.push(element.innerText);
            min_price_div.innerText=`${element.innerText}₾`;
        }
    })
})
max_price.forEach((element)=>{
    element.addEventListener("click",()=>{
        if(max_price_container.length==0){
            max_price_container.push(element.innerText);
            if(parseInt(min_price_container[min_price_container.length-1])>parseInt(max_price_container[max_price_container.length-1])){
                max_price_div.style.border="1px solid red";
                max_price_div.innerText="";
                alert("enter a valid number");
            }
            else{
                max_price_div.style.border="1px solid rgba(128, 138, 147, 1)";
                max_price_div.innerText = `${element.innerText}₾`;
            }
        }
       else if(max_price_container.length>0){
            max_price_container.splice(0,1);
            max_price_container.push(element.innerText);
            if(parseInt(min_price_container[min_price_container.length-1])>parseInt(max_price_container[max_price_container.length-1])){
                max_price_div.style.border="1px solid red";
                max_price_div.innerText="";
                alert("enter a valid number");
            }
            else{
                max_price_div.style.border="1px solid rgba(128, 138, 147, 1)";
                max_price_div.innerText = `${element.innerText}₾`;
            }
       }
    })
})
price_btn.addEventListener("click",()=>{
    if(min_price_container.length>0){
        for(let i=0; i<min_price_container.length; i++){
            MinMaxArrayAddTagElement(min_price_container[i],max_price_container[i],"price");
        }
    }
    /*if(min_price_container.length>0 && max_price_container.length>0){
        //getPriceData(min_price_container[0],max_price_container[0]);
        MinMaxArrayAddTagElement(min_price_container[0],max_price_container[0],"price");
    }*/
    MinMaxArrayDeleteElement("price");
    clearAll();
})



//area
const min_area = document.querySelectorAll(".min-area-item");
const max_area = document.querySelectorAll(".max-area-item");
const min_area_div = document.querySelector(".min-area");
const max_area_div = document.querySelector(".max-area");
const min_area_container = [];
const max_area_container = [];

min_area.forEach((element)=>{
    element.addEventListener("click",()=>{
        min_area_container.push(element.innerText);
        min_area_div.innerText = `${element.innerText}მ²`;
    })
})

max_area.forEach((element)=>{
    element.addEventListener("click",()=>{
        max_area_container.push(element.innerText);
        if(parseInt(min_area_container[min_area_container.length-1])>parseInt(max_area_container[max_area_container.length-1])){
            max_area_div.style.border="1px solid red";
            max_area_div.innerText="";
            alert("enter a valid number");
        }
        else{
            max_area_div.style.border="1px solid rgba(128, 138, 147, 1)";
            max_area_div.innerText = `${element.innerText}მ²`;
        }
    })
})


area_btn.addEventListener("click",()=>{
    if(min_area_container.length>0){
        for(let i=0; i<min_area_container.length; i++){
            MinMaxArrayAddTagElement(min_area_container[i],max_area_container[i],"area");
        }
    }
    //getAreaData(min_area_container[0],max_area_container[0]);
    //MinMaxArrayAddTagElement(min_area_container[0],max_area_container[0],"area");
    MinMaxArrayDeleteElement("area");
    clearAll();
})

//bed-count
const bed_rooms = document.querySelectorAll(".bed");
const bed_count = [];
bed_rooms.forEach((element)=>{
    element.addEventListener("click",()=>{
        if(!bed_count.includes(element.innerText)){
            bed_count.push(element.innerText);
        }
    })
})
bed_btn.addEventListener("click",()=>{
    bed_count.forEach((element)=>{
        //getBedData(element);
        addTagElement(element,"bed-count");
    })
    deleteElement("bed-count");
    clearAll();
})




///////////////////////////////////////////
///////     API    ////////////////////////
///////////////////////////////////////////


const TOKEN = `9d23f75b-6e75-4c93-8be3-6c099c19a90e`;
const link = `https://api.real-estate-manager.redberryinternship.ge/api/real-estates`;

//region data
async function getRegionData(region_name){
    try{
        const data = await fetch(link,{
            method:'GET',
            headers:{
                Authorization : `Bearer ${TOKEN}`
            }
        })
        const json_data = await data.json();
        json_data.forEach((element)=>{
            if(element.city.region.name==region_name){
                console.log(element);
            }
        })
    }
    catch(err){
        console.log(err);
    }
}

//price data
async function getPriceData(min_price,max_price){
    try{
        const data = await fetch(link,{
            method:'GET',
            headers:{
                Authorization : `Bearer ${TOKEN}`
            }
        })
        const json_data = await data.json();
        json_data.forEach((element)=>{
            if(element.price>=min_price && element.price<=max_price){
                console.log(element);
            }
        })
    }
    catch(err){
        console.log(err);
    }
}

//area data
async function getAreaData(min_area,max_area){
    try{
        const data = await fetch(link,{
            method:'GET',
            headers:{
                Authorization : `Bearer ${TOKEN}`
            }
        })
        const json_data = await data.json();
        json_data.forEach((element)=>{
            if(element.area>=min_area && element.area<=max_area){
                console.log(element);
            }
        })
    }
    catch(err){
        console.log(err);
    }
}

//bed data
async function getBedData(bed_count){
    try{
        const data = await fetch(link,{
            method:'GET',
            headers:{
                Authorization : `Bearer ${TOKEN}`
            }
        })
        const json_data = await data.json();
        json_data.forEach((element)=>{
            if(element.bedrooms==bed_count){
                console.log(element);
            }
        })
    }
    catch(err){
        console.log(err);
    }
}
//add some changes here



