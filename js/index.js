
test();
function test(){
    var flag=true
    window.addEventListener('scroll',function(){
    var timer;
        var nav=document.querySelector('nav');
        var login=document.querySelector('.login')
        var nav_right=document.querySelector('.nav-right')
        var navs_left=document.querySelector('.navs-left');
        var page=document.documentElement.scrollTop||document.body.scrollTop
        var isheight=parseFloat(getComputedStyle(login,null).height||nav.currentStyle.height);
        if(page>isheight){
            login.style.position='fixed';
            login.style.top=0+'px';
            login.style.left=0+'px'
            nav_right.style.top=0+'px'
            nav_right.style.left=260+'px'
           /* navs_left.style.backgroundColor='red'; */
            login.classList.add('jia')
            var top=-60;
           if(flag){
            flag=false;
            timer=setInterval(function(){
                top=top+7;
                login.style.top=top+'px';
                if(top>=0){
                    clearInterval(timer)
                }
            },16.7)
           }
        }else{
            login.style.position='';
            login.style.top='';
            nav_right.style.top=''
            nav_right.style.left=''
            login.classList.remove('jia')
            flag=true;
        }
    })
}
    window.addEventListener('load',function(){
        $.ajax({
         url:'http://49.232.47.192:9527/api/goodList?page=1',
         method:'get',
         success:function(res){
            var rows=[];
            $.each(res,function(i,item){
                rows.push(`<div class='item'  data-type_one="${item.type_one}" data-type_two="${item.type_two}" price="${item.price}" data-img="${item.img_list_url}" data-title="${item.title}">
                <img src="${item.img_list_url}">
                <p>${item.title}</p>
                <span class="title" >${item.type_one}</span><span class="title">${item.type_two}</span>${item.mack}
                <p class="price">价格:<span>${item.price}</span>元</p>
            </div>`)
           
            })
             $('.list').empty().append(rows.join(''))

            fun()

            },

         error:function(){
     
         },
        })
     
         
     })


       var flag=true    
window.addEventListener('scroll',function(){
    var heig=scrollY+innerHeight>document.documentElement.scrollHeight-10
    if(heig){
        flag=false;
       setTimeout(function(){
           /*  res=res.concat(goodList);
                 ren(res); */
                 $.ajax({
                    url:'http://49.232.47.192:9527/api/goodList',
                    method:'get',
                    data:{
                        page:3,
                        page:5,
                    },
                    success:function(res){
                        console.log(res);
                         if(res.status>=300 && res.status<200){
                             return alert('获取失败') 
                         }
                      var row=[];
                      $.each(res,function(i,item){ 
                    row.push(`<div class='item' data-type_one="${item.type_one}" data-type_two="${item.type_two}" price="${item.price}" data-img="${item.img_list_url}" data-title="${item.title}"><img src="${item.img_list_url}"><p>${item.title}</p>
                     <span class="title">${item.type_one}</span><span class="title">${item.type_two}</span>
                  <p class="price">价格: <span>${item.price}</span>元</p>
                     </div>`)
                      })
                      console.log(row);
                      var list=document.querySelector('.list');
                      list.innerHTML+=row;
                     fun()
                    }
                })
                 flag=true;
        },700)
    }
    
})

fanhui()
function fanhui(){
    var flag=true;
    window.addEventListener('scroll',function(){
        var y=0;
        var y=scrollY;
        var btn=this.document.querySelector('.btn');
        btn.style.display='none';
        if(y>400){
            btn.style.display='block';
        }else{
            btn.style.display='none';
        }
        btn.addEventListener('click',function(){
           
        var move=scrollY;
        if(flag){
         flag=false
     var timer=setInterval(function(){
              move=move-10;
                if(move<=0){

                    clearInterval(timer);
                    scrollTo(0,move)
                    flag=true
                }
                scrollTo(0,move);
                flag=true
            },10)
        }
        })
        })
}
 
$(function(){
    var navation=document.querySelector('.navation');
$.ajax({
    url:'http://49.232.47.192:9527/api/getTypeone',
    method:'get',
    success:function(data){
     var temp='';
     for(let i=0;i<data.length;i++){
         temp+=`
         <h1>${data[i]}</h1>
         `
     }
    navation.innerHTML=temp;
    var lists=document.querySelectorAll('.navation>h1');
    var tap=document.querySelector('.tap');
    for(let i=0;i<lists.length;i++){
        lists[i].onclick=function(){
            $.ajax({
                url:'http://49.232.47.192:9527/api/goodList',
                method:'get',
                success:function(res){
                    var temps=''
                for(let j=0;j<res.length;j++){
                    if(res[j].type_one===lists[i].innerHTML){
                      temps+=`
                       <div class='item' data-type_one="${res[j].type_one}" data-type_two="${res[j].type_two}" price="${res[j].price}" data-img="${res[j].img_list_url}" data-title="${res[j].title}">
                       <h2>${res[j].type_one}</h2>
                      <img src="${res[j].img_list_url}">
                      <p>${res[j].title}</p>
                      <span class="title">${res[j].type_one}</span><span class="title">${res[j].type_two}</span>
                   <p class="price">价格: <span>${res[j].price}</span>元</p>
                      </div> 
                      `
                        tap.innerHTML=temps;
                       fun()
                    }
                }
                }
            })
        }
    }
    }
})
})


$(function(){
  var flag=true;
    $('#search').click(function(){
      
        let productname=$('#productname').val();
        if(productname.length<=0){
            return alert('请输入查询的商品名称');
        }
        $.ajax({
            url:'http://49.232.47.192:9527/api/goodList',
            method:'get',
            success:function(res){
                let product=[];
                $.each(res,function(i,item){
                    if(item.type_two===productname){
                        flag=true;
                      product.push(`<div class='item' data-type_one="${item.type_one}" data-type_two="${item.type_two}" price="${item.price}" data-img="${item.img_list_url}" data-title="${item.title}">
                      <img src="${item.img_list_url}"><p>${item.title}</p>
                      <span class="title">${item.type_one}</span><span class="title">${item.type_two}</span>
                   <p class="price">价格: <span>${item.price}</span>元</p>
                      </div>`)
                    
                    }
                })
                $('.tap').empty().append(product.join(''))
                 
               fun()
            }
        })
    })
})

function fun(){
    $('.tap').on('click','.item',function(){
               
        var title=this.getAttribute('data-title')
        var price=this.getAttribute('price');
        var type_one=this.getAttribute('data-type_one')
        var type_two=this.getAttribute('data-type_two')
        var img=this.getAttribute('data-img');
 
        window.location.href=`./details.html?title=${title}&price=${price}&type_one=${type_one}&type_two=${type_two}&img=${img}`

    })
}