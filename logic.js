// JavaScript Document

		// Function to print X or O
			function start()
			{
				var name=prompt("Enter your name : ");
					document.getElementById("player_name").value=(name=="" || name==null)?"PLAYER 1":name.toUpperCase();
				document.getElementById("msg").innerHTML=document.getElementById("player_name").value+"'s TURN";
			}
			
			function print(loc)
			{
				
				if(!(document.getElementById(loc).innerHTML=='X' || document.getElementById(loc).innerHTML=='0'))
				{
					char=document.getElementById("turn").value;
					
					if(char=='0')
					{
						document.getElementById(loc).style.color='#008800';
						document.getElementById("turn").value="X";
						document.getElementById(loc).innerHTML=char;
						document.getElementById("msg").innerHTML=document.getElementById("player_name").value+"'s TURN";
						check();
					}
					
					if(char=='X')
					{
						document.getElementById(loc).style.color='red';
						document.getElementById(loc).innerHTML=char;
						document.getElementById("turn").value="0";
						document.getElementById("msg").innerHTML="COMPUTER's TURN";	
						check();
						computerTurn();
					}
					
					
					
				}
			}
			
			
			function hoverChange(loc)
			{
				if(!(document.getElementById(loc).innerHTML=='X' || document.getElementById(loc).innerHTML=='0'))
				{
					document.getElementById(loc).style.background='#FFFF86';
				}
			}
			
			function check()
			{
				
				// checking horizontally
				for(var i=1;i<9;i+=3)
				{
					if(document.getElementById("c"+i).innerHTML==document.getElementById("c"+(i+1)).innerHTML && document.getElementById("c"+(i+1)).innerHTML==document.getElementById("c"+(i+2)).innerHTML && document.getElementById("c"+i).innerHTML!="")
						winner();	
				}
				// Checking Vertically
				for(var i=1;i<4;i++)
				{
					if(document.getElementById("c"+i).innerHTML==document.getElementById("c"+(i+3)).innerHTML && document.getElementById("c"+(i+3)).innerHTML==document.getElementById("c"+(i+6)).innerHTML && document.getElementById("c"+i).innerHTML!="")
						winner();
							
				}
				// Checking diagonally
				i=1;
					if(document.getElementById("c1").innerHTML==document.getElementById("c5").innerHTML && document.getElementById("c9").innerHTML==document.getElementById("c5").innerHTML && document.getElementById("c1").innerHTML!="")
						winner();	
					
				i=3;
					if(document.getElementById("c3").innerHTML==document.getElementById("c5").innerHTML && document.getElementById("c5").innerHTML==document.getElementById("c7").innerHTML && document.getElementById("c3").innerHTML!="")
						winner();	
				// checking for draw
				var drawcheck=1;
					for(i=1;i<10;i++)
						if(!(document.getElementById("c"+i).innerHTML=="X"||document.getElementById("c"+i).innerHTML=="0"))
							drawcheck=0;
				
				if(drawcheck)
					winner(1);
			}
			
			/*function colorUp(i,j,k)
			{
				// defining color to display for winner
				var colour=document.getElementById("turn").value=="0"?'#456786':'white';
					
				document.getElementById(i).style.background=colour;
				document.getElementById(j).style.background=colour;
				document.getElementById(k).style.background=colour;
			}*/
			function winner(draworwin)
			{
				var turn=document.getElementById("turn").value;
				var name=document.getElementById("turn").value=="0"?document.getElementById("player_name").value:"COMPUTER";
				/*if(document.getElementById("turn").value=="0")
					name="Player 1";
				else
					name="Player 2";*/
				if(!draworwin)
				{
					document.getElementById("msg").innerHTML=name+" WON";
					alert(name+" Won");
				}
				else
				{
					document.getElementById("msg").innerHTML="GAME DRAW";
					alert("GAME DRAW");
				}
				var v=confirm("Do you want to Play again ?");
				if(v==1)
				{
					//Inverting Name
					var name=document.getElementById("turn").value=="X"?document.getElementById("player_name").value:"COMPUTER";
					
					document.getElementById("msg").innerHTML=name+"'s TURN";
					for(var i=1;i<10;i++)
					{
						document.getElementById("c"+i).innerHTML="";
						document.getElementById("c"+i).style.background="#FCF9B6";
					}
				}
				else
				{
					for(var i=1;i<10;i++)
					{
						document.getElementById("c"+i).innerHTML="";
						document.getElementById("c"+i).style.background="#FCF9B6";
					}	// so that pop up never comes up again
					window.open("thankyou.html","_self");	// For firefox
					window.close();
				}
					
//				alert("What do you wish to do ?< br/>"<button value='Exit'></button>);
			}
			function computerTurn()
			{
				flag=1;
				//Holding
				// Checking for 3 pair position of own
				if(flag==1)
				{
					var pos=new Array(0,1,2,3,4,5,6,7,8,9,1,4,7,2,5,8,3,6,9,1,5,9,3,5,7);
					var a,b,c,l1;
					for(l1=1;l1<pos.length&&flag==1;l1+=3)
					{
						a=document.getElementById("c"+pos[l1]).innerHTML;
						b=document.getElementById("c"+pos[l1+1]).innerHTML;
						c=document.getElementById("c"+pos[l1+2]).innerHTML;
						
						if(a=='0' && b=='0' && c=="")
						{
							print("c"+pos[l1+2]);
							flag=0;
						}
						else if(a=='0' && c=='0' && b=="")
						{
							print("c"+pos[l1+1]);
							flag=0;
						}
						else if(b=='0' && c=='0' && a=="")
						{
							print("c"+pos[l1]);
							flag=0;
						}
						else
						{
							flag=1;
						}
							
					}
				}
				
				
				
				
				//Checking for 3pair position opponent
				if(flag==1)
				{
					var pos=new Array(0,1,2,3,4,5,6,7,8,9,1,4,7,2,5,8,3,6,9,1,5,9,3,5,7);
					var a,b,c,l1;
					for(l1=1;l1<pos.length&&flag==1;l1+=3)
					{
						a=document.getElementById("c"+pos[l1]).innerHTML;
						b=document.getElementById("c"+pos[l1+1]).innerHTML;
						c=document.getElementById("c"+pos[l1+2]).innerHTML;
						//alert("own "+pos[l1]+a+pos[l1+1]+b+pos[l1+2]+c);
						if(a=='X' && b=='X' && c=="")
						{
							print("c"+pos[l1+2]);
							flag=0;
						}
						else if(a=='X' && c=='X' && b=="")
						{
							print("c"+pos[l1+1]);
							flag=0;
						}
						else if(b=='X' && c=='X' && a=="")
						{
							print("c"+pos[l1]);
							flag=0;
						}
						else
						{
							flag=1;
						}
							
					}
				}
				if(flag==1)
				{
					//alert("random");
					var rn ,i=1;
					while(i==1)
					{
						rn=Math.ceil(Math.random()*9);
	
						if(!(document.getElementById("c"+rn).innerHTML=='X' || document.getElementById("c"+rn).innerHTML=='0'))
						{
							print("c"+rn);
							break;
						}
						else
							continue;
					}
				}
			}
					