package com.example.board.board.service;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.board.board.mapper.boardMapper;
import com.example.board.board.vo.boardVo;

@Service
public class boardService {
    @Autowired
    public boardMapper boardMapper;

    // 게시글 조회
    public List<boardVo> list() {
        System.out.println("service list");
        return boardMapper.list();
    }

    // 게시글 작성
    public void insertList(Map<String, Object> insertParam) {
        System.out.println("insertList service");
        boardMapper.insertList(insertParam);
    }

    // 상세 게시글 조회
    public List<boardVo> detailList(String seq) {
        System.out.println("detailList service");
        return boardMapper.detailList(seq);
    }

    // 게시글 수정
    public void updateList(Map<String, Object> updateParam) {
        System.out.println("updateList service");
        System.out.println("updateParam" + updateParam.get("title"));
        boardMapper.updateList(updateParam);
    }

    // 게시글 삭제
    public void deleteList(String seq) {
        System.out.println("deleteList service");
        boardMapper.deleteList(seq);
    }

    // 제목 으로 게시글 조회
    public List<boardVo> titleSearchList(String title) {
        System.out.println("titleSearchList service");
        return boardMapper.titleSearchList(title);
    }

    // // 게시글 수정 전 상세 내용
    // public List<boardVo> beforeList(String seq) {
    // System.out.println("beforeList service");
    // return boardMapper.beforeList(seq);
    // }
}