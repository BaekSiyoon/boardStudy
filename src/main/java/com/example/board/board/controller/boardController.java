package com.example.board.board.controller;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
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
        insertParam.put("regId", req.get("regId"));
        insertParam.put("password", req.get("password"));
        insertParam.put("content", req.get("content"));
        System.out.println(req);
        System.out.println(req.get("regId"));
        boardService.insertList(insertParam);
    }

    // 상세 게시글 조회 & 수정 클릭 했을때 input에 보여지는 조회
    @PostMapping("/detailList/{seq}")
    public List<boardVo> detailList(@RequestBody String seq) {
        System.out.println("컨트롤러 detailList = " + seq);
        return boardService.detailList(seq);
    }

    // 게시글 수정
    @PostMapping("/updateList")
    public void updateList(@RequestBody Map<String, Object> req) {
        Map<String, Object> updateParam = new HashMap<>();
        System.out.println("컨트롤러 updateList");
        updateParam.put("seq", req.get("seq"));
        updateParam.put("title", req.get("title"));
        updateParam.put("regId", req.get("regId"));
        updateParam.put("password", req.get("password"));
        updateParam.put("content", req.get("content"));
        System.out.println(req.get("regId"));
        boardService.updateList(updateParam);
    }

    // 게시글 삭제
    @PostMapping("/deleteList")
    public void deleteList(@RequestBody String seq) {
        System.out.println("컨트롤러 deleteList = " + seq);
        boardService.deleteList(seq);
    }

    // 제목 으로 게시글 조회
    @PostMapping("/titleSearchList")
    public List<boardVo> titleSearchList(@RequestBody String titleinput) {
        String title = titleinput.replaceAll("\"", "");
        System.out.println("컨트롤러 titleSearchList = " + title);
        return boardService.titleSearchList(title);
    }

}