const express = require('express');
const router = express.Router();
const db = require('../config/db.js');
const sanitizeHtml = require('sanitize-html');

// prefix: /comment

router.get('/', function(req, res) {
	const query = req.query;
	db.query(`SELECT * FROM comment WHERE postId=?`, [query.postId],
	function(err, result) {
		if (err) throw err
		res.status(200).json(result);
	})
});

// 댓글 추가
// { postId: , comment: }
router.post('/', function(req, res) {
	const body = req.body;
	console.log(req.body);
	if (!req.isAuthenticated()) {
		res.status(401).send({error: '로그인이 필요한 서비스입니다.'});
	} else if (sanitizeHtml(body.content).length === 0) {
		res.status(4001).statusMessage('스크립트를 제외한 길이가 0이므로 요청을 처리할 수 없습니다.');
	} else {
		db.query(`INSERT INTO comment(id, userId, postId, content, createdate) VALUES(?, ?, ?, ?, now())`,
			[null, req.user.id, parseInt(body.postId), sanitizeHtml(body.content)],
		function(err, result) {
			if (err)
				throw err
			console.log(result);
			res.status(201).json({message: '댓글 추가 성공'});
		})
	}
});

// 댓글 삭제
// {userId: , postId: , commentId: }
router.post('/del', async function(req, res) {
	const body = req.body;

	if (!req.isAuthenticated()) {
		res.status(401).send({error: '로그인이 필요한 서비스입니다.'});
	} else if (parseInt(body.userId) !== req.user.id) {
		res.status(403).send({error: "자신이 작성한 댓글만 삭제할 수 있습니다."});
	}

	let promise = new Promise((resolve, reject) => {
		db.query("SELECT * FROM comment WHERE id = ?", [parseInt(body.commentId)],
		function(err, result) {
			if (err)
				throw err
			if (result[0].userId == body.userId &&
				result[0].postId == body.postId)
				resolve(result[0].id)
			else
				resolve(0)
		})
	});
	let commentId = await promise;

	if (commentId === 0)
		res.status(403).json('잘못된 호출입니다.');
	else {
		db.query("DELETE FROM comment WHERE id=?", [parseInt(body.commentId)],
		function(err, result) {
			console.log(result);
			res.status(200).send({message: '댓글 삭제 성공'});
		})
	}
});

module.exports = router;