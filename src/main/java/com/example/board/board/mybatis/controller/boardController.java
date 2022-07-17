package com.example.board.board.mybatis.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.board.board.mybatis.service.boardService;

@CrossOrigin(origins = { "http://localhost:8088" })
@RestController
@RequestMapping("/boardDetail")
public class boardController {
    @Autowired
    private boardService boardService;

    @GetMapping("/list")
    public ResponseEntity<?> list(@RequestParam String title, @RequestParam String id, @RequestParam String content) {
        System.out.println("컨트롤러 list ");
        System.out.println(title);
        System.out.println(id);
        System.out.println(content);
        return ResponseEntity.ok().body(boardService.list());
    }

    @GetMapping("/test")
    public String test() {
        System.out.println("컨트롤러 test ");
        return "test";
    }
}