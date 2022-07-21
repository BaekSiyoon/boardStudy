package com.example.board.board.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.board.board.service.boardService;
import com.example.board.board.vo.boardVo;

@RestController
@CrossOrigin(origins = { "http://localhost:3000" })
@RequestMapping("/board")
public class boardController {

    @Autowired
    private boardService boardService;

    // 게시글 조회
    @GetMapping("/list")
    public List<boardVo> list() {
        System.out.println("컨트롤러 list");
        return boardService.list();
    }

    // 게시글 작성
    @PostMapping("/insertList")
    public void insertList(@RequestBody Map<String, Object> req) {
        // url 파라미터 가져오기
        Map<String, Object> insertParam = new HashMap<>();
        System.out.println("컨트롤러 insertList");
        insertParam.put("title", req.get("title"));
        insertParam.put("regId", req.get("id"));
        insertParam.put("password", req.get("password"));
        insertParam.put("content", req.get("content"));
        System.out.println(req);
        System.out.println(req.get("id"));
    }

    // 상세 게시글 조회
    @GetMapping("/detailList/{seq}")
    public List<boardVo> detailList(@RequestParam String seq) {
        // System.out.println("컨트롤러 detailList");
        System.out.println("컨트롤러 detailList" + seq);
        return boardService.detailList(seq);
    }

    // 게시글 수정
    @GetMapping("/updateList")
    public void updateList() {
        HashMap<String, Object> updateParam = new HashMap<>();
        System.out.println("컨트롤러 updateList");
        updateParam.put("seq", 6);
        System.out.println(updateParam.get("seq"));
        updateParam.put("title", "제목 수정");
        updateParam.put("content", "내용 수정");
        updateParam.put("modId", "아이디 수정");
        boardService.updateList(updateParam);
    }
}