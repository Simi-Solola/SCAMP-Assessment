function demo() {
	var num=document.getElementById("number").value;

	var a,b,c;
	a=0;
	b=1;
	c=0;
	var i;
	for(i=1;i<=num;i++){
		document.write(c+"<br/>");
		a=b;
		b=c;
		c=a+b;
	} 
}