package tr.com.havelsan.birinci.models;

public class EducationDTO {
    int id;
    String school;
    long userId;
    String situation;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }


    public String getSchool() {
        return school;
    }

    public void setSchool(String school) {
        this.school = school;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getSituation() {
        return situation;
    }

    public void setSituation(String situation) {
        this.situation = situation;
    }
}
