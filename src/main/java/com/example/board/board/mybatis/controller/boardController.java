package com.example.board.board.mybatis.controller;

import com.example.board.board.mybatis.service.boardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class boardController {
    @Autowired
    private boardService boardService;

    /**
     * 주석 == 편지
     */
    @RequestMapping(value = "/list", method = RequestMethod.POST)
    public ResponseEntity<?> list() {
        System.out.println(boardService.list());
        System.out.println("컨트롤러");
        return ResponseEntity.ok().body(boardService.list());
    }

    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public String test() {
        return "test";
    }
}