 function deng() {
    var flag=true
   $('#btn').on('click',function(){
    if(!flag){
        return
    }
   
    var str =/\w{6,8}/g
   console.log($('#name').val()) 
 console.log($('#password').val())



    if (userval.length > 8 || userval.length < 6) {
        $('#yan').html('请输入长度6-8的字体')
        $('#yan').css({
            fontSize:'12px',
            color:'red',
        })
        return;
    }
   var reg=str.test(userval);
    if (!reg){
        $('#yan').html('请输入合格的用户名')
        $('#yan').css({
            fontSize:'12px',
            color:'red',
        })
        return
    }

    if (pasval.length > 8 || pasval.length < 6) {
        $('#zheng').html('密码不合格')
        $('#zheng').css({
            fontSize:'12px',
            color:'red',
        })
        return;
    }
    if (!reg){
        $('#zheng').html('请输入合格的密码')
        $('#zheng').css({
            fontSize:'12px',
            color:'red',
        })
       
        return;
    }
    if(reg){
      location.href='./index.html'
    }

   })
}
deng() 



/* deng();

function deng() {

    var btn = document.querySelector('#btn');
    var user = document.querySelector('#name');
    var pass = document.querySelector('#password');
    var yan = document.querySelector('#yan');
    var zheng = document.querySelector('#zheng');
    var flag=true
    btn.onclick = function () {
        if(!flag){
            return
        }
       
        var str =/\w{6,8}/g
        var userval = user.value
        var pasval = pass.value
        console.log(userval,pasval)


        if (userval.length > 8 || userval.length < 6) {
            yan.innerHTML = '请输入长度6-8的字体'
            yan.style.fontSize=12+'px'
            yan.style.color='red';
            return;
        }
       var reg=str.test(userval);
        if (!reg){
            yan.innerHTML = '请输入合格的用户名'
            yan.style.color='red';
            
            return
        }

        if (pasval.length > 8 || pasval.length < 6) {
            zheng.innerHTML= '密码不合格'
            zheng.style.fontSize=12+'px'
            zheng.style.color='red';
         
            return;
        }
        if (!reg){
            zheng.innerHTML = '请输入合格的密码'
            zheng.style.fontSize=12+'px'
            zheng.style.color='red';
           
            return;
        }
        if(reg){
          
        }
    }
   

} */