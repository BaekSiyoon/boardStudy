package com.example.board.board.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.example.board.board.vo.boardVo;

@Repository
@Mapper
public interface boardMapper {
    public List<boardVo> list();
}
