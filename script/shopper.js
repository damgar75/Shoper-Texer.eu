//Pogrubienie tytułów w widoku wyszukiwania
window.addEventListener('load', function(){
  var x = document.getElementsByClassName("productname");
  var i;
  if(document.documentElement.lang=="pl"){
    for (i = 0; i < x.length; i++){
    x[i].innerHTML = x[i].innerHTML.replace( /Basic Czarne./g,'Dywaniki<br/><b>Basic Czarne</b><br/>');
    x[i].innerHTML = x[i].innerHTML.replace( /Basic Antracyt./g,'Dywaniki<br/><b>Basic Antracyt</b><br/>');
    x[i].innerHTML = x[i].innerHTML.replace( /Basic Szare./g,'Dywaniki<br/><b>Basic Szare</b><br/>');
    x[i].innerHTML = x[i].innerHTML.replace( /Carbon./g,'Dywaniki<br/><b>Carbon</b><br/>');
    x[i].innerHTML = x[i].innerHTML.replace( /Logo./g,'Dywaniki<br/><b>Logo</b><br/>');
    x[i].innerHTML = x[i].innerHTML.replace( /Premium./g,'Dywaniki<br/><b>Premium</b><br/>');
    x[i].innerHTML = x[i].innerHTML.replace( /Excellence./g,'Dywaniki<br/><b>Excellence</b><br/>');
    x[i].innerHTML = x[i].innerHTML.replace( /Sport./g,'Dywaniki<br/><b>Sport</b><br/>');
    }
  }
});

//sticky bar
if ($(window).width() >= 768) {
  window.addEventListener('scroll', function(){
  	Sticky();
  });

  window.addEventListener('resize', function(){
  	Sticky();
  });

  function Sticky(){
    var tempX = document.querySelector(".row");
    var tempY = document.querySelector(".menu.row");

    if ($(this).scrollTop() > 1 && !$(".menu.row").is(':hover'))
    {
      tempX.style.position = "sticky";
      tempY.style.position = "sticky";
      tempX.style.zIndex = "11";
      tempX.style.top = 0;
      tempY.style.top = tempX.offsetHeight+"px";
      tempX.style.backgroundColor = "rgb(23,23,23, 1)";
      tempY.style.backgroundColor = "rgb(23,23,23, 1)";
      tempX.style.transition = "background-color 80ms ease-out";
      tempY.style.transition = "background-color 80ms ease-out";
      tempY.classList.add("sticky");
    }
    if ($(this).scrollTop() < 1)
    {
      tempX.style.removeProperty('position');
      tempY.style.removeProperty('position')
      tempX.style.removeProperty('z-index');
      tempX.style.removeProperty('top');
      tempY.style.removeProperty('top');
      tempX.style.backgroundColor = "rgb(23,23,23, 0.2)";
      tempY.style.backgroundColor = "rgb(23,23,23, 0.2)";
      tempX.style.transition = "background-color 200ms ease-in";
      tempY.style.transition = "background-color 200ms ease-in";
      tempY.classList.remove("sticky");
    }
  }
}
//mapa Google maps
function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = { center: new google.maps.LatLng(51.5, -0.2), zoom: 10 };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}

window.addEventListener('load', function(){
  if($(".search5").is(':visible')){
  	Load("D");
  	$(".field_marka ul").addClass("list-hidden");
  	$(".field_model ul").addClass("list-hidden");

  	$(".field_marka li").click(function(){
  		if(!$(".field_model ul").hasClass("list-hidden")){
  			if($(".field_model li").css('display') == "block"){
  				$(".field_model li").removeAttr("style");
  				$(".field_model li").css("display","none");
  				$(event.target).css("display","block");
  				$(".field_model ul").addClass("dropdown-style");
  			}
  		}
  		if($(".field_marka ul").hasClass("list-hidden")){
  			$(".field_marka li").css("display","block");
  			$(".field_marka ul").removeAttr("class");
  		}else{
  			if($(".field_marka li").css('display') == "block"){
  				$(".field_marka li").removeAttr("style");
  				$(".field_marka li").css("display","none");
  				$(this).css("display","block");
  				$(".field_marka ul").addClass("list-hidden");
  				List(this.getAttribute('value'));
  			}
  		}
  	});
  	$(".field_model").click(function(event){
  		if($(".field_model ul").hasClass("list-hidden")){
  			$(".field_model li").css("display","block");
  			$(".field_model ul").removeAttr("class");
  		}else{
  			if($(".field_model li").css('display') == "block"){
  				$(".field_model li").removeAttr("style");
          	$(".field_model li").css("display","none");
  					$(event.target).css("display","block");
  					$(".field_model ul").addClass("list-hidden");
  				if(event.target.getAttribute('value')!=0 & event.target.getAttribute('value')!='model'){
  					if(document.documentElement.lang=="de"){
  						location.href="https://texer.eu/de_DE"+event.target.getAttribute('value');
  					}
  					if(document.documentElement.lang=="pl"){
  						location.href="https://texer.eu/pl"+event.target.getAttribute('value');
  					}
  				}
  			}
  		}
  	});
  }
  if($(".form-mini").is(':visible')){
    Load("M");
  }
});

function Load(mode){
   var marki = {
     "Marka":"marka",
     "Alfa Romeo":"alfa romeo",
     "Audi":"audi",
     "BMW":"bmw",
     "Citroen":"citroen",
     "Chevrolet":"chevrolet",
     "Dacia":"dacia",
     "Daf":"daf",
     "Fiat":"fiat",
     "Ford":"ford",
     "Honda":"honda",
     "Hyundai":"hyundai",
     "Kia":"kia",
     "Lancia":"lancia",
     "Land Rover":"land rover",
     "Mazda":"mazda",
     "Mercedes-Benz":"mercedes-benz",
     "Mitsubishi":"mitsubishi",
     "Nissan":"nissan",
     "Opel":"opel",
     "Peugeot":"peugeot",
     "Porsche":"porsche",
     "Renault":"renault",
     "Seat":"seat",
     "Smart":"smart",
     "Subaru":"subaru",
     "Suzuki":"suzuki",
     "Skoda":"skoda",
     "Toyota":"toyota",
     "Volvo":"volvo",
     "Volkswagen":"vw"
   }
   if (mode=="D") {
     var marka = document.getElementsByClassName("field_marka")[0].children[0];
     var model = document.getElementsByClassName("field_model")[0].children[0];

     while (marka.children[0]) {
       marka.children[0].remove();
     }

     for(i in marki){
      var li = document.createElement("li");
      li.innerText = i;
      li.setAttribute('value',marki[i]);
      marka.appendChild(li);
     }
   }
   if (mode=="M") {
    var marka = document.getElementById("form_marka");
    var model = document.getElementById("form_model");
    while(marka[0])marka.remove(0);
    model[0] = new Option("Model","model")
    for(i in marki)marka[marka.length] = new Option(i,marki[i]);
  }
}



function Item(y){
  if(document.documentElement.lang=="de"){
    location.href="https://texer.eu/de_DE"+y.value;
  }
  if(document.documentElement.lang=="pl"){
    location.href="https://texer.eu/pl"+y.value;
  }
}

function List(x,y){
	var modele ={"marka":{"model":"Model"},"alfa romeo":{"model":"Model","/c/147-2000-2010/949":"147 2000-2010","/c/159-Sportwagon-2005-2011/1390":"159 Sportwagon 2005-2011","/c/MiTo-955-2008-/950":"MiTo 955 2008-"},"audi":{"model":"Model","/c/2000-2004/1387":"2000-2004","/c/2004-2007/1388":"2004-2007","/c/A1-8X-2010-/952":"A1 8X 2010-","/c/A2-1999-2005/953":"A2 1999-2005","/c/A3-8L-1996-2003/954":"A3 8L 1996-2003","/c/A3-8P-2003-2013/955":"A3 8P 2003-2013","/c/A3-8V-2012-/956":"A3 8V 2012-","/c/A4-B5-8D-1994-2001/957":"A4 B5 8D 1994-2001","/c/A4-B6-B7-8E-8F-2000-2008/958":"A4 B6 B7 8E 8F 2000-2008","/c/A4-B8-8K-2008-2015/959":"A4 B8 8K 2008-2015","/c/A4-B9-2015-/960":"A4 B9 2015-","/c/A5-8T-2007-2016/1386":"A5 8T 2007-2016","/c/A6-C5-4B-1997-2004-335/961":"A6 C5 4B 1997-2004 335","/c/A6-C5-4B-1997-2004-365/962":"A6 C5 4B 1997-2004 365","/c/A6-C6-4F-2004-2006/963":"A6 C6 4F 2004-2006","/c/A6-C6-4F-2006-2011/964":"A6 C6 4F 2006-2011","/c/A6-C7-4G-2011-/965":"A6 C7 4G 2011-","/c/A8-D2-4D-1994-2002/966":"A8 D2 4D 1994-2002","/c/A8-D3-4E-2002-2009/967":"A8 D3 4E 2002-2009","/c/A8-D4-2010-2017/968":"A8 D4 2010-2017","/c/A8-D4-Long-2010-2017/1345":"A8 D4 Long 2010-2017","/c/Q3-8U-2011-/969":"Q3 8U 2011-","/c/Q5-8R-2008-2017/970":"Q5 8R 2008-2017","/c/Q5-FY-2017-/971":"Q5 FY 2017-","/c/Q7-4L-2005-2015/972":"Q7 4L 2005-2015","/c/Q7-4M-2015-/973":"Q7 4M 2015-","/c/TT-8J-2006-2014/974":"TT 8J 2006-2014","/c/TT-8N-1998-2006/975":"TT 8N 1998-2006","/c/TT-8S-FV-2014-/1391":"TT 8S FV 2014-"},"bmw":{"model":"Model","/c/X1-E84-2009-2016/1392":"X1 E84 2009-2016","/c/X1-F48-2015-/989":"X1 F48 2015-","/c/X3-E83-2003-2010/1393":"X3 E83 2003-2010","/c/X3-F25-2010-2017/1352":"X3 F25 2010-2017","/c/X5-E53-1999-2006/1394":"X5 E53 1999-2006","/c/X5-E70-2006-2013/990":"X5 E70 2006-2013","/c/X6-E71-2008-2014/1395":"X6 E71 2008-2014","/c/1-E81-2004-2013/977":"1 E81 2004-2013","/c/1-E87-2004-2013/978":"1 E87 2004-2013","/c/1-F20-2011-/979":"1 F20 2011-","/c/3-E36-1990-2000/980":"3 E36 1990-2000","/c/3-E46-1998-2007/981":"3 E46 1998-2007","/c/3-E90-2004-2011/983":"3 E90 2004-2011","/c/3-F30-2011-/984":"3 F30 2011-","/c/4-E46-X-Drive-1998-2007/982":"4 E46 X-Drive 1998-2007","/c/5-E39-1995-2004/985":"5 E39 1995-2004","/c/5-E60-2002-2010/986":"5 E60 2002-2010","/c/5-F10-przedlift-2011-2013/987":"5 F10 przedlift 2011-2013","/c/5-F10-FL-2013-2017/1329":"5 F10 FL 2013-2017","/c/7-F01-2008-2015/988":"7 F01 2008-2015"},"chevrolet":{"model":"Model","/c/Aveo-II-T300-2011-/1354":"Aveo II T300 2011-","/c/Cruze-I-2008-2016/1355":"Cruze I 2008-2016","/c/Kalos-2002-2011/1396":"Kalos 2002-2011","/c/Lacetti-2004-2012/1397":"Lacetti 2004-2012","/c/Malibu-V-2011-2015/1398":"Malibu V 2011-2015","/c/Matiz-II-2005-2009/1356":"Matiz II 2005-2009","/c/Nubira-2004-2010/1399":"Nubira 2004-2010","/c/Orlando-2010-/1400":"Orlando 2010-","/c/Trax-2013-/1403":"Trax 2013-","/c/Spark-II-2005-2009/1402":"Spark II 2005-2009","/c/Spark-M30-2009-2015/1401":"Spark M30 2009-2015"},"citroen":{"model":"Model","/c/Berlingo-1996-2010/1357":"Berlingo 1996-2010","/c/DS3-2009-2016/1413":"DS3 2009-2016","/c/C4-Aircross-2012-/1358":"C4 Aircross 2012-","/c/Jumper-I-1994-2006/1414":"Jumper I 1994-2006","/c/C-Elysee-2013-/1404":"C-Elysee 2013-","/c/Nemo-2007-/1415":"Nemo 2007-","/c/C2-2003-2009/1405":"C2 2003-2009","/c/Xsara-Picasso-1999-2010/1416":"Xsara Picasso 1999-2010","/c/C3-I-2002-2009/1406":"C3 I 2002-2009","/c/C3-I-Pluriel-2002-2010/1407":"C3 I Pluriel 2002-2010","/c/C3-Picasso-2009-/1408":"C3 Picasso 2009-","/c/C4-I-typ-L-2004-2010/1409":"C4 I typ L 2004-2010","/c/C4-II-typ-N-2010-/1410":"C4 II typ N 2010-","/c/C4-Picasso-II-2013-/1411":"C4 Picasso II 2013-","/c/C5-I-2001-2008/1412":"C5 I 2001-2008","/c/C-Crosser-2007-2012/992":"C-Crosser 2007-2012","/c/C1-I-2005-2014/993":"C1 I 2005-2014","/c/C1-II-2014-/994":"C1 II 2014-","/c/C3-II-2009-2016/995":"C3 II 2009-2016","/c/C3-III-2017-/996":"C3 III 2017-","/c/C4-Grand-Picasso-2006-2013/997":"C4 Grand Picasso 2006-2013","/c/C4-Picasso-I-2006-2013/998":"C4 Picasso I 2006-2013","/c/C5-II-2008-/999":"C5 II 2008-","/c/Jumper-II-2006-/1000":"Jumper II 2006-","/c/Jumpy-II-2007-2016/1001":"Jumpy II 2007-2016","/c/Jumpy-III-2016-/1002":"Jumpy III 2016-","/c/Saxo-1996-2003/1003":"Saxo 1996-2003"},"dacia":{"model":"Model","/c/Lodgy-2012-/1360":"Lodgy 2012-","/c/Logan-MCV-I-7m-2007-/1361":"Logan MCV I 7m 2007-","/c/Dokker-2012-/1417":"Dokker 2012-","/c/Logan-II-2012-/1418":"Logan II 2012-","/c/Sandero-II-2012-/1419":"Sandero II 2012-","/c/Sandero-I-2008-2012/1005":"Sandero I 2008-2012","/c/Duster-2010-2017/1359":"Duster 2010-2017"},"daf":{"model":"Model","/c/XF-105-P-L-2005-/1009":"XF 105 P+L 2005-","/c/XF-Euro6-AUTOMAT-2013-/1010":"XF Euro6 AUTOMAT 2013-","/c/XF-Euro6-MANUAL-2013-/1011":"XF Euro6 MANUAL 2013-","/c/XF-Euro6-P-L-2013-/1012":"XF Euro6 P+L 2013-","/c/XF105%2C-XF-Euro6-AUTOMAT-2005-2013-/1013":"XF105, XF Euro6 AUTOMAT 2005- / 2013-","/c/XF105%2C-XF-Euro6-MANUAL-2005-2013-/1014":"XF105, XF Euro6 MANUAL 2005- / 2013-","/c/CF-Euro6-2013-/1420":"CF Euro6 2013-","/c/CF-Euro6-SRODKOWY-2013-/1421":"CF Euro6 \u015aRODKOWY 2013-","/c/CF-Euro6-R-L-2013-/1422":"CF Euro6 R+L 2013-","/c/XF-105-AUTOMAT-2005-/1007":"XF 105 AUTOMAT 2005-","/c/XF-105-MANUAL-2005-/1008":"XF 105 MANUAL 2005-"},"dodge":{"model":"Model","/c/Journey-2008-/1424":"Journey 2008-"},"fiat":{"model":"Model","/c/Fullback-2015-/1362":"Fullback 2015-","/c/Talento-2016-/1363":"Talento 2016-","/c/Doblo-I-2000-2009/1425":"Doblo I 2000-2009","/c/Doblo-II-2010-/1426":"Doblo II 2010-","/c/Ducato-II-1994-2006/1427":"Ducato II 1994-2006","/c/Fiorino-III-2007-/1428":"Fiorino III 2007-","/c/Linea-2007-2015/1429":"Linea 2007-2015","/c/Tipo-Kombi-2016-/1430":"Tipo Kombi 2016-","/c/500-2007-/1016":"500 2007-","/c/500L-2012-/1017":"500L 2012-","/c/Bravo-II-2007-2014/1018":"Bravo II 2007-2014","/c/Ducato-III-2006-/1019":"Ducato III 2006-","/c/Freemont-2011-/1020":"Freemont 2011-","/c/Grande-Punto-2005-2009/1021":"Grande Punto 2005-2009","/c/Panda-II-2003-2012/1022":"Panda II 2003-2012","/c/Panda-III-2012-/1023":"Panda III 2012-","/c/Punto-Evo-2008-2012/1024":"Punto Evo 2008-2012","/c/Punto-I-1993-1999/1025":"Punto I 1993-1999","/c/Scudo-II-2006-2016/1026":"Scudo II 2006-2016","/c/Sedici-2005-2014/1027":"Sedici 2005-2014","/c/Seicento-1998-2010/1028":"Seicento 1998-2010","/c/Stilo-2001-2007/1029":"Stilo 2001-2007","/c/Tipo-Sedan-2015-/1030":"Tipo Sedan 2015-"},"ford":{"model":"Model","/c/StreetKa-2003-2005/1364":"StreetKa 2003-2005","/c/Fusion-2002-2013/1431":"Fusion 2002-2013","/c/Ka-III-Ka-2016-/1432":"Ka III (Ka+) 2016-","/c/Ranger-III-2011-/1433":"Ranger III 2011-","/c/S-Max-II-5m-2015-/1434":"S-Max II 5m 2015-","/c/Tourneo-Connect-I-2002-2013/1435":"Tourneo Connect I 2002-2013","/c/Tourneo-Custom-2012-/1436":"Tourneo Custom 2012-","/c/Galaxy-I-5m-1995-2005/1340":"Galaxy I 5m 1995-2005","/c/Galaxy-II-7m-2012-2015/1341":"Galaxy II 7m 2012-2015","/c/B-Max-2012-2017/1032":"B-Max 2012-2017","/c/Focus-C-MAX-2003-2010/1039":"Focus C-MAX 2003-2010","/c/C-Max-II-2010-/1033":"C-Max II 2010-","/c/Edge-II-2016-/1034":"Edge II 2016-","/c/Fiesta-V-JH-JD-2002-2004/1035":"Fiesta V JH JD 2002-2004","/c/Fiesta-V-JH-JD-2004-2008/1036":"Fiesta V JH JD 2004-2008","/c/Fiesta-VI-przedlift-2008-2011/1037":"Fiesta VI przedlift 2008-2011","/c/Fiesta-VI-FL-2011-2017/1038":"Fiesta VI FL 2011-2017","/c/Focus-I-1998-2004/1040":"Focus I 1998-2004","/c/Focus-II-2004-2011/1041":"Focus II 2004-2011","/c/Focus-III-2010-/1042":"Focus III 2010-","/c/Galaxy-I-5m-1995-2005/1044":"Galaxy I 5m 1995-2005","/c/Galaxy-I-7m-1995-2005/1043":"Galaxy I 7m 1995-2005","/c/Galaxy-II-5m-2006-2012/1046":"Galaxy II 5m 2006-2012","/c/Galaxy-II-5m-2012-2015/1047":"Galaxy II 5m 2012-2015","/c/Galaxy-II-7m-2006-2012/1045":"Galaxy II 7m 2006-2012","/c/Galaxy-II-7m-2012-2015/1048":"Galaxy II 7m 2012-2015","/c/Grand-Tourneo-Connect-II-2013-/1330":"Grand Tourneo Connect II 2013-","/c/Ka-II-2008-2016/1049":"Ka II 2008-2016","/c/Kuga-I-2008-2012/1050":"Kuga I 2008-2012","/c/Kuga-II-2012-/1051":"Kuga II 2012-","/c/Mondeo-III-2000-2007/1052":"Mondeo III 2000-2007","/c/Mondeo-IV-2007-2012/1053":"Mondeo IV 2007-2012","/c/Mondeo-IV-2012-2014/1054":"Mondeo IV 2012-2014","/c/Mondeo-V-2014-/1055":"Mondeo V 2014-","/c/Ranger-II-2007-2011/1056":"Ranger II 2007-2011","/c/S-Max-5m-2006-2012/1057":"S-Max 5m 2006-2012","/c/S-Max-5m-2012-2015/1059":"S-Max 5m 2012-2015","/c/S-Max-7m-2006-2012/1058":"S-Max 7m 2006-2012","/c/S-Max-7m-2012-2015/1060":"S-Max 7m 2012-2015","/c/Tourneo-Connect-II-2013-/1331":"Tourneo Connect II 2013-","/c/Transit-Courier-2014-/1061":"Transit Courier 2014-"},"honda":{"model":"Model","/c/CR-V-II-2001-2006/1437":"CR-V II 2001-2006","/c/CR-V-III-2006-2011/1438":"CR-V III 2006-2011","/c/Jazz-II-2001-2008/1439":"Jazz II 2001-2008","/c/Accord-VII-2002-2008/1063":"Accord VII 2002-2008","/c/Accord-VIII-2008-2015/1064":"Accord VIII 2008-2015","/c/Civic-VIII-HTB-5D-2006-2011/1066":"Civic VIII HTB 5D 2006-2011","/c/Civic-IX-5D-2012-/1065":"Civic IX 5D 2012-","/c/Civic-X-HTB-2017-/1067":"Civic X HTB 2017-","/c/CR-V-IV-2012-/1068":"CR-V IV 2012-","/c/HR-V-II-2015-/1069":"HR-V II 2015-","/c/Jazz-III-2008-2013/1070":"Jazz III 2008-2013","/c/Jazz-IV-2015-/1071":"Jazz IV 2015-"},"hyundai":{"model":"Model","/c/i20-II-2014-/1342":"i20 II 2014-","/c/H350-2015-/1365":"H350 2015-","/c/Getz-2002-2011/1440":"Getz 2002-2011","/c/i30-III-2016-/1441":"i30 III 2016-","/c/Accent-III-MC-2005-2011/1073":"Accent III MC 2005-2011","/c/Elantra-V-2010-2016/1074":"Elantra V 2010-2016","/c/Elantra-VI-2016-/1075":"Elantra VI 2016-","/c/i10-I-2007-2013/1076":"i10 I 2007-2013","/c/i10-II-2013-/1077":"i10 II 2013-","/c/i20-I-PB-2008-2014/1078":"i20 I PB 2008-2014","/c/i20-II-2014-/1079":"i20 II 2014-","/c/i30-I-FD-2007-2012/1080":"i30 I FD 2007-2012","/c/i30-II-GD-2012-2017/1081":"i30 II GD 2012-2017","/c/i40-2011-/1082":"i40 2011-","/c/ix20-JC-2010-/1083":"ix20 JC 2010-","/c/ix35-LM-2009-2015/1084":"ix35 LM 2009-2015","/c/Santa-Fe-II-przedlift-2010-2012/1086":"Santa Fe II przedlift 2010-2012","/c/Santa-Fe-II-FL-2006-2009/1085":"Santa Fe II FL 2006-2009","/c/Santa-Fe-III-2012-/1087":"Santa Fe III 2012-","/c/Tucson-I-2004-2010/1088":"Tucson I 2004-2010","/c/Tucson-III-2015-/1089":"Tucson III 2015-"},"iveco":{"model":"Model","/c/Dali-VI-2014-/1443":"Dali VI 2014-"},"jeep":{"model":"Model","/c/Wrangler-III-JK-2007-2018/1091":"Wrangler III JK 2007-2018"},"kia":{"model":"Model","/c/Stinger-AWD-2017-/1367":"Stinger AWD 2017-","/c/Carens-II-2002-2006/1444":"Carens II 2002-2006","/c/Ceed-I-przedlift-2006-2009/1346":"Cee'd I przedlift 2006-2009","/c/Stinger-2WD-2017-/1366":"Stinger 2WD 2017-","/c/Carens-III-2006-2012/1093":"Carens III 2006-2012","/c/Carens-IV-2013-/1094":"Carens IV 2013-","/c/Ceed-I-FL-2009-2012/1095":"Cee'd I FL 2009-2012","/c/Ceed-II-2012-/1096":"Cee'd II 2012-","/c/Niro-2016-/1097":"Niro 2016-","/c/Optima-III-TF-2011-2015/1098":"Optima III TF 2011-2015","/c/Picanto-II-JE-2011-/1099":"Picanto II JE 2011-","/c/Picanto-III-2017-/1100":"Picanto III 2017-","/c/Rio-II-DE-2005-2011/1101":"Rio II DE 2005-2011","/c/Rio-III-UB-2011-/1102":"Rio III UB 2011-","/c/Rio-IV-2017-/1103":"Rio IV 2017-","/c/Sorento-I-2003-2009/1104":"Sorento I 2003-2009","/c/Sorento-II-przedlift-2009-2012/1105":"Sorento II przedlift 2009-2012","/c/Sorento-II-FL-2013-2015/1106":"Sorento II FL 2013-2015","/c/Sorento-III-2015-/1107":"Sorento III 2015-","/c/Soul-I-AM-2008-2013/1108":"Soul I AM 2008-2013","/c/Soul-II-PS-2013-/1109":"Soul II PS 2013-","/c/Sportage-II-2004-2010/1110":"Sportage II 2004-2010","/c/Sportage-III-2010-2016/1111":"Sportage III 2010-2016","/c/Sportage-IV-2016-/1112":"Sportage IV 2016-","/c/Venga-YN-2009-/1113":"Venga YN 2009-"},"land rover":{"model":"Model","/c/Discovery-Sport-2014-/1176":"Discovery Sport 2014-","/c/Evoque-2011-/1370":"Evoque 2011-"},"man":{"model":"Model","/c/TGA-XXL-2000-/1115":"TGA XXL 2000-"},"mazda":{"model":"Model","/c/CX-7-2006-2012-BENZYNA/1343":"CX-7 2006-2012 BENZYNA","/c/CX-7-2009-2012-DISEL/1344":"CX-7 2009-2012 DISEL","/c/2-II-2007-2014/1347":"2 II 2007-2014","/c/CX-7-2009-2012-DISEL/1389":"CX-7 2009-2012 DISEL","/c/2-III-2015-/1117":"2 III 2015-","/c/3-I-BK-2003-2009/1118":"3 I BK 2003-2009","/c/3-II-2009-2014/1119":"3 II 2009-2014","/c/3-III-2013-/1120":"3 III 2013-","/c/5-I-2005-2010/1121":"5 I 2005-2010","/c/6-I-GG-2002-2007/1122":"6 I GG 2002-2007","/c/6-II-2008-2012/1123":"6 II 2008-2012","/c/6-III-GJ-2012-/1124":"6 III GJ 2012-","/c/BT-50-I-2007-2011/1125":"BT-50 I 2007-2011","/c/CX-3-2015-/1126":"CX-3 2015-","/c/CX-5-2012-/1127":"CX-5 2012-","/c/CX-7-2006-2012-BENZYNA/1128":"CX-7 2006-2012 BENZYNA","/c/CX-7-2009-2012-DISEL/1129":"CX-7 2009-2012 DISEL","/c/Premacy-I-1999-2005/1130":"Premacy I 1999-2005","/c/Premacy-II-2005-2010/1131":"Premacy II 2005-2010"},"mercedes-benz":{"model":"Model","/c/Actros-MP-4-2011-/1136":"Actros MP 4 2011-","/c/Actros-MP-4-R-L-2011-/1137":"Actros MP 4 R+L 2011-","/c/A-Klasa-W168-1997-2004/1133":"A-Klasa W168 1997-2004","/c/A-Klasa-W169-2004-2012/1134":"A-Klasa W169 2004-2012","/c/A-Klasa-W176-2012-/1135":"A-Klasa W176 2012-","/c/B-Klasa-W245-2005-2011/1138":"B-Klasa W245 2005-2011","/c/B-Klasa-W246-2011-2018/1139":"B-Klasa W246 2011-2018","/c/C-Klasa-W202-1993-2001/1140":"C-Klasa W202 1993-2001","/c/C-Klasa-W203-2000-2007/1141":"C-Klasa W203 2000-2007","/c/C-Klasa-W204-2007-2014/1142":"C-Klasa W204 2007-2014","/c/C-Klasa-W205-2014-/1143":"C-Klasa W205 2014-","/c/Citan-W415-2012-/1144":"Citan W415 2012-","/c/E-Klasa-W124-1984-1997/1145":"E-Klasa W124 1984-1997","/c/E-Klasa-W210-1995-2003/1146":"E-Klasa W210 1995-2003","/c/E-Klasa-W211-2002-2009/1147":"E-Klasa W211 2002-2009","/c/E-Klasa-W212-2009-2016/1148":"E-Klasa W212 2009-2016","/c/E-Klasa-W213-2016-/1149":"E-Klasa W213 2016-","/c/GL-Klasa-X166-2012-/1150":"GL-Klasa X166 2012-","/c/GLC-Klasa-2015-/1151":"GLC-Klasa 2015-","/c/GLK-Klasa-X204-2008-2015/1152":"GLK-Klasa X204 2008-2015","/c/ML-Klasa-W164-2005-2011/1153":"ML-Klasa W164 2005-2011","/c/ML-Klasa-W166-2011-2015/1154":"ML-Klasa W166 2011-2015","/c/Sprinter-II-2006-/1155":"Sprinter II 2006-","/c/Viano-W639-2003-2014/1156":"Viano W639 2003-2014","/c/Vito-II-W639-2003-2014/1157":"Vito II W639 2003-2014"},"mini":{"model":"Model","/c/R56-2006-2013/1159":"R56 2006-2013","/c/R50-R53-2001-2006/1332":"R50 R53 2001-2006"},"mitsubishi":{"model":"Model","/c/Colt-VII-2008-2012/1445":"Colt VII 2008-2012","/c/L200-IV-2006-2016/1446":"L200 IV 2006-2016","/c/ASX-GA-2010-/1161":"ASX GA 2010-","/c/L200-V-2015-/1162":"L200 V 2015-","/c/Lancer-VIII-CY-2007-/1163":"Lancer VIII CY 2007-","/c/Space-Star-II-2014-/1165":"Space Star II 2014-","/c/Outlander-II-2007-2013/1164":"Outlander II 2007-2013"},"nissan":{"model":"Model","/c/Note-II-E12-2012-/1449":"Note II E12 2012-","/c/Pathfinder-III-FL-FL-2010-2013/1450":"Pathfinder III FL FL 2010-2013","/c/X-Trail-II-T31-2007-2014/1368":"X-Trail II T31 2007-2014","/c/X-Trail-III-T32-2014-/1369":"X-Trail III T32 2014-","/c/Micra-IV-2010-2016/1447":"Micra IV 2010-2016","/c/Navara-III-D40-2005-2016/1448":"Navara III D40 2005-2016","/c/Juke-F15-2010-/1167":"Juke F15 2010-","/c/Micra-V-2016-/1168":"Micra V 2016-","/c/Note-I-E11-2006-2012/1169":"Note I E11 2006-2012","/c/Pathfinder-III-przedlift-2005-2010/1170":"Pathfinder III przedlift 2005-2010","/c/Qashqai-I-J10-JJ10-2006-2013/1171":"Qashqai I J10 JJ10 2006-2013","/c/Qashqai-I-2-2008-2013/1172":"Qashqai I +2 2008-2013","/c/Qashqai-II-2013-/1173":"Qashqai II 2013-","/c/Tiida-C11-2007-2012/1174":"Tiida C11 2007-2012"},"opel":{"model":"Model","/c/Agila-I-H00-2000-2007/1451":"Agila I H00 2000-2007","/c/Agila-II-H08-2008-2014/1452":"Agila II H08 2008-2014","/c/Corsa-C-2000-2006/1339":"Corsa C 2000-2006","/c/Antara-2006-2017/1371":"Antara 2006-2017","/c/Insignia-A-FL-2013-2017/1372":"Insignia A FL 2013-2017","/c/Vectra-C-KOMBI-2002-2008/1373":"Vectra C KOMBI 2002-2008","/c/Vivaro-II-2014-/1374":"Vivaro II 2014-","/c/Astra-II-G-1998-2009/1178":"Astra II G 1998-2009","/c/Astra-III-H-2004-2014/1179":"Astra III H 2004-2014","/c/Astra-IV-J-2009-/1180":"Astra IV J 2009-","/c/Astra-V-K-2015-/1181":"Astra V K 2015-","/c/Corsa-D-2006-2014/1183":"Corsa D 2006-2014","/c/Crossland-X-2017-/1184":"Crossland X 2017-","/c/Insignia-A-przedlift-2008-2013/1185":"Insignia A przedlift 2008-2013","/c/Insignia-B-2017-/1186":"Insignia B 2017-","/c/Meriva-A-2002-2010/1187":"Meriva A 2002-2010","/c/Meriva-B-2010-2017/1188":"Meriva B 2010-2017","/c/Mokka-2012-/1189":"Mokka 2012-","/c/Omega-B-1994-1999/1190":"Omega B 1994-1999","/c/Vectra-C-SEDAN-2002-2008/1191":"Vectra C SEDAN 2002-2008","/c/Vivaro-I-2001-2014/1192":"Vivaro I 2001-2014","/c/Zafira-A-7m-1999-2005/1193":"Zafira A 7m 1999-2005","/c/Zafira-B-5m-2005-2011/1194":"Zafira B 5m 2005-2011","/c/Zafira-B-7m-2005-2011/1195":"Zafira B 7m 2005-2011","/c/Zafira-C-7m-2012-/1196":"Zafira C 7m 2012-"},"peugeot":{"model":"Model","/c/208-2012-/1375":"208 2012-","/c/4008-2012-2017/1376":"4008 2012-2017","/c/2008-2013-/1453":"2008 2013-","/c/Bipper-2007-/1454":"Bipper 2007-","/c/106-1991-2003/1198":"106 1991-2003","/c/107-2005-2014/1199":"107 2005-2014","/c/108-2014-/1200":"108 2014-","/c/206-1998-2009/1201":"206 1998-2009","/c/206-2009-2012/1202":"206+ 2009-2012","/c/207-2006-2012/1203":"207 2006-2012","/c/307-2001-2009/1205":"307 2001-2009","/c/308-I-2007-2013/1206":"308 I 2007-2013","/c/308-II-HTB-2013-/1207":"308 II HTB 2013-","/c/308-II-SW-2013-/1208":"308 II SW 2013-","/c/407-2004-2011/1210":"407 2004-2011","/c/508-2010-/1212":"508 2010-","/c/3008-2009-/1204":"3008 2009-","/c/4007-2007-2012/1209":"4007 2007-2012","/c/5008-2009-/1211":"5008 2009-","/c/Boxer-II-2006-/1213":"Boxer II 2006-","/c/Expert-II-2006-2016/1214":"Expert II 2006-2016","/c/Expert-III-2016-/1215":"Expert III 2016-"},"porsche":{"model":"Model","/c/Cayenne-II-2010-/1377":"Cayenne II 2010-","/c/Cayenne-I-2002-2010/1333":"Cayenne I 2002-2010","/c/Macan-2014-/1217":"Macan 2014-"},"renault":{"model":"Model","/c/Fluence-2009-2016/1378":"Fluence 2009-2016","/c/Kadjar-2015-/1379":"Kadjar 2015-","/c/Trafic-III-2014-/1380":"Trafic III 2014-","/c/Master-III-2010-/1455":"Master III 2010-","/c/Thalia-I-2000-2010/1456":"Thalia I 2000-2010","/c/Clio-III-2005-2012/1220":"Clio III 2005-2012","/c/Clio-IV-2012-/1221":"Clio IV 2012-","/c/Captur-2013-/1219":"Captur 2013-","/c/Kangoo-I-1998-2008/1222":"Kangoo I 1998-2008","/c/Kangoo-II-2008-/1223":"Kangoo II 2008-","/c/Laguna-II-2001-2007/1224":"Laguna II 2001-2007","/c/Laguna-III-2007-2015/1225":"Laguna III 2007-2015","/c/Megane-II-2002-2009/1226":"Megane II 2002-2009","/c/Megane-III-2008-2015/1227":"Megane III 2008-2015","/c/Megane-IV-2016-/1228":"Megane IV 2016-","/c/Modus-2004-2012/1229":"Modus 2004-2012","/c/Talisman-2015-/1232":"Talisman 2015-","/c/Trafic-II-2001-2014/1233":"Trafic II 2001-2014","/c/Scenic-II-2003-2009/1230":"Scenic II 2003-2009","/c/Scenic-III-2009-/1231":"Scenic III 2009-"},"seat":{"model":"Model","/c/Altea-XL-2006-2015/1381":"Altea XL 2006-2015","/c/Ibiza-II-1993-2002/1457":"Ibiza II 1993-2002","/c/Toledo-II-1998-2004/1458":"Toledo II 1998-2004","/c/Alhambra-I-5m-1996-2010/1235":"Alhambra I 5m 1996-2010","/c/Alhambra-I-7m-1996-2010/1236":"Alhambra I 7m 1996-2010","/c/Alhambra-II-710-7m-2010-/1237":"Alhambra II 710 7m 2010-","/c/Altea-2004-2015/1334":"Altea 2004-2015","/c/Ateca-2016-/1238":"Ateca 2016-","/c/Ibiza-III-6L1-2002-2008/1240":"Ibiza III 6L1 2002-2008","/c/Ibiza-IV-6J-2008-/1241":"Ibiza IV 6J 2008-","/c/Exeo-2008-2013/1239":"Exeo 2008-2013","/c/Leon-I-1999-2005/1242":"Leon I 1999-2005","/c/Leon-II-2005-2012/1243":"Leon II 2005-2012","/c/Leon-III-2012-/1244":"Leon III 2012-","/c/Mii-KF-2011-/1245":"Mii KF 2011-","/c/Toledo-IV-2012-/1246":"Toledo IV 2012-"},"skoda":{"model":"Model","/c/Kodiaq-2016-/1459":"Kodiaq 2016-","/c/Citigo-2011-/1248":"Citigo 2011-","/c/Fabia-I-6Y2-1999-2007/1249":"Fabia I 6Y2 1999-2007","/c/Fabia-II-2006-2014/1250":"Fabia II 2006-2014","/c/Fabia-III-2014-/1251":"Fabia III 2014-","/c/Octavia-I-1996-2011/1252":"Octavia I 1996-2011","/c/Octavia-II-1Z-2004-2013/1253":"Octavia II 1Z 2004-2013","/c/Octavia-III-2012-/1254":"Octavia III 2012-","/c/Roomster-2006-2015/1256":"Roomster 2006-2015","/c/Rapid-2012-/1255":"Rapid 2012-","/c/Superb-I-2001-2008/1257":"Superb I 2001-2008","/c/Superb-II-2008-2015/1258":"Superb II 2008-2015","/c/Superb-III-2015-/1259":"Superb III 2015-","/c/Yeti-2009-/1260":"Yeti 2009-"},"smart":{"model":"Model","/c/Fortwo-2007-/1262":"Fortwo 2007-"},"subaru":{"model":"Model","/c/Impreza-III-GH-2008-2011/1266":"Impreza III GH 2008-2011","/c/Impreza-IV-WRX-STi-2014-2018/1267":"Impreza IV WRX STi 2014-2018","/c/Legacy-IV-2003-2008/1335":"Legacy IV 2003-2008","/c/Outback-III-2003-2008/1336":"Outback III 2003-2008","/c/Forester-IV-2013-/1382":"Forester IV 2013-","/c/Levorg-2015-/1383":"Levorg 2015-","/c/Outback-V-2014-/1384":"Outback V 2014-","/c/XV-2011-/1385":"XV 2011-","/c/Legacy-V-2009-2014/1460":"Legacy V 2009-2014","/c/Forester-III-2008-2013/1264":"Forester III 2008-2013","/c/Outback-IV-2009-2014/1461":"Outback IV 2009-2014","/c/Impreza-II-GD-2000-2007/1265":"Impreza II GD 2000-2007"},"suzuki":{"model":"Model","/c/Swift-III-2005-2010/1271":"Swift III 2005-2010","/c/SX4-GY-2006-2014/1272":"SX4 GY 2006-2014","/c/Vitara-II-2015-/1273":"Vitara II 2015-","/c/Grand-Vitara-II-2005-2014/1462":"Grand Vitara II 2005-2014","/c/Splash-2008-2014/1463":"Splash 2008-2014","/c/Alto-VII-2009-2015/1269":"Alto VII 2009-2015","/c/Celerio-2014-/1270":"Celerio 2014-"},"toyota":{"model":"Model","/c/Hilux-DoubleCab-VIII-2015-/1464":"Hilux DoubleCab VIII 2015-","/c/Auris-I-2007-2012/1275":"Auris I 2007-2012","/c/Auris-II-2012-/1276":"Auris II 2012-","/c/Avensis-II-T250-2003-2008/1277":"Avensis II T250 2003-2008","/c/Avensis-III-2008-/1278":"Avensis III 2008-","/c/Aygo-I-2005-2014/1279":"Aygo I 2005-2014","/c/Aygo-II-2014-/1280":"Aygo II 2014-","/c/Corolla-XI-2013-/1281":"Corolla XI 2013-","/c/Rav4-III-2006-2013/1282":"Rav4 III 2006-2013","/c/Rav4-IV-2013-/1283":"Rav4 IV 2013-","/c/Rav4-IV-Hybryda-2015-/1284":"Rav4 IV Hybryda 2015-","/c/Verso-przedlift-2009-2013/1285":"Verso przedlift 2009-2013","/c/Verso-FL-2013-/1286":"Verso FL 2013-","/c/Yaris-II-2005-2011/1287":"Yaris II 2005-2011","/c/Yaris-III-przedlift-2011-2014/1288":"Yaris III przedlift 2011-2014","/c/Yaris-III-FL-2014-/1289":"Yaris III FL 2014-","/c/Yaris-III-Hybryda-2012-/1290":"Yaris III Hybryda 2012-"},"volvo":{"model":"Model","/c/V70-II-2000-2007/1349":"V70 II 2000-2007","/c/XC-70-2007-2016/1465":"XC-70 2007-2016","/c/S80-I-1998-2006/1348":"S80 I 1998-2006","/c/C30-2006-2012/1292":"C30 2006-2012","/c/S40-II-2004-2012/1293":"S40 II 2004-2012","/c/S60-II-2010-/1294":"S60 II 2010-","/c/S80-II-2006-2016/1295":"S80 II 2006-2016","/c/V40-II-2012-/1296":"V40 II 2012-","/c/V50-I-2004-2012/1297":"V50 I 2004-2012","/c/V60-I-2011-/1298":"V60 I 2011-","/c/V70-III-2007-2016/1299":"V70 III 2007-2016","/c/XC-60-2008-/1300":"XC-60 2008-","/c/XC-90-I-2002-2014/1301":"XC-90 I 2002-2014","/c/XC-90-II-2015-/1302":"XC-90 II 2015-"},"vw":{"model":"Model","/c/Golf-VI-2008-2013/1350":"Golf VI 2008-2013","/c/Passat-B7-2010-2014/1351":"Passat B7 2010-2014","/c/Caddy-III-2003-/1466":"Caddy III 2003-","/c/Crafter-II-2016-/1467":"Crafter II 2016-","/c/New-Beetle-1997-2010/1468":"New Beetle 1997-2010","/c/Amarok-2011-/1304":"Amarok 2011-","/c/Crafter-I-2006-2016/1305":"Crafter I 2006-2016","/c/Golf-I-1974-1983/1306":"Golf I 1974-1983","/c/Golf-III-1991-1999/1307":"Golf III 1991-1999","/c/Golf-IV-1997-2003/1308":"Golf IV 1997-2003","/c/Golf-V-2003-2008/1309":"Golf V 2003-2008","/c/Golf-Plus-V-2005-2014/1337":"Golf Plus V 2005-2014","/c/Golf-VII-2012-/1310":"Golf VII 2012-","/c/Jetta-VI-2010-/1311":"Jetta VI 2010-","/c/Lupo-1998-2005/1312":"Lupo 1998-2005","/c/Passat-B5-3B-3BG-1996-2005/1313":"Passat B5 3B 3BG 1996-2005","/c/Passat-B6-2005-2010/1314":"Passat B6 2005-2010","/c/Passat-B8-2014-/1315":"Passat B8 2014-","/c/Polo-IV-9N-2001-2009/1316":"Polo IV 9N 2001-2009","/c/Polo-V-2009-/1317":"Polo V 2009-","/c/Sharan-I-5m-1995-2010/1318":"Sharan I 5m 1995-2010","/c/Sharan-I-7m-1995-2010/1319":"Sharan I 7m 1995-2010","/c/Sharan-II-7m-2010-/1320":"Sharan II 7m 2010-","/c/Tiguan-5N-2007-2015/1321":"Tiguan 5N 2007-2015","/c/Touareg-I-2002-2010/1322":"Touareg I 2002-2010","/c/Touareg-II-2010-2017/1323":"Touareg II 2010-2017","/c/Touran-I-2003-2010/1324":"Touran I 2003-2010","/c/Transporter-T4-Multivan-Caravelle-1990-2003/1325":"Transporter T4 Multivan Caravelle 1990-2003","/c/Transporter-T5-Multivan-Caravelle-2003-2015/1338":"Transporter T5 Multivan Caravelle 2003-2015","/c/UP-2011-/1326":"UP 2011-"}}

  if(y==null){
    var model = document.getElementsByClassName("field_model")[0].children[0];
    while (model.children[0]) {
      model.children[0].remove();
    }
    if(modele[x]==null){
      var li = document.createElement("li");
       li.innerText = "Brak";
       li.setAttribute('value',0);
       model.appendChild(li);
    }else {
      for(i in modele[x]){
       var li = document.createElement("li");
        li.innerText = modele[x][i];
        li.setAttribute('value',i);
        model.appendChild(li);
      }
    }
  }else{
    while(y[0])y.remove(0);
		for(i in modele[x])y[y.length]=new Option(modele[x][i],i);
  }

}

//modal pop-ups
$(document).ready(function() {
  $(".rdz-btn").on("click", function() {
    var modal = $(this).data("modal");
    $(modal).show();
  });

  $(".modal").on("click", function(e) {
    var className = e.target.className;
    if(className === "modal" || className === "close"){
      $(this).closest(".modal").hide();
    }
  });
});
