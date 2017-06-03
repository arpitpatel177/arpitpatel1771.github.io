$(document).ready(function(){
	var height = $(window).height()-40;
	$('#side').height(height);
	$(window).resize(function(){
		var height = $(window).height()-40;
		$('#side').height(height);
	});
	$('#alltopics').click(function(){
		window.location.href="home.html";
	});
	$('.rplyarea').hide(1);
	$('#clsrply').click(function(){
		$('.rplyarea').hide(200);
		$('.rply2').delay(50).show(200);
	});
	$('.rply2').click(function(){
		$('.rply2').hide(200);
		$('.rplyarea').delay(50).show(200);
	});
	$('.rply').click(function(){
		$('.discs').append('<div class="discus" id="discus"><table><tr><td class="profpic" rowspan="2"><img src="profpic.jpg" class="ppic" /></td><td class="usrnm">Me</td></tr><tr><td class="crap" >'+ $('.reply').val() +'</td></tr></table></div>');
		$('.reply').val('');
	});
	$('#bold').click(function(){
		var u = $('.reply').val();
		var s = $('.reply').get(0).selectionStart;
		var e   = $('.reply').get(0).selectionEnd;
		$('.reply').val(u.substring(0,s) + '<strong>' + u.substring(s,e) + '</strong>' + u.substring(e));
	});
	$('#italic').click(function(){
		var u = $('.reply').val();
		var s = $('.reply').get(0).selectionStart;
		var e   = $('.reply').get(0).selectionEnd;
		$('.reply').val(u.substring(0,s) + '<em>' + u.substring(s,e) + '</em>' + u.substring(e));
	});
	$('#underline').click(function(){
		var u = $('.reply').val();
		var s = $('.reply').get(0).selectionStart;
		var e   = $('.reply').get(0).selectionEnd;
		$('.reply').val(u.substring(0,s) + '<div class="und">' + u.substring(s,e) + '</div>' + u.substring(e));
	});
	$('.rply').css('margin-left',-($('.rply').width()/2));
	$('#logout').click(function(){
		window.location.href = 'index.html';
	});
	$('.rslttbl').click(function(){
		window.location.href = 'discussions.html';
	});
	$('#home').click(function(){
		window.location.href = 'home.html';
	});
	$('.undercns').click(function(){
		alert("The link is under construction, Sorry for the inconvenience! ");
	});
	$('.topic').on('click',function(){
		window.location.href = 'discussions.html';
	});
	$('.result').height('330');
	$('#srch').keyup(function(){
		if($('#srch').val().trim().length!=0){$('#rslt').show(100);}
		if($('#srch').val().trim().length==0){$('#rslt').hide(100);}
		$('#results').html('');
		var text = ($.trim($('#srch').val())).toLowerCase();
		$('.topic').each(function(){
			$('#results').append('<div class="srchrslt"><table class="rslttbl"><tr><td class="srchhead">' + $(this).find('.thead').text() +'</td></tr><tr><td class="srchbody">' + $(this).find('.tbody').text() + '</td></tr><tr><td class="srchpst">' + $(this).find('.tpst').text() + '</td></tr></table></div');
		});
		var x = 0;
		$('.srchrslt').each(function(){
			if((($.trim($(this).find('.srchhead').text())).toLowerCase().search(text)!==-1)){
				$(this).show(1); x =1;
			}else{
				$(this).hide(1);
			}
		});
		if((($.trim($(this).find('.srchhead').text())).toLowerCase().search(text)===-1)){
			if( x == 0 ){
				$('#results').append('<div style="width:500px;height:100%;margin-left:auto;margin-right:auto;font-size:24px;font-weight:bold;color:#b5b5b5;text-align:center;padding:25px;word-wrap:break-word;">No Topic with name <em>"'+ $('#srch').val() +'"</em> found!</div>');
			}
		}
	});
	$('#sbmttpc').click(function(){
		$('#cont').prepend('<div class="topic"><table style="width : 100%;"><tr><td class="thead">'+ $.trim($("#thead1").val()) +'</td></tr><tr><td class="tbody">'+ $.trim($("#tbody1").val()) +'</td></tr><tr><td class="tpst">'+ $.trim($("#tpst1").val()) +'</td></tr></div>');
		$("#thead1").val('');$("#tbody1").val('');$("#tpst1").val('');
	});
	$('#srch').blur(function(){
		$('#rslt').hide(100);
	});
	var width = $(window).width()-210;
	var width_2 = $(window).width()-320;$('.usrnm').width(width_2);
	$('#cont').width(width);$('.replyy').width(width);
	$(window).resize(function(){
		var width = $(window).width()-210;
		$('#cont').width(width);$('#disc').width(width);
		$('.usrnm').width(width_2);
		$('#side').width(width);$('.replyy').width(width);
	});
	$('#rcntvisul').hide().attr('status','hidden');
	$('#rcntvis').click(function(){
		if(($('#rcntvisul').attr('status'))=='hidden'){$('#rcntvisul').attr('status','shown').show(100); $('#rcntvisa').removeClass('glyphicon-triangle-right').addClass('glyphicon-triangle-bottom');}
		else{$('#rcntvisul').attr('status','hidden').hide(100);$('#rcntvisa').removeClass('glyphicon-triangle-bottom').addClass('glyphicon-triangle-right');}
	});
	$('#rcntpstul').hide().attr('status','hidden');
	$('#rcntpst').click(function(){
		if(($('#rcntpstul').attr('status'))=='hidden'){$('#rcntpstul').attr('status','shown').show(100); $('#rcntpsta').removeClass('glyphicon-triangle-right').addClass('glyphicon-triangle-bottom');}
		else{$('#rcntpstul').attr('status','hidden').hide(100);$('#rcntpsta').removeClass('glyphicon-triangle-bottom').addClass('glyphicon-triangle-right');}
	});
	$('#rcntsrchul').hide().attr('status','hidden');
	$('#rcntsrch').click(function(){
		if(($('#rcntsrchul').attr('status'))=='hidden'){$('#rcntsrchul').attr('status','shown').show(100); $('#rcntsrcha').removeClass('glyphicon-triangle-right').addClass('glyphicon-triangle-bottom');}
		else{$('#rcntsrchul').attr('status','hidden').hide(100);$('#rcntsrcha').removeClass('glyphicon-triangle-bottom').addClass('glyphicon-triangle-right');}
	});
	$('.sidetable').hover(function(){
		$(this).css('backgroundColor','#55b526');
	},function(){
		$(this).css('backgroundColor','#375737');
	});
	$('.sidetable').mousedown(function(){
		$(this).css('backgroundColor','#3e8d16');
	}).mouseup(function(){
		$(this).css('backgroundColor','#55b526');
	});
	
});
