
let net;


//https://i.imgur.com/NQM56gB.jpg
//https://i.imgur.com/skPFFDY.jpg



$("#submitButtonId").click(async function() {

	console.log('starting');

	 var url = $('#former').serializeArray()[0]['value'];
	$('#img').attr('src',url)
	 net = await mobilenet.load();
  console.log('Sucessfully loaded model');

	

	
	const imgEl = document.getElementById('img');
  const result = await net.classify(imgEl);
  console.log(result);
  label = result[0]['className'].split(',')
  $('#result').text(label[0])
});


