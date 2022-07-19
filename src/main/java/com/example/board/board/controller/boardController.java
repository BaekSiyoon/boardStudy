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
    @GetMapping("/insert")
    public void insert() {
        System.out.println("컨트롤러 insert");
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
        int seq = 10;
        return boardService.detailList(seq);
    }

}