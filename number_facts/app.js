$res = $('#res');
$res1 = $('#res1');
$res2 = $('#res2');

$form1 = $('#form1');
let num = 0;

$res.append('<h3>Get cool facts about your favorite numbers !!</h3>');

$form1.submit(function(e) {
    e.preventDefault();
    $res1.empty();
    num = $('#number').val();
    console.log(num);
    let url = `http://numbersapi.com/${num}?json`
    console.log(url);
    axios
    .get(url)
    .then(res => {
        $res1.append(`<h3 style="color:blue;">${res.data.text}</h3>`);
    })
    .catch(err => {
        $res1.append(`<p style="color:red;"><b>${err}</b></p>`);
    }); 
});
