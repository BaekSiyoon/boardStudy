package com.example.board.board.mapper;

import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import com.example.board.board.vo.boardVo;

@Repository
@Mapper
public interface boardMapper {

  // 게시글 조회
  public List<boardVo> list();

  // 게시글 작성
  public void insertList(Map<String, Object> insertParam);

  // 상세 게시글 조회
  public List<boardVo> detailList(String seq);

  // 게시글 수정
  public void updateList(Map<String, Object> updateParam);

  // 게시글 삭제
  public void deleteList(String seq);

  // 게시글 수정 전 상세 내용
  // public List<boardVo> beforeList(String seq);

}
