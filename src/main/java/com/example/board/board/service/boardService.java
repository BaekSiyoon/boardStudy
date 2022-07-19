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
        return boardMapper.list();
    }
    
    // 게시글 작성
    public void insertList(Map<String, Object> insertParam) {
    }

    // 상세 게시글 조회
    public List<boardVo> detailList(int seq) {
        return boardMapper.detailList(seq);
    }

    // 게시글 수정
    public void updateList(Map<String, Object> updateParam) {
    }
}