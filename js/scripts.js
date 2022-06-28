$(document).ready(function(){
  function numberWithCommas(x){
    //var a = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // change 1000 to 1,000
    return x.toString().replace(/,/g,""); //change 1,000 to 1000;
  }

  $.fn.tipCalculator = function() { 
    var bill = document.getElementById("billamount").value;
    var tip = Number(document.getElementById("tip").value);
    var between = Number(document.getElementById("between").value);

    bill = Number(numberWithCommas(bill));
    tip = Number(numberWithCommas(tip));

    if (isNaN(bill) || bill == ""){
      alert("Please input a number");
      $("#billamount").focus();
      document.getElementById("billamount").value = "";
      return false;
    }

    if (isNaN(tip) || tip == ""){
      alert("Please input a number");
      $("#tip").focus();
      document.getElementById("tip").value = "";
      return false;
    }

    var tipamt10 = bill*0.1;
    tipamt10 = tipamt10.toFixed(2);
    var tipamt15 = bill*0.15;
    tipamt15 = tipamt15.toFixed(2);
    var tipamt18 = bill*0.18;
    tipamt18 = tipamt18.toFixed(2);
    var tipamt20 = bill*0.2;
    tipamt20 = tipamt20.toFixed(2);

    var totalamt10 = bill + Number(tipamt10);
    totalamt10 = totalamt10.toFixed(2);
    var totalamt15 = bill + Number(tipamt15);
    totalamt15 = totalamt15.toFixed(2);
    var totalamt18 = bill + Number(tipamt18);
    totalamt18 = totalamt18.toFixed(2);
    var totalamt20 = bill + Number(tipamt20);
    totalamt20 = totalamt20.toFixed(2);

    var tipamount = bill*tip/100;
    var totalprice = bill+tipamount;
    tipamount = tipamount.toFixed(2);
    totalprice = totalprice.toFixed(2);

    var pbill = bill/between;
    var ptipamount = pbill*tip/100;
    var ptotalprice = pbill+ptipamount;

    pbill = pbill.toFixed(2);
    ptipamount = ptipamount.toFixed(2);
    ptotalprice = ptotalprice.toFixed(2);

    document.getElementById("tipamt10").innerHTML = "$ " + tipamt10;
    document.getElementById("tipamt15").innerHTML = "$ " + tipamt15;
    document.getElementById("tipamt18").innerHTML = "$ " + tipamt18;
    document.getElementById("tipamt20").innerHTML = "$ " + tipamt20;

    document.getElementById("totalamt10").innerHTML = "$ " + totalamt10;
    document.getElementById("totalamt15").innerHTML = "$ " + totalamt15;
    document.getElementById("totalamt18").innerHTML = "$ " + totalamt18;
    document.getElementById("totalamt20").innerHTML = "$ " + totalamt20;

    document.getElementById("tipamount").innerHTML = "$ " + tipamount;
    document.getElementById("totalprice").innerHTML = "$ " + totalprice;

    document.getElementById("pbill").innerHTML = "$ " + pbill;
    document.getElementById("ptipamount").innerHTML = "$ " + ptipamount;
    document.getElementById("ptotalprice").innerHTML = "$ " + ptotalprice;
    //return this;
  }

  $("#splitbill").click(function(){
    $(".betw").toggle(this.checked);
  });
  
  $("button").click(function(){
    $.fn.tipCalculator();

   if ($("#splitbill").is(":checked")){
      $(".panel-footer").show();
      $("#total").show();
      $("#person").show();
      return false; 
    }else{
      $(".panel-footer").show();
      $("#total").show();
      $("#person").hide();
      return false; //*** don't follow the link (optional, seen as the link is just an anchor), very important

    }
        
    });
  });
