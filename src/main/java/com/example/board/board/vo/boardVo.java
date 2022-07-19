package com.example.board.board.vo;

import java.time.LocalDateTime;

public class boardVo {
    private int seq;
    private String title;
    private String content;
    private String password;
    private LocalDateTime regDate;
    private String regId;
    private LocalDateTime modDate;
    private String modId;
    private String delyn;

    public int getSeq() {
        return this.seq;
    }

    public void setSeq(int seq) {
        this.seq = seq;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return this.content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public LocalDateTime getRegDate() {
        return this.regDate;
    }

    public void setRegDate(LocalDateTime regDate) {
        this.regDate = regDate;
    }

    public String getRegId() {
        return this.regId;
    }

    public void setRegId(String regId) {
        this.regId = regId;
    }

    public LocalDateTime getModDate() {
        return this.modDate;
    }

    public void setModDate(LocalDateTime modDate) {
        this.modDate = modDate;
    }

    public String getModId() {
        return this.modId;
    }

    public void setModId(String modId) {
        this.modId = modId;
    }

    public String getDelyn() {
        return this.delyn;
    }

    public void setDelyn(String delyn) {
        this.delyn = delyn;
    }    
}