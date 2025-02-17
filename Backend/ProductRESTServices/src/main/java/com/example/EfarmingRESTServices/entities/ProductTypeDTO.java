package com.example.EfarmingRESTServices.entities;

public class ProductTypeDTO {
    private Integer ptid;
    private String ptname;

    public ProductTypeDTO(Integer ptid, String ptname) {
        this.ptid = ptid;
        this.ptname = ptname;
    }

    public Integer getPtid() { return ptid; }
    public String getPtname() { return ptname; }
}
