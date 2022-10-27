package tr.com.havelsan.birinci.entity;

import javax.persistence.*;

@Entity
@Table(name ="adress")
public class Adress {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "adress_type")
    String adress_type;

    @Column(name = "adress")
    String adress;

    @Column(name = "user_id")
    long userId;

    @Column(name ="city")
    String city;

    public long getId() {
        return id;
    }

    public void setId(long id) {
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
