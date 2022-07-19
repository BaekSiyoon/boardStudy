package com.example.board.board.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.board.board.service.boardService;
import com.example.board.board.vo.boardVo;

@RestController
@CrossOrigin(origins = { "http://localhost:8088" })
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
    @GetMapping("/insertList")
    public void insertList() {
        System.out.println("컨트롤러 insertList");
        Map<String, Object> insertParam = new HashMap<>(); 
        insertParam.put("title", "제목 test1"); 
        insertParam.put("regId", "아이디 test1");
        insertParam.put("password", "비번 test1");
        insertParam.put("content", "내용 test1");
    }

    // 상세 게시글 조회
    @GetMapping("/detailList")
    public List<boardVo> detailList() {
        System.out.println("컨트롤러 detailList");
        int seq = 11;
        return boardService.detailList(seq);
    }

    // 게시글 수정
    @GetMapping("/updateList")
    public void updateList() {
        System.out.println("컨트롤러 updateList");
        Map<String, Object> updateParam = new HashMap<>(); 
        updateParam.put("seq", 11);
        updateParam.put("title", "제목 수정"); 
        updateParam.put("content", "내용 수정");
        updateParam.put("modId", "아이디 수정");
    }
}