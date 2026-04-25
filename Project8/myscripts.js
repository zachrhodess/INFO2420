PrintButton1 = new Image
	PrintButton2 = new Image
	logo1 = new Image
	logo2 = new Image
if (document.images) {
	PrintButton1.src = "/images/print.jpeg"
	PrintButton2.src = "/images/print2.jpeg"
	logo1.src = "/images/logo.jpeg"
	logo2.src = "/images/logo2.jpg"
}


		var imgArray = new Array(
			'images/logo.jpeg',
			'Image2Lg.jpg',
			'Image3Lg.jpg',
			'Image4Lg.jpg'
			

		);


		var titleArray = new Array(
			'Motorcylce',
			'Hikers',
			'Scuba Couple',
			'SKiing Couple'
			
		);
			
		var imgPath = "Images/Fullsize/";
		
		function swapImage(imgID) {

			var theImage = document.getElementById('theImage');
			var textDiv = document.getElementById('bottomText');

			var newImg;
			var textTitle;

			newImg = imgArray[imgID];
			theImage.src = imgPath + newImg;

			textTitle=titleArray[imgID];

      			textDiv.innerHTML = textTitle;
		}
			
		function preloadImages() {		
			for(var i = 0; i < imgArray.length; i++) {
				var tmpImg = new Image;
				tmpImg.src = imgPath + imgArray[i];
			}
            
		}