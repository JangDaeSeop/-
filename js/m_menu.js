  $(function(){
       //모바일메뉴보이기
        $('.m_btn').click(function(){<!-- 버튼누르면 -->
           $('.m_menu').slideToggle();<!-- 메인메뉴나오게 설정 --> 
        });
	   //모바일메뉴 스크립트
    	$(".main").click(function(){
		  $(this).find('.sub').slideToggle();<!-- 누르면 열리게 설정 -->
		  $(this).siblings().children('.sub').slideUp();<!-- 다른거누르면 (열려있는것)올라가게 설정 -->
		  return false;
	});
});