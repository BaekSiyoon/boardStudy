package com.example.board.board.mybatis.controller;

import com.example.board.board.mybatis.service.boardService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class boardController {
    @Autowired
    private boardService boardService;

    /**
     * 주석 == 편지
     */
    @GetMapping(value = "/list")
    public ResponseEntity<?> list() {
        System.out.println(boardService.list());
        System.out.println("컨트롤러");
        return ResponseEntity.ok().body(boardService.list());
    }
}
