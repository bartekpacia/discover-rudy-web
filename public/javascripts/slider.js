var slideIndex = 0;
//console.log("slideIndex at beggining:" + slideIndex);
showSlide(slideIndex);

function changeSlide(number) 
{
	//console.log('changeSlide(' + number + ')');
	showSlide(slideIndex = slideIndex + number);
	//console.log('slideIndex at the end of changeSlide(' + number + ")" + slideIndex);
}

function showSlide(slideToShow) 
{
	var slides = document.getElementsByClassName("slides");
	//console.log(slides);
	//console.log("slides.length at beggining on showSlide: " + slides.length);

	if(slideToShow < 0)
	{
		slideIndex = slides.length - 1;
		//console.log("slideToShow is smaller than 1; setting slideToShow to " + slides.length);

	} 

	if(slideToShow > slides.length - 1)
	{
		slideIndex = 0;
		//console.log("slideToShow is bigger than slides.length; setting slideToShow to 0!");
	}

	for(var i = 0; i < slides.length; i++)
	{
		slides[i].style.display = "none";
	}

	slides[slideIndex].style.display = "block";

	//console.log("END SlideToShow = " + slideToShow);
	//console.log("END SlideIndex = " + slideIndex);
	//console.log("END slides.length = " + slides.length);
}