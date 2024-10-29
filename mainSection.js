//caching

const filter_hover_img = document.querySelectorAll(".filter-hover-img");
const options = document.querySelectorAll(".options");
const filter_category = document.querySelectorAll(".filter-category");


for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", () => {
        filter_hover_img[i].classList.toggle("filter_hover_img_rotation");
        filter_category[i].classList.toggle("visible");
        for (let j = 0; j < options.length; j++) {
            if (j != i) {
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

//delete-all button
function insertAfter(newNode, existingNode) {
    return existingNode.insertAdjacentElement("afterend", newNode);
}

//add tag element
function addTagElement(element, type) {
    if (type == "region") {
        let newElement = document.createElement("div");
        newElement.innerText = element;
        newElement.classList.add("tags-element");
        let delete_btn = document.createElement("div");
        delete_btn.classList.add("tag-delete-btn");
        let first_vector = document.createElement("img");
        let second_vector = document.createElement("img");
        first_vector.classList.add("delete-vector");
        second_vector.classList.add("delete-vector");
        first_vector.src = "images/Vector.svg";
        second_vector.src = "images/Vector (1).svg";
        delete_btn.appendChild(first_vector);
        delete_btn.appendChild(second_vector);
        newElement.appendChild(delete_btn);
        newElement.classList.add("region-identificator");
        tags_container.appendChild(newElement);
        insertAfter(delete_all, newElement);
        localStorage.setItem(element, JSON.stringify(element));
    }
    else if (type == "bed-count") {
        let newElement = document.createElement("div");
        newElement.innerText = element;
        newElement.classList.add("tags-element");
        let delete_btn = document.createElement("div");
        delete_btn.classList.add("tag-delete-btn");
        let first_vector = document.createElement("img");
        let second_vector = document.createElement("img");
        first_vector.classList.add("delete-vector");
        second_vector.classList.add("delete-vector");
        first_vector.src = "images/Vector.svg";
        second_vector.src = "images/Vector (1).svg";
        delete_btn.appendChild(first_vector);
        delete_btn.appendChild(second_vector);
        newElement.appendChild(delete_btn);
        newElement.classList.add("bed-count-identificator");
        tags_container.appendChild(newElement);
        insertAfter(delete_all, newElement);
        localStorage.setItem("bed-count", JSON.stringify(element));
    }
}
//for localstorage
function addTagElementLocalStorage(element, type) {
    if (type == "region") {
        let newElement = document.createElement("div");
        newElement.innerText = element;
        newElement.classList.add("tags-element");
        let delete_btn = document.createElement("div");
        delete_btn.classList.add("tag-delete-btn");
        let first_vector = document.createElement("img");
        let second_vector = document.createElement("img");
        first_vector.classList.add("delete-vector");
        second_vector.classList.add("delete-vector");
        first_vector.src = "images/Vector.svg";
        second_vector.src = "images/Vector (1).svg";
        delete_btn.appendChild(first_vector);
        delete_btn.appendChild(second_vector);
        newElement.appendChild(delete_btn);
        newElement.classList.add("region-identificator");
        tags_container.appendChild(newElement);
        insertAfter(delete_all, newElement);
        deleteElement("region");
        clearAll();
        //localStorage.setItem(element,JSON.stringify(element));
    }
    else if (type == "bed-count") {
        let newElement = document.createElement("div");
        newElement.innerText = element;
        newElement.classList.add("tags-element");
        let delete_btn = document.createElement("div");
        delete_btn.classList.add("tag-delete-btn");
        let first_vector = document.createElement("img");
        let second_vector = document.createElement("img");
        first_vector.classList.add("delete-vector");
        second_vector.classList.add("delete-vector");
        first_vector.src = "images/Vector.svg";
        second_vector.src = "images/Vector (1).svg";
        delete_btn.appendChild(first_vector);
        delete_btn.appendChild(second_vector);
        newElement.appendChild(delete_btn);
        newElement.classList.add("bed-count-identificator");
        tags_container.appendChild(newElement);
        insertAfter(delete_all, newElement);
        deleteElement("bed-count");
        clearAll();
        //localStorage.setItem("bed-count",JSON.stringify(element));
    }
}

//add min-max element
function MinMaxArrayAddTagElement(min_array_element, max_array_element, type) {
    let newElement = document.createElement("div");
    if (type == "price") {
        newElement.innerText = `${min_array_element}₾-${max_array_element}₾`;
        //min_price_container.splice(0,min_price_container.length);
        //max_price_container.splice(0,max_price_container.length);
        newElement.classList.add("tags-element");
        let delete_btn = document.createElement("div");
        delete_btn.classList.add("tag-delete-btn");
        let first_vector = document.createElement("img");
        let second_vector = document.createElement("img");
        first_vector.classList.add("delete-vector");
        second_vector.classList.add("delete-vector");
        first_vector.src = "images/Vector.svg";
        second_vector.src = "images/Vector (1).svg";
        delete_btn.appendChild(first_vector);
        delete_btn.appendChild(second_vector);
        newElement.appendChild(delete_btn);
        newElement.classList.add("price-identificator");
        tags_container.appendChild(newElement);
        insertAfter(delete_all, newElement);
        localStorage.setItem("price", JSON.stringify(`${min_array_element}₾-${max_array_element}₾`));
    }
    else if (type == "area") {
        newElement.innerText = `${min_array_element}მ²-${max_array_element}მ²`;
        //max_area_container.splice(0,max_area_container.length);
        //min_area_container.splice(0,min_area_container.length);
        newElement.classList.add("tags-element");
        let delete_btn = document.createElement("div");
        delete_btn.classList.add("tag-delete-btn");
        let first_vector = document.createElement("img");
        let second_vector = document.createElement("img");
        first_vector.classList.add("delete-vector");
        second_vector.classList.add("delete-vector");
        first_vector.src = "images/Vector.svg";
        second_vector.src = "images/Vector (1).svg";
        delete_btn.appendChild(first_vector);
        delete_btn.appendChild(second_vector);
        newElement.appendChild(delete_btn);
        newElement.classList.add("area-identificator");
        tags_container.appendChild(newElement);
        insertAfter(delete_all, newElement);
        localStorage.setItem("area", JSON.stringify(`${min_array_element}მ²-${max_array_element}მ²`));
    }
}


//for localstorage
function MinMaxArrayAddTagElementLocalStorage(element, type) {
    let newElement = document.createElement("div");
    if (type == "price") {
        newElement.innerText = `${element}`;
        //min_price_container.splice(0,min_price_container.length);
        //max_price_container.splice(0,max_price_container.length);
        newElement.classList.add("tags-element");
        let delete_btn = document.createElement("div");
        delete_btn.classList.add("tag-delete-btn");
        let first_vector = document.createElement("img");
        let second_vector = document.createElement("img");
        first_vector.classList.add("delete-vector");
        second_vector.classList.add("delete-vector");
        first_vector.src = "images/Vector.svg";
        second_vector.src = "images/Vector (1).svg";
        delete_btn.appendChild(first_vector);
        delete_btn.appendChild(second_vector);
        newElement.appendChild(delete_btn);
        newElement.classList.add("price-identificator");
        tags_container.appendChild(newElement);
        insertAfter(delete_all, newElement);
        MinMaxArrayDeleteElement("price");
        clearAll();
    }
    else if (type == "area") {
        newElement.innerText = `${element}`;
        //max_area_container.splice(0,max_area_container.length);
        //min_area_container.splice(0,min_area_container.length);
        newElement.classList.add("tags-element");
        let delete_btn = document.createElement("div");
        delete_btn.classList.add("tag-delete-btn");
        let first_vector = document.createElement("img");
        let second_vector = document.createElement("img");
        first_vector.classList.add("delete-vector");
        second_vector.classList.add("delete-vector");
        first_vector.src = "images/Vector.svg";
        second_vector.src = "images/Vector (1).svg";
        delete_btn.appendChild(first_vector);
        delete_btn.appendChild(second_vector);
        newElement.appendChild(delete_btn);
        newElement.classList.add("area-identificator");
        tags_container.appendChild(newElement);
        insertAfter(delete_all, newElement);
        MinMaxArrayDeleteElement("area");
        clearAll();
    }
}



//delete tag element
function deleteElement(type) {
    const delete_tag = document.querySelectorAll(".tag-delete-btn");
    for (let i = 0; i < delete_tag.length; i++) {
        delete_tag[i].addEventListener("click", () => {
            if (type == "region") {
                const parent = delete_tag[i].parentElement;
                //delete data from localstorage

                let item1 = localStorage.getItem(parent.innerText);
                if (String(item1) == item1) {
                    localStorage.removeItem(parent.innerText);
                }

                //
                let delete_region_rental_units = document.querySelectorAll(`.${parent.innerText}`);
                if (parent.innerText == "რაჭა" || parent.innerText == "ლეჩხუმი") {
                    delete_region_rental_units = document.querySelectorAll(".რაჭა-ლეჩხუმი");
                }
                delete_region_rental_units.forEach((del) => {
                    let address = del.querySelector(".address").innerText;
                    localStorage.removeItem(String(address));
                    set_of_addresses.delete(address);
                    del.remove();
                })
                tags_container.removeChild(parent);
                region_array.splice(region_array.indexOf(parent.innerText), 1);
                //check if there is any element left in tag-container. if not delete delete-all button
                let children = tags_container.children;
                let size = children.length;
                if (size <= 1) {
                    tags_container.removeChild(delete_all);
                }
            }
            else if (type == "bed-count") {
                const parent = delete_tag[i].parentElement;
                //delete data from localstorage
                let item1 = localStorage.getItem("bed-count");
                if (item1 == item1) {
                    localStorage.removeItem("bed-count");
                }
                //
                tags_container.removeChild(parent);
                let delete_bed_count_rental_units = document.querySelectorAll(".bed-count-tag-unit");
                delete_bed_count_rental_units.forEach((del) => {
                    let address = del.querySelector(".address").innerText;
                    localStorage.removeItem(String(address));
                    set_of_addresses.delete(address);
                    del.remove();
                })
                bed_count.splice(0, 1);
                //check if there is any element left in tag-container. if not delete delete-all button
                let children = tags_container.children;
                let size = children.length;
                if (size <= 1) {
                    tags_container.removeChild(delete_all);
                }
            }
        })
    }
}


//delete min-max element
function MinMaxArrayDeleteElement(type) {
    const delete_tag = document.querySelectorAll(".tag-delete-btn");
    for (let i = 0; i < delete_tag.length; i++) {
        delete_tag[i].addEventListener("click", () => {
            if (type == "price") {
                const parent = delete_tag[i].parentElement;


                let item1 = localStorage.getItem("price");
                if (item1 == item1) {
                    localStorage.removeItem("price");
                }

                tags_container.removeChild(parent);
                //min_price_container.splice(i,1);
                //max_price_container.splice(i,1);
                min_price_container.splice(0, 1);
                max_price_container.splice(0, 1);
                let delete_price_rental_units = document.querySelectorAll(".price-tag-unit");
                delete_price_rental_units.forEach((del) => {
                    let address = del.querySelector(".address").innerText;
                    localStorage.removeItem(String(address));
                    set_of_addresses.delete(address);
                    del.remove();
                })
                //check if there is any element left in tag-container. if not delete delete-all button
                let children = tags_container.children;
                let size = children.length;
                if (size <= 1) {
                    tags_container.removeChild(delete_all);
                }
            }
            else if (type == "area") {
                const parent = delete_tag[i].parentElement;


                let item1 = localStorage.getItem("area");
                if (item1 == item1) {
                    localStorage.removeItem("area");
                }

                tags_container.removeChild(parent);
                //min_area_container.splice(i,1);
                //max_area_container.splice(i,1);
                min_area_container.splice(0, 1);
                max_area_container.splice(0, 1);
                let delete_area_rental_units = document.querySelectorAll(".area-tag-unit");
                delete_area_rental_units.forEach((del) => {
                    let address = del.querySelector(".address").innerText;
                    localStorage.removeItem(String(address));
                    set_of_addresses.delete(address);
                    del.remove();
                })
                //check if there is any element left in tag-container. if not delete delete-all button
                let children = tags_container.children;
                let size = children.length;
                if (size <= 1) {
                    tags_container.removeChild(delete_all);
                }
            }
        })
    }
}


//clear all
function clearAll() {
    const clear_elements = document.querySelector(".clear-all");
    clear_elements.addEventListener("click", () => {
        tags_container.innerHTML = "";
        rental_units_container.innerHTML = "";
        set_of_addresses.clear();
        //tags_container.removeChild(delete_all);
        region_array.splice(0, region_array.length);
        min_price_container.splice(0, min_price_container.length);
        max_price_container.splice(0, max_price_container.length);
        min_area_container.splice(0, min_area_container.length);
        max_area_container.splice(0, max_area_container.length);
        bed_count.splice(0, bed_count.length);
        localStorage.clear();
    })
}


//regions
const region_inputs = document.querySelectorAll("input");
const region_array = [];
region_btn.addEventListener("click", () => {
    region_inputs.forEach((region_element) => {
        if (region_element.checked) {
            if (!region_array.includes(region_element.value)) {
                addTagElement(region_element.value, "region");
                region_array.push(region_element.value);
                displayRegionData();
            }
        }
    })
    deleteElement("region");
    clearAll();
})


//bed-count
const bed_rooms = document.querySelectorAll(".bed");
const bed_count = [];
bed_rooms.forEach((element) => {
    element.addEventListener("click", () => {
        if (!bed_count.includes(element.innerText) && bed_count.length > 0) {
            bed_count.splice(0, 1);
            bed_count.push(element.innerText);
        }
        if (!bed_count.includes(element.innerText) && bed_count.length == 0) {
            bed_count.push(element.innerText);
        }
    })
})
bed_btn.addEventListener("click", () => {
    const children = tags_container.children;
    const size = children.length;
    let flag = false;
    let index = 0;
    for (let i = 0; i < size; i++) {
        if (children[i].classList.contains("bed-count-identificator")) {
            flag = true;
            index = i;
            break;
        }
    }
    if (flag) {
        tags_container.removeChild(children[index]);
        addTagElement(bed_count[0], "bed-count");
        displayBedCountData();
    }
    else if (!flag) {
        addTagElement(bed_count[0], "bed-count");
        displayBedCountData();
    }
    deleteElement("bed-count");
    clearAll();
})


//prices
const min_price = document.querySelectorAll(".min-price-item");
const max_price = document.querySelectorAll(".max-price-item");
const min_price_div = document.querySelector(".min-price");
const max_price_div = document.querySelector(".max-price");
const min_price_container = [];
const max_price_container = [];

min_price.forEach((element) => {
    element.addEventListener("click", () => {
        if (min_price_container.length == 0) {
            min_price_container.push(element.innerText);
            min_price_div.innerText = `${element.innerText}₾`;
        }
        else if (min_price_container.length > 0) {
            min_price_container.splice(0, 1);
            min_price_container.push(element.innerText);
            min_price_div.innerText = `${element.innerText}₾`;
        }
    })
})
max_price.forEach((element) => {
    element.addEventListener("click", () => {
        if (max_price_container.length == 0) {
            max_price_container.push(element.innerText);
            if (parseInt(min_price_container[min_price_container.length - 1]) > parseInt(max_price_container[max_price_container.length - 1])) {
                max_price_div.style.border = "1px solid red";
                max_price_div.innerText = "";
                alert("enter a valid number");
            }
            else {
                max_price_div.style.border = "1px solid rgba(128, 138, 147, 1)";
                max_price_div.innerText = `${element.innerText}₾`;
            }
        }
        else if (max_price_container.length > 0) {
            max_price_container.splice(0, 1);
            max_price_container.push(element.innerText);
            if (parseInt(min_price_container[min_price_container.length - 1]) > parseInt(max_price_container[max_price_container.length - 1])) {
                max_price_div.style.border = "1px solid red";
                max_price_div.innerText = "";
                alert("enter a valid number");
            }
            else {
                max_price_div.style.border = "1px solid rgba(128, 138, 147, 1)";
                max_price_div.innerText = `${element.innerText}₾`;
            }
        }
    })
})


price_btn.addEventListener("click", () => {
    const children = tags_container.children;
    const size = children.length;
    let flag = false;
    let min_index = 0;
    let max_index = 0;
    for (let i = 0; i < size; i++) {
        if (children[i].classList.contains("price-identificator")) {
            flag = true;
            min_index = i;
            max_index = i + 1;
            break;
        }
    }
    if (flag) {
        tags_container.removeChild(children[min_index]);
        MinMaxArrayAddTagElement(min_price_container[0], max_price_container[0], "price");
        displayPriceData();
    }
    else if (!flag) {
        MinMaxArrayAddTagElement(min_price_container[0], max_price_container[0], "price");
        displayPriceData();
    }
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

min_area.forEach((element) => {
    element.addEventListener("click", () => {
        min_area_container.push(element.innerText);
        min_area_div.innerText = `${element.innerText}მ²`;
    })
})

max_area.forEach((element) => {
    element.addEventListener("click", () => {
        max_area_container.push(element.innerText);
        if (parseInt(min_area_container[min_area_container.length - 1]) > parseInt(max_area_container[max_area_container.length - 1])) {
            max_area_div.style.border = "1px solid red";
            max_area_div.innerText = "";
            alert("enter a valid number");
        }
        else {
            max_area_div.style.border = "1px solid rgba(128, 138, 147, 1)";
            max_area_div.innerText = `${element.innerText}მ²`;
        }
    })
})

area_btn.addEventListener("click", () => {
    const children = tags_container.children;
    const size = children.length;
    let flag = false;
    let min_index = 0;
    let max_index = 0;
    for (let i = 0; i < size; i++) {
        if (children[i].classList.contains("area-identificator")) {
            flag = true;
            min_index = i;
            max_index = i + 1;
            break;
        }
    }
    if (flag) {
        tags_container.removeChild(children[min_index]);
        MinMaxArrayAddTagElement(min_area_container[0], max_area_container[0], "area");
        displayAreaData();
    }
    else if (!flag) {
        MinMaxArrayAddTagElement(min_area_container[0], max_area_container[0], "area");
        displayAreaData();
    }
    MinMaxArrayDeleteElement("area");
    clearAll();
})


///////////////////////////////////////////
///////     API    ////////////////////////
///////////////////////////////////////////

const TOKEN = `9d23f75b-6e75-4c93-8be3-6c099c19a90e`;
const link = `https://api.real-estate-manager.redberryinternship.ge/api/real-estates`;



//add rental unit
const rental_units_container = document.querySelector(".rental-display");
function addRentalUnit(tag_name, rental_category1, region_name1, image_link, price1, address1, bed_count1, area1, zipcode1) {
    //create a wrapper container
    let real_estate_container = document.createElement("div");
    real_estate_container.classList.add("real-estate-container");
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
    rental_units_container.appendChild(real_estate_container);
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
/*
in async functions always add elements in localstorage by their addresses. we fetched the data, which means it isn't in localstorage yet.
if the address is in the local storage then use localstorage data and don't fetch
*/

//get data from api
//every element will be unique and will not be fetched twice if it exists in set_of_address set. it contains addresses which every rental unit has and its unique
let set_of_addresses = new Set();
async function displayRegionData() {
    try {
        const data = await fetch(link, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${TOKEN}`
            }
        });
        const rental_properties_data = await data.json();
        if (region_array.length != 0) {
            let new_region_array = rental_properties_data.filter((element) => {
                if ((region_array.includes(element.city.region.name)) && !set_of_addresses.has(element.address)) {
                    set_of_addresses.add(element.address);
                    return element;
                }
            })
            if (region_array.includes("ქართლი")) {
                rental_properties_data.forEach((element) => {
                    if ((element.city.region.name == "შიდა ქართლი" || element.city.region.name == "ქვემო ქართლი") && !set_of_addresses.has(element.address)) {
                        set_of_addresses.add(element.address);
                        new_region_array.push(element);
                        localStorage.setItem(element.address, JSON.stringify(element));
                        //localStorage.setItem(element.id,JSON.stringify(element));
                        //localStorage.setItem(element.id,JSON.stringify(element));
                    }
                })
            }
            if (region_array.includes("რაჭა") || region_array.includes("ლეჩხუმი")) {
                rental_properties_data.forEach((element) => {
                    if (element.city.region.name == "რაჭა-ლეჩხუმი" && !set_of_addresses.has(element.address)) {
                        set_of_addresses.add(element.address);
                        new_region_array.push(element);
                        localStorage.setItem(element.address, JSON.stringify(element));
                        //localStorage.setItem(element.id,JSON.stringify(element));
                    }
                })
            }
            new_region_array.forEach((element) => {
                addRentalUnit("region", element.is_rental, element.city.region.name, element.image, element.price, element.address, element.bedrooms, element.area, element.zip_code);
            })
            const unit = document.querySelectorAll(".real-estate-container");
            for (let i = 0; i < unit.length; i++) {
                unit[i].addEventListener("click", (e) => {
                    localStorage.setItem("house", JSON.stringify(new_region_array[i]));
                    window.location.href = 'index5.html';
                    //console.log(unit[i]);
                    //let k=unit[i].querySelector(".address").innerText;
                })
            }
            localStorage.setItem("rental-display", JSON.stringify(rental_units_container.innerHTML));
            //localStorage.setItem("region-counter",JSON.stringify(counter));
        }
    }
    catch (err) {
        console.log(err);
    }
}

async function displayPriceData() {
    try {
        const data = await fetch(link, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${TOKEN}`
            }
        });
        const rental_properties_data = await data.json();
        if (min_price_container.length != 0 && max_price_container.length != 0) {
            rental_properties_data.forEach((element) => {
                if (element.price > min_price_container[0] && element.price < max_price_container[0] && !set_of_addresses.has(element.address)) {
                    set_of_addresses.add(element.address);
                    localStorage.setItem(element.address, JSON.stringify(element));
                    addRentalUnit("price", element.is_rental, element.city.region.name, element.image, element.price, element.address, element.bedrooms, element.area, element.zip_code);
                }
            })
        }
        const unit = document.querySelectorAll(".real-estate-container");
        for (let i = 0; i < unit.length; i++) {
            unit[i].addEventListener("click", (e) => {
                localStorage.setItem("house", JSON.stringify(rental_properties_data[i]));
                window.location.href = 'index5.html';
                //console.log(unit[i]);
                //let k=unit[i].querySelector(".address").innerText;
            })
        }
        //localStorage.setItem("price-counter",JSON.stringify(counter));
        localStorage.setItem("rental-display", JSON.stringify(rental_units_container.innerHTML))
    }
    catch (err) {
        console.log(err);
    }
}

async function displayAreaData() {
    try {
        const data = await fetch(link, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${TOKEN}`
            }
        });
        const rental_properties_data = await data.json();
        if (min_area_container.length != 0 && max_area_container.length != 0) {
            rental_properties_data.forEach((element) => {
                if (element.area > min_area_container[0] && element.area < max_area_container[0] && !set_of_addresses.has(element.address)) {
                    set_of_addresses.add(element.address);
                    localStorage.setItem(element.address, JSON.stringify(element));
                    addRentalUnit("area", element.is_rental, element.city.region.name, element.image, element.price, element.address, element.bedrooms, element.area, element.zip_code);
                }
            })
        }
        const unit = document.querySelectorAll(".real-estate-container");
        for (let i = 0; i < unit.length; i++) {
            unit[i].addEventListener("click", (e) => {
                localStorage.setItem("house", JSON.stringify(rental_properties_data[i]));
                window.location.href = 'index5.html';
                //console.log(unit[i]);
                //let k=unit[i].querySelector(".address").innerText;
            })
        }
        //localStorage.setItem("area-counter",JSON.stringify(counter));
        localStorage.setItem("rental-display", JSON.stringify(rental_units_container.innerHTML))
    }
    catch (err) {
        console.log(err);
    }
}

async function displayBedCountData() {
    try {
        const data = await fetch(link, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${TOKEN}`
            }
        });
        const rental_properties_data = await data.json();
        if (bed_count.length != 0) {
            rental_properties_data.forEach((element) => {
                if (element.bedrooms == bed_count[0] && !set_of_addresses.has(element.address)) {
                    set_of_addresses.add(element.address);
                    localStorage.setItem(element.address, JSON.stringify(element));
                    addRentalUnit("bed-count", element.is_rental, element.city.region.name, element.image, element.price, element.address, element.bedrooms, element.area, element.zip_code);
                }
            })
        }
        const unit = document.querySelectorAll(".real-estate-container");
        for (let i = 0; i < unit.length; i++) {
            unit[i].addEventListener("click", (e) => {
                localStorage.setItem("house", JSON.stringify(rental_properties_data[i]));
                window.location.href = 'index5.html';
                //console.log(unit[i]);
                //let k=unit[i].querySelector(".address").innerText;
            })
        }
        //localStorage.setItem("bed-count-counter",JSON.stringify(counter));
        localStorage.setItem("rental-display", JSON.stringify(rental_units_container.innerHTML))
    }
    catch (err) {
        console.log(err);
    }
}


let regions_array = ["ქართლი", "კახეთი", "იმერეთი", "სამეგრელო", "გურია", "რაჭა", "ლეჩხუმი", "სამცხე-ჯავახეთი", "აჭარა", "სვანეთი", "მცხეთა-მთიანეთი", "თბილისი"]
function displaySavedData() {
    let set_of_storages = new Set();
    for (let i = localStorage.length - 1; i >= 0; i--) {
        let key = localStorage.key(i);
        if (String(key) == "bed-count") {
            let key1 = JSON.parse(localStorage.getItem(key));
            addTagElementLocalStorage(key1, "bed-count");
            bed_count.push(key1);
            set_of_storages.add("bed-count");
        }
        if (String(key) == "price") {
            let key1 = JSON.parse(localStorage.getItem(key));
            MinMaxArrayAddTagElementLocalStorage(key1, "price");
            let abs1 = key1.split("₾", 2);
            min_price_container.push(Math.abs(abs1[0]));
            max_price_container.push(Math.abs(abs1[1]));
            set_of_storages.add("price");
        }
        if (String(key) == "area") {
            let key1 = JSON.parse(localStorage.getItem(key));
            MinMaxArrayAddTagElementLocalStorage(key1, "area");
            let abs1 = key1.split("მ²", 2);
            min_price_container.push(Math.abs(abs1[0]));
            max_price_container.push(Math.abs(abs1[1]));
            set_of_storages.add("area");
        }
        if (regions_array.includes(String(key))) {
            addTagElementLocalStorage(key, "region");
            region_array.push(key);
            set_of_storages.add("region");
        }
    }
    rental_units_container.innerHTML = JSON.parse(localStorage.getItem("rental-display"));
    const units = document.querySelectorAll(".real-estate-container");
    units.forEach((element) => {
        element.addEventListener("click", () => {
            let address = element.querySelector(".address").innerText;
            console.log(address);
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                if (key == address) {
                    localStorage.setItem("house", localStorage.getItem(key));
                }
            }
            window.location.href = 'rentalUnit.html';
        })
    })

}


window.addEventListener("load", displaySavedData);
//localStorage.clear();

//modal and listing
const add_agent_btn = document.querySelector(".add-agent-btn");
add_agent_btn.addEventListener("click", () => {
    const modal = document.querySelector(".add-agent-modal");
    const overlay = document.querySelector(".add-agent-overlay");
    const add_agent_container = document.querySelector(".add-agent-container");
    add_agent_container.style.zIndex = "3";
    modal.classList.add("add-agent-active");
    overlay.classList.add("blur");

})
const cancel_btn = document.querySelector(".add-agent-cancel");
cancel_btn.addEventListener("click", () => {
    const modal = document.querySelector(".add-agent-modal");
    const overlay = document.querySelector(".add-agent-overlay");
    const add_agent_container = document.querySelector(".add-agent-container");
    add_agent_container.style.zIndex = "-1";
    modal.classList.remove("add-agent-active");
    overlay.classList.remove("blur");
})
const overlay = document.querySelector(".add-agent-overlay");
if (overlay.style.visibility != "hidden") {
    overlay.addEventListener("click", () => {
        const modal = document.querySelector(".add-agent-modal");
        const add_agent_container = document.querySelector(".add-agent-container");
        add_agent_container.style.zIndex = "-1";
        modal.classList.remove("add-agent-active");
        overlay.classList.remove("blur");
    })
}


//add agent filtration
const add_agent_name_form = document.querySelectorAll(".add-agent-inputs");/////correct it
/*
for (let i = 0; i < add_agent_name_form.length; i++) {
    add_agent_name_form[i].addEventListener("input", () => {
        if (i == 0 || i == 1) {
            const text = add_agent_name_form[i].value.trim();
            if (text.length < 2) {
                add_agent_name_form[i].style.border = "1px solid red";
                add_agent_name_form[i].classList.remove("add-agent-form-container-symbols");
                //add_agent_name_form[i].classList.add("add-agent-form-container-check-symbols");
            }
            else {
                add_agent_name_form[i].style.border = "1px solid";
                //add_agent_name_form[i].classList.remove("add-agent-form-container-check-symbols");
                add_agent_name_form[i].classList.add("add-agent-form-container-symbols");
            }
        }
    })
}
*/

add_agent_name_form.forEach((element,index)=>{
    element.addEventListener("input",()=>{
        const text=element.value.trim();
        if(index==0 && text.length<2){
            element.style.border="1px solid red";
            let cont=document.querySelector(".agent-name");
            cont.classList.remove("add-agent-form-container-symbols");
            cont.classList.add("add-agent-form-container-check-symbols");
        }
        else if(index==0 && text.length>=2){
            element.style.border="1px solid";
            let cont=document.querySelector(".agent-name");
            cont.classList.remove("add-agent-form-container-check-symbols");
            cont.classList.add("add-agent-form-container-symbols")
        }
        if(index==1 && text.length<2){
            element.style.border="1px solid red";
            let cont=document.querySelector(".agent-surname");
            cont.classList.remove("add-agent-form-container-symbols");
            cont.classList.add("add-agent-form-container-check-symbols");
        }
        else if(index==1 && text.length>=2){
            element.style.border="1px solid";
            let cont=document.querySelector(".agent-surname");
            cont.classList.remove("add-agent-form-container-check-symbols");
            cont.classList.add("add-agent-form-container-symbols")
        }
        if(index==2 && !text.includes("@redberry.ge")){
            element.style.border="1px solid red";
            let cont=document.querySelector(".agent-gmail");
            cont.classList.remove("add-agent-form-container-gmail");
            cont.classList.add("add-agent-form-container-check-gmail");
        }
        else if(index==2 && text.includes("@redberry.ge")){
            element.style.border="1px solid";
            let cont=document.querySelector(".agent-gmail");
            cont.classList.remove("add-agent-form-container-check-gmail");
            cont.classList.add("add-agent-form-container-gmail");
        }

        if(index==3 && !/^\d+$/.test(text)){
            element.style.border="1px solid red";
            let cont=document.querySelector(".agent-phone");
            cont.classList.remove("add-agent-form-container-phone");
            cont.classList.add("add-agent-form-container-check-phone");
        }
        else if(index==3 && /^\d+$/.test(text)){
            element.style.border="1px solid";
            let cont=document.querySelector(".agent-phone");
            cont.classList.remove("add-agent-form-container-check-phone");
            cont.classList.add("add-agent-form-container-phone");
        }
       
    })
})

const add_agent_form=document.querySelector(".add-agent-forms");
add_agent_form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let img=document.querySelector("#add-agent-image").value;
    let file=new FileReader(img);
    file.readAsDataURL(file);
    //const forms=new FormData(add_agent_form);
    const forms=new FormData(file.result);
    for(let obj of forms){
        console.log(obj[0]+" "+obj[1]);
    }
})








