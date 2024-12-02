		/*Scroll Rolante*/
	$("#header2").hide();

	$(window).scroll(function() 
	{
		if ($(this).scrollTop() > 20) /*a rolagem foi maior que 20 pixels*/
		{
			$('#header2').slideDown(300);
			$('#header1').slideUp(300);
		} 
		else
		{
			$('#header2').slideUp(300);
			$('#header1').slideDown(300);
		}
	}
	);

	/*Carrossel*/
	var cont=1;
	var img1="./imagens/Ser1.png";
	var img2="./imagens/Ser2.png";
	var img3="./imagens/Ser3.png";
	var img4="./imagens/Ser4.png";
	var img5="./imagens/Ser5.png";
	var img6="./imagens/Ser6.png";
	var exibir=setInterval("mostra()",3000);

	function mostra()
	{
		document.images["slide"].src=eval("img"+cont);
		if (cont==1)
			{
				document.getElementById("titulo").innerHTML="Reparo de Tela Quebrada";
				document.getElementById("descricao").innerHTML="Telas rachadas ou quebradas? Nós realizamos a troca de telas de celulares com agilidade e precisão, utilizando peças de alta qualidade.";
		    }
		
		else if (cont==2)
			{
				document.getElementById("titulo").innerHTML="Troca de Bateria";
				document.getElementById("descricao").innerHTML="Bateria descarregando rápido ou que não segura carga? Substituímos baterias de forma rápida e com garantia, deixando seu dispositivo como novo.";
		    }
		
		else if (cont==3)
			{ document.getElementById("titulo").innerHTML="Reparo de Placa-Mãe";
				document.getElementById("descricao").innerHTML="Se o seu celular está com problemas de aquecimento ou não liga, podemos ajudar com reparos na placa-mãe e diagnóstico avançado.";
			}
		
		else if (cont==4)
			{ document.getElementById("titulo").innerHTML="Conserto de Câmeras";
				document.getElementById("descricao").innerHTML="Câmera borrada, com falha ou não funcionando? Substituímos câmeras e fazemos ajustes para que você volte a tirar fotos perfeitas.";
			}
			
		else if (cont==5)
			{ document.getElementById("titulo").innerHTML="Limpeza e Manutenção";
				document.getElementById("descricao").innerHTML="Seu celular está aquecendo demais ou funcionando mais devagar? Oferecemos limpeza interna e manutenção preventiva para garantir o bom funcionamento do seu aparelho.";
			}
		
		else 
		{ document.getElementById("titulo").innerHTML="Instalação de Software e Recuperação de Dados";
			document.getElementById("descricao").innerHTML="Se você perdeu seus dados ou está com o celular travado, nossa equipe pode ajudar na recuperação e reinstalação do sistema operacional.";
		}

		
		if (cont<6)
			cont++;
		else
			cont=1;
	}
	function Anterior() 
	{
		clearInterval(exibir);
		if (cont ==6 )
			cont =4;
		else if (cont ==4)
			cont = 2;
		else if(cont ==2)
			cont = 6;
		else if(cont ==5)
			cont = 3;
		else if (cont==3 )
			cont = 1;
		else 
			cont = 5;		  

		document.images["slide"].src=eval("img"+cont);
			if (cont==1)
			  {
				  document.getElementById("titulo").innerHTML="Reparo de Tela Quebrada";
				  document.getElementById("descricao").innerHTML="Telas rachadas ou quebradas? Nós realizamos a troca de telas de celulares com agilidade e precisão, utilizando peças de alta qualidade.";
			  }
		  
		  else if (cont==2)
			  {
				  document.getElementById("titulo").innerHTML="Troca de Bateria";
				  document.getElementById("descricao").innerHTML="Bateria descarregando rápido ou que não segura carga? Substituímos baterias de forma rápida e com garantia, deixando seu dispositivo como novo.";
			  }
		  
		  else if (cont==3)
			  { document.getElementById("titulo").innerHTML="Reparo de Placa-Mãe";
				  document.getElementById("descricao").innerHTML="Se o seu celular está com problemas de aquecimento ou não liga, podemos ajudar com reparos na placa-mãe e diagnóstico avançado.";
			  }
		  
		  else if (cont==4)
			  { document.getElementById("titulo").innerHTML="Conserto de Câmeras";
				  document.getElementById("descricao").innerHTML="Câmera borrada, com falha ou não funcionando? Substituímos câmeras e fazemos ajustes para que você volte a tirar fotos perfeitas.";
			  }
			  
		  else if (cont==5)
			  { document.getElementById("titulo").innerHTML="Limpeza e Manutenção";
				  document.getElementById("descricao").innerHTML="Seu celular está aquecendo demais ou funcionando mais devagar? Oferecemos limpeza interna e manutenção preventiva para garantir o bom funcionamento do seu aparelho.";
			  }
		  
		  else if (cont==6)
			   { document.getElementById("titulo").innerHTML="Instalação de Software e Recuperação de Dados";
			      document.getElementById("descricao").innerHTML="Se você perdeu seus dados ou está com o celular travado, nossa equipe pode ajudar na recuperação e reinstalação do sistema operacional.";
			   }
  
		  
		  if (cont<6)
			  cont++;
		  else
			  cont=1;
			exibir=setInterval("mostra()",3000);
	}
	
		function Proximo()

		{	clearInterval(exibir);
			document.images["slide"].src=eval("img"+cont);
			if (cont==1)
			{
				document.getElementById("titulo").innerHTML="Reparo de Tela Quebrada";
				document.getElementById("descricao").innerHTML="Telas rachadas ou quebradas? Nós realizamos a troca de telas de celulares com agilidade e precisão, utilizando peças de alta qualidade.";
		    }
		
			else if (cont==2)
			{
				document.getElementById("titulo").innerHTML="Troca de Bateria";
				document.getElementById("descricao").innerHTML="Bateria descarregando rápido ou que não segura carga? Substituímos baterias de forma rápida e com garantia, deixando seu dispositivo como novo.";
		    }
		
			else if (cont==3)
			{ document.getElementById("titulo").innerHTML="Reparo de Placa-Mãe";
				document.getElementById("descricao").innerHTML="Se o seu celular está com problemas de aquecimento ou não liga, podemos ajudar com reparos na placa-mãe e diagnóstico avançado.";
			}
		
			else if (cont==4)
			{ document.getElementById("titulo").innerHTML="Conserto de Câmeras";
				document.getElementById("descricao").innerHTML="Câmera borrada, com falha ou não funcionando? Substituímos câmeras e fazemos ajustes para que você volte a tirar fotos perfeitas.";
			}
			
			else if (cont==5)
			{ document.getElementById("titulo").innerHTML="Limpeza e Manutenção";
 			}
		
			else
			{ document.getElementById("titulo").innerHTML="Instalação de Software e Recuperação de Dados";
				document.getElementById("descricao").innerHTML="Se você perdeu seus dados ou está com o celular travado, nossa equipe pode ajudar na recuperação e reinstalação do sistema operacional.";
			}

		
			if (cont<6)
			cont++;
			else
			cont=1;
			exibir=setInterval("mostra()",3000);
		}

	