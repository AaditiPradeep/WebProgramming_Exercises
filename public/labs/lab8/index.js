function total() {
    let c1 = (document.getElementsByName("adult")[0].value)*10 ;
    let c2 = (document.getElementsByName("child")[0].value)*5;

    let total = c1+c2
   // alert(total)
    document.getElementsByName("totalAmount")[0].value = total;
}
