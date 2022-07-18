package com.example.board.board.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.board.board.mapper.boardMapper;
import com.example.board.board.vo.boardVo;

@Service
public class boardService {

    // @Autowired
    // private boardMapper boardMapper;

    public List<boardVo> list() {
        // System.out.println("service");
        // return boardMapper.list();
        return null;
    }

}
