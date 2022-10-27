package tr.com.havelsan.birinci.entity;

import javax.persistence.*;

@Entity
@Table(name ="bank")
public class Bank {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name ="bank")
    String bank;
    @Column(name ="user_id")
    long userId;
    @Column(name="kart")
    String kart;

    public String getKart() {
        return kart;
    }

    public void setKart(String kart) {
        this.kart = kart;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBank() {
        return bank;
    }

    public void setBank(String bank) {
        this.bank = bank;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }
}
