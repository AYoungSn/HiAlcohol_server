module.exports = {
	HTML: function(body) {
		const head = this.HEAD();
		const tail = this.TAIL();
		return `
		${head}
		${body}
		${tail}
		`
	},
	HOME: function() {
		return `
		<div class="header">
	<!-- hamburger menu -->
	<div class="menu_btn">
		<a href="#">
		<div class="container">
			<div class="bar1"></div>
			<div class="bar2"></div>
			<div class="bar3"></div>
			<!-- <img src="public/img/menuIcon.png" width="40px" /> -->
		</div>
		</a>
	</div>
	<div class="login_btn">
		<a href="#">
		<div class="container">
			<p class="login">로그인하기</p>
			<img src="public/img/loginIcon.png" width="25px" />
		</div>
		</a>
	</div>
	</div>

	<div class="menu_bg"></div>
	<div class="sidebar_menu">
		<div class="close_btn">
			<a href="#">
				<div class="container">
					<img src="public/img/back.png" height="18px" style="text-align: right; display: flexbox;"/>
				</div>
			</a>
		</div>
		<div class="menu_wrap">
			<div><a href="#">꿀조합 게시판</a></div>
			<div><a href="#">우리동네 주류매장</a></div>
			<div><a href="#">내가 쓴 꿀조합</a></div>
			<div><a href="#">좋아요 리스트</a></div>
			<div><a href="#">로그아웃</a></div>
		</div>
	</div>
	<nav class="homebar">
	<header>
		<a
		href="index.html"
		style="font-family: 'Pattaya', sans-serif; color: #0bf3bc"
		>Hi Alcohol
		</a>
		<span style="color: #0bf3bc">
		<i class="fas fa-glass-martini-alt" style="font-size: 30px"></i>
		</span>
	</header>
	<div class="homebar__search">
		<input type="text" placeholder="예시 : 보드카" />
		<button type="submit" onclick=" location.href='search.html'">
		<i class="fas fa-search" style="font-size: 20px"></i>
		</button>
	</div>
	<div class="homebar__recommend">
		<p style="color: white">이달의 술 추천</p>
		<p style="color: white">소다주</p>
		<br />
		<img src="public/img/cocktail.png" alt="cocktailImg" width="100" height="100" />
	</div>
	</nav>
	`
	},
	HEAD: function() {
		return `
		<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link
	rel="stylesheet"
	href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
	crossorigin="anonymous"
	/>
	<!-- css, js 경로 수정-->
	<link rel="stylesheet" href="public/css/home.css" />
	<link rel="stylesheet" href="public/css/menu.css" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
	<script src="public/js/menu.js" type="text/javascript"></script>
	<title>Hi Alcohol</title>
	<style>
	@import url("https://fonts.googleapis.com/css2?family=Pattaya&display=swap");
	p {
		font-family: "Pattaya", sans-serif;
		color: white;
	}
	@font-face {
		font-family: "GmarketSansMedium";
		src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
		format("woff");
		font-weight: normal;
		font-style: normal;
	}
	*:not(i) {
		font-family: GmarketSansMedium;
	}
	</style>

    <script
      src="https://kit.fontawesome.com/1f362cab2c.js"
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
		`;
	},
	TAIL: function() {
		return `
		</body>
</html>
		`
	}
};