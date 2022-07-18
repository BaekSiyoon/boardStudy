package com.example.board.board.mybatis.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.board.board.mybatis.service.boardService;


@CrossOrigin(origins = { "http://localhost:8088" })
@RestController
@RequestMapping("/boardDetail")
public class boardController {
    @Autowired
    private boardService boardService;

    @PostMapping("/list")
    public ResponseEntity<?> list(@RequestBody Map<String,Object> values){
        System.out.println("컨트롤러 list ");
        System.out.println(values.get("title"));
        return ResponseEntity.ok().body(boardService.list());
    }

    @GetMapping("/test")
    public String test() {
        System.out.println("컨트롤러 test ");
        return "test";
    }
}