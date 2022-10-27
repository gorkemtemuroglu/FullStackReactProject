package tr.com.havelsan.birinci.models;

public class AdressDTO {
    int id;
    String adress_type;
    String adress;
    long userId;
    String city;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAdress_type() {
        return adress_type;
    }

    public void setAdress_type(String adress_type) {
        this.adress_type = adress_type;
    }

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }
}
