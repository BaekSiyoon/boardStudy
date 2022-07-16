package com.example.board.board.mybatis.vo;

import java.time.LocalDateTime;

public class boardVo {
    private int Seq;
    private String title;
    private String content;
    private LocalDateTime regDate;
    private String regId;
    private LocalDateTime modDate;
    private String modId;
    private String delyn;

    public int getSeq() {
        return Seq;
    }

    public void setSeq(int seq) {
        Seq = seq;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public LocalDateTime getRegDate() {
        return regDate;
    }

    public void setRegDate(LocalDateTime regDate) {
        this.regDate = regDate;
    }

    public String getRegId() {
        return regId;
    }

    public void setRegId(String regId) {
        this.regId = regId;
    }

    public LocalDateTime getModDate() {
        return modDate;
    }

    public void setModDate(LocalDateTime modDate) {
        this.modDate = modDate;
    }

    public String getModId() {
        return modId;
    }

    public void setModId(String modId) {
        this.modId = modId;
    }

    public String getDelyn() {
        return delyn;
    }

    public void setDelyn(String delyn) {
        this.delyn = delyn;
    }
}
