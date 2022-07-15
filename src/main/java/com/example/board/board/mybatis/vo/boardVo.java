package com.example.board.board.mybatis.vo;

public class boardVo {
    private String Seq;
    private String title;
    private String content;
    private String loginId;
    private String regDate;
    private String regId;
    private String modDate;
    private String modId;
    private String delyn;

    public String getSeq() {
        return Seq;
    }
    public void setSeq(String seq) {
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
    public String getLoginId() {
        return loginId;
    }
    public void setLoginId(String loginId) {
        this.loginId = loginId;
    }
    public String getRegDate() {
        return regDate;
    }
    public void setRegDate(String regDate) {
        this.regDate = regDate;
    }
    public String getRegId() {
        return regId;
    }
    public void setRegId(String regId) {
        this.regId = regId;
    }
    public String getModDate() {
        return modDate;
    }
    public void setModDate(String modDate) {
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
