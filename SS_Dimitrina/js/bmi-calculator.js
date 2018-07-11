openTab('bmiCalculator', document.getElementById("bmiCalculator-button"), 'rgb(194, 240, 248)');

//Clicks using Enter key instead of using the mouse
$(function(){
	$('.calc-frame .row input').keyup(function(e){
		if (e.keyCode == 13) {
			$(this).closest('.text-box').find('.btn-next').trigger("click");
		}
	});
	
//Makes regExp validation of input
$('.calc-frame .row input').bind("change keyup input click", function(){
		if (this.value.match(/[^\d\.]/g)) {
			this.value = this.value.replace(/[^\d\.]/g, '');
		}
	});
	
//Calculates BMI - the multiplication of input values according to a formula
$('.btn-next').click(function () {
	if ($(this).hasClass('back')) {
	$(this).closest('.box').hide();
	$('.calc-frame .row input').val('');
	$('#box01').fadeIn(350);
	}
	else {
	var weight_ = $('#weight-bmi').val();
	if ((weight_== '' || weight_== 0) || weight_> 0 && (height_=='' || height_==0)) {
		$(this).closest('.calc-frame').find('.error-txt').animate({
			opacity: 1},300);
	}
	else {
	var height_ = $('#height-bmi').val();
	var bmi_ = (weight_/((height_/100)*(height_/100))).toFixed(1);
	$(this).closest('.box').hide();
	$(this).closest('.box').next().fadeIn(350);

    }
	if (bmi_ < 18.5) {
			$('.result-area-holder #result01').show();
			$('.result-area-holder #result01').siblings().hide();
			$('span.final-bmi').text(bmi_);
		}
	else if (bmi_ >= 18.5 && bmi_ <= 23) {
			$('.result-area-holder #result02').show();
			$('.result-area-holder #result02').siblings().hide();
			$('span.final-bmi').text(bmi_);
		}
	else if (bmi_ >= 23 && bmi_ <= 27.5) {
			$('.result-area-holder #result03').show();
			$('.result-area-holder #result03').siblings().hide();
			$('span.final-bmi').text(bmi_);
		}
	else if (bmi_ >= 27.5) {
			$('.result-area-holder #result04').show();
			$('.result-area-holder #result04').siblings().hide();
			$('span.final-bmi').text(bmi_);
		}
	}
	});
});
