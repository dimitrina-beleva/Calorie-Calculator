openTab('bmiCalculator', document.getElementById("bmiCalculator-button"), 'rgb(194, 240, 248)');

$(function(){
	$('.calc-frame .row input').keyup(function(e){
		if (e.keyCode == 13) {
			$(this).closest('.text-box').find('.btn-next').trigger("click");
		}
	});
	
	$('.calc-frame .row input').bind("change keyup input click", function(){
		if (this.value.match(/[^\d\.]/g)) {
			this.value = this.value.replace(/[^\d\.]/g, '');
		}
	});
	
	$('.btn-next').click(function () {
		if ($(this).hasClass('back')) {
			$(this).closest('.box').hide();
			$('.calc-frame .row input').val('');
			$('#box01').fadeIn(350);
		}
		else if ($(this).hasClass('calculate')) {
			var height_ = $(this).closest('.calc-frame').find('.row input').val();
			var filter = /[^\d\.]/g;
			
			if (height_ == '' || height_ == 0) {
				$(this).closest('.calc-frame').find('.error-txt').animate({
					opacity: 1},300);
			}
			else {
				$(this).closest('.calc-frame').find('.error-txt').css('opacity', '0');
				$(this).closest('.box').hide();
				$(this).closest('.box').next().fadeIn(350);
				var weight_ = $('#box01 .row input').val();
				var bmi_ = (weight_/((height_/100)*(height_/100))).toFixed(1);
				
				if (bmi_ < 18.5) {
					$('.result-area-holder #result01').show();
					$('.result-area-holder #result01').siblings().hide();
					$('.result-area-holder #result01 .top-lst-calc .final-bmi').html(bmi_);
				}
				else if (bmi_ >= 18.5 && bmi_ <= 23) {
					$('.result-area-holder #result02').show();
					$('.result-area-holder #result02').siblings().hide();
					$('.result-area-holder #result02 .top-lst-calc .final-bmi').html(bmi_);
				}
				else if (bmi_ >= 23 && bmi_ <= 27.5) {
					$('.result-area-holder #result03').show();
					$('.result-area-holder #result03').siblings().hide();
					$('.result-area-holder #result03 .top-lst-calc .final-bmi').html(bmi_);
				}
				else if (bmi_ >= 27.5) {
					$('.result-area-holder #result04').show();
					$('.result-area-holder #result04').siblings().hide();
					$('.result-area-holder #result04 .top-lst-calc .final-bmi').html(bmi_);
				}
			}
		}
		else {
			var val_ = $(this).closest('.calc-frame').find('.row input').val();
			if (val_ == '' || val_ == 0) {
				$(this).closest('.calc-frame').find('.error-txt').animate({
					opacity: 1},300);
			}
			else {
				$(this).closest('.calc-frame').find('.error-txt').css('opacity', '0')
				$(this).closest('.box').hide();
				$(this).closest('.box').next().fadeIn(350);
			}
		}
        return false;
	});
});