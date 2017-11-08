 var XHR;
 function createXHR(){
     if(window.ActiveXObject){
         XHR=new ActiveXObject('Microsoft.XMLHTTP');
     }else if(window.XMLHttpRequest){
         XHR=new XMLHttpRequest();
     }
 }
 function yvsyhost(i){
     if(XHR.readyState == 4){
         if(XHR.status == 200){    
             var textHTML=XHR.responseText;            
             document.getElementById('out_div'+i).innerHTML=textHTML;
         }
     }
 }
 function yvsyprice(i){
     if(XHR.readyState == 4){
         if(XHR.status == 200){    
             var textHTML=XHR.responseText;            
             partm=textHTML.split(",",1);
             totalm=textHTML.split(",")[1];
		document.getElementById("parttotal").value=partm ;
		document.getElementById("totalmoney").value = totalm;
         }
     }
 }

 function checkmobie(obj){
     createXHR();    
     XHR.open("GET","/chkName.asp?umobie="+obj.value + "&sd=" + Math.random(),true);
     XHR.onreadystatechange=function(){yvsyhost('5')};
     XHR.send(null);
 }
 function checkname(obj){
     createXHR();    
     XHR.open("GET","/chkName.asp?uname="+obj.value + "&sd=" + Math.random(),true);
     XHR.onreadystatechange=function(){yvsyhost('')};
     XHR.send(null);
 }
 function checkemail(obj){
     createXHR();    
     XHR.open("GET","/chkName.asp?uemail="+obj.value + "&sd=" + Math.random(),true);
     XHR.onreadystatechange=function(){yvsyhost('2')};
     XHR.send(null);
 }
 function checkidcard(obj){
     createXHR();    
     XHR.open("GET","/chkName.asp?uidcard="+obj.value + "&sd=" + Math.random(),true);
     XHR.onreadystatechange=function(){yvsyhost('3')};
     XHR.send(null);
 }
 function checkpass(obj){
     createXHR();    
     XHR.open("GET","/chkName.asp?upass="+obj.value + "&sd=" + Math.random(),true);
     XHR.onreadystatechange=function(){yvsyhost('4')};
     XHR.send(null);
 }
 function sendmobie(){
     createXHR();
     XHR.open("GET","/chkName.asp?umobie="+ document.getElementById("mobi").value + "&lm=sendmobi&sd=" + Math.random(),true);
     XHR.onreadystatechange=function(){yvsyhost('5')};
     XHR.send(null);
 }
 function sendemail(){
     createXHR();
     XHR.open("GET","/chkName.asp?uemail="+ document.getElementById("email").value + "&lm=sendemail&sd=" + Math.random(),true);
     XHR.onreadystatechange=function(){yvsyhost('2')};
     XHR.send(null);
 }
 function svcode(){
     createXHR();
     XHR.open("GET","/chkName.asp?umobie="+ document.getElementById("mobi").value + "&sscode="+ document.getElementById("sscode").value + "&lm=sendmobi&sd=" + Math.random(),true);
     XHR.onreadystatechange=function(){yvsyhost('5')};
     XHR.send(null);
 }



 function checkhost(obj){
     createXHR();    
     XHR.open("GET","/chkName.asp?hname="+obj.value + "&sd=" + Math.random(),true);
     XHR.onreadystatechange=function(){yvsyhost('')};
     XHR.send(null);
 }
 function checkdata(obj){
     createXHR();    
     XHR.open("GET","/chkName.asp?dname="+obj.value + "&sd=" + Math.random(),true);
     XHR.onreadystatechange=function(){yvsyhost('')};
     XHR.send(null);
 }
 function checkmail(obj){
     createXHR();    
     XHR.open("GET","/chkName.asp?mname="+obj.value + "&sd=" + Math.random(),true);
     XHR.onreadystatechange=function(){yvsyhost('')};
     XHR.send(null);
 }
 
 function checkvps(obj){
     createXHR();    
     XHR.open("GET","/chkName.asp?vname="+obj.value + "&sd=" + Math.random(),true);
     XHR.onreadystatechange=function(){yvsyhost('')};
     XHR.send(null);
 }
 function checkcdn(obj){
     createXHR();    
     XHR.open("GET","/chkName.asp?cname="+obj.value + "&sd=" + Math.random(),true);
     XHR.onreadystatechange=function(){yvsyhost('')};
     XHR.send(null);
 }
 function checkidc(obj){
     createXHR();    
     XHR.open("GET","/chkName.asp?iname="+obj.value + "&sd=" + Math.random(),true);
     XHR.onreadystatechange=function(){yvsyhost('')};
     XHR.send(null);
 }
 function getos(obj,oslx){
     createXHR();    
     XHR.open("GET","/chkName.asp?getos="+ obj.value + "&oslx=" + oslx + "&sd=" + Math.random(),true);
     XHR.onreadystatechange=yvsycom;
     XHR.send(null);
 }
 
 function yvsycom(){
     if(XHR.readyState == 4){
         if(XHR.status == 200){    
             var textHTML=XHR.responseText;         
				document.getElementById('os_div').innerHTML=textHTML;
         }
     }
 }

function chusrm(txtname,lb) {
	if (lb == '1') {
		if (txtname == 'year') {
			document.getElementById('buyyear').value=$("#year").find("option:selected").val();
		}
		if (txtname.substring(0,4) == 'part') {
			document.getElementById(txtname+'s').value=$("#"+txtname).find("option:selected").val();
		}
	}else{
		if (txtname == 'year') {
			document.getElementById('buyyear').value=$('input[name="year"]:checked').val();
		}
		if (txtname.substring(0,4) == 'part') {
			document.getElementById(txtname+'s').value=$('input[name='+txtname+']:checked').val();
		}
	}
		var dj='';
		for(var ii=0;ii<15;ii++){
				var inputs = document.getElementsByName('part'+ii+'s');
				for(var i=0;i<inputs.length;i++){
					if(inputs[i].name=='part'+ii+'s')
					{dj=dj+ '&part'+ii+'=' + eval(inputs[i].value)}
				}
		}
		dj='/chkName.asp?years=' + document.getElementById("buyyear").value +'&lm=' + document.getElementById("lm").value +'&id=' + document.getElementById("id").value +dj + '&sd=' + Math.random();
     
createXHR();    
     XHR.open("GET",dj,true);
XHR.onreadystatechange=function(){yvsyprice('')};
     XHR.send(null);

}

function validate_required(field,alerttxt)
{
with (field)
  {
  if (value==null||value=="")
    {alert(alerttxt);return false}
  else {return true}
  }
}

function validate_login(thisform)
{
with (thisform)
  {
	if (validate_required(userusername,"用户名必填!")==false)
    {userusername.focus();return false}
	if (isNumberOr_Letter(userusername.value)==false)
    {userusername.focus();alert("用户名非法");return false}
	if (validate_required(password,"密码必填!")==false)
    {password.focus();return false}
  }
}

function validate_form(thisform)
{
with (thisform)
  {
	if (validate_required(password,"密码必填!")==false)
    {password.focus();return false}
	if (password.value!=repassword.value)
    {repassword.focus();alert("重复密码不一致");return false}
	if (validate_required(email,"Email必填!")==false)
    {email.focus();return false}
	if (mobi.value=="")
    {mobi.focus();alert("手机必填");return false}
	if (mobi.value.length!=11)
    {mobi.focus();alert("手机值不正确");return false}
	if(password.value.length < 6)
	{password.focus();alert("密码至少6位");return false}
	if (checkEmail(email.value,"Email非法!")==false)
    {email.focus();return false}
	
  }
}

function isNumber( s ){   
var regu = "^[0-9]+$"; 
var re = new RegExp(regu); 
if (s.search(re) != -1) { 
return true; 
} else { 
return false; 
} 
} 

function isNumberOr_Letter( s ){//判断是否是数字或字母 
var regu = "^[0-9a-zA-Z\_\@\.\-]+$"; 
var re = new RegExp(regu); 
if (re.test(s)) { 
return true; 
}else{ 
return false; 
} 
} 
function checkEmail(strEmail) { 
var emailReg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/; 
if( emailReg.test(strEmail) ){ 
return true; 
}else{ 
alert("您输入的Email地址格式不正确！"); 
return false; 
} 
}


function checkAll() 
{ 
var code_Values = document.getElementsByTagName("input"); 
for(i = 0;i < code_Values.length;i++){ 
if(code_Values[i].type == "checkbox") 
{ 
code_Values[i].checked = true; 
} 
} 
} 
function uncheckAll() 
{ 
var code_Values = document.getElementsByTagName("input"); 
for(i = 0;i < code_Values.length;i++){ 
if(code_Values[i].type == "checkbox") 
{ 
code_Values[i].checked = false; 
} 
} 
} 