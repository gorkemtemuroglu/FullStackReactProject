package tr.com.havelsan.birinci.entity;


import javax.persistence.*;

@Entity
@Table(name ="hobi")
public class Hobi {


    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private long id;

    @Column(name ="hobi")
    String hobi;
    @Column(name ="user_id")
    long userId;


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getHobi() {
        return hobi;
    }

    public void setHobi(String hobi) {
        this.hobi = hobi;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }
}
