package com.example.board.board.mybatis.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.board.board.mybatis.mapper.boardMapper;
import com.example.board.board.mybatis.vo.boardVo;

@Service
public class boardService {

    @Autowired
    private boardMapper boardMapper;

    public List<boardVo> list() {
        System.out.println("service");
        return boardMapper.list();
    }

}
