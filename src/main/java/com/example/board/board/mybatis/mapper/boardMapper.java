package com.example.board.board.mybatis.mapper;

import java.util.List;

import com.example.board.board.mybatis.vo.boardVo;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface boardMapper {
    public List<boardVo> list();
}
