const breakingNews=()=>{
    const url='https://openapi.programming-hero.com/api/news/categories'
    fetch(url)
	.then(response => response.json())
	.then(data =>showNewsHeader(data.data.news_category))
	.catch(err => console.error(err));
}
const showNewsHeader=(data)=>{
    // console.log(data)
    const ul =document.getElementById('breaking-news');
    data.forEach(datas => {
        // console.log(datas)
        const li = document.createElement('p')
        li.innerHTML=`
        <a href="#" class="text-decoration-none fw-bold active text-secondary" onclick="categoryNews('${datas.category_id}','${datas.category_name}')">${datas.category_name}</a>
        `
        
        ul.appendChild(li)  
    });
    
}
const categoryNews=(id, category_name) =>{
    const url=`
    https://openapi.programming-hero.com/api/news/category/${id}
    `
    fetch(url)
    .then(res=>res.json())
    .then(data=>categoryCard(data.data, category_name))
    .catch(error=>console.log(error))
}
const categoryCard=(data , category_name)=>{
    console.log(data,category_name)
    document.getElementById('allNews').innerText=`${data.length}`
    document.getElementById('catagoryName').innerText=`${category_name}`;

const mainCard=document.getElementById('cardSection');
mainCard.innerHTML='';
data.forEach( singledata=> {
console.log(singledata)

const div= document.createElement('div');
div.classList.add('card','mb-3');
div.innerHTML=`
<div class="row g-0">
                <div class="col-md-4">
                    <img src="${singledata.image_url}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${singledata.author.name? singledata.author.name:'no title'}</h5>
                        <p class="card-text">${singledata.details.slice(0,200)}...</p>
                        <p class="card-text"><small class="text-muted">${singledata.author.published_date}</small></p>
                    </div>
                </div>
            </div>
`
mainCard.appendChild(div)
 }); 
}


 breakingNews()