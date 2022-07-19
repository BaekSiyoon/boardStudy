package com.example.board.board.controller;

import java.util.List;

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

    @GetMapping("/list")
    public List<boardVo> list() {
        System.out.println("컨트롤러 list");
     //  System.out.println(values.get("title"));
        return boardService.list();
    }

    @GetMapping("/test")
    public String test() {
        System.out.println("컨트롤러 test");
        return "test";
    }
}