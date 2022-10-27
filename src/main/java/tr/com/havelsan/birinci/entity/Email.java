package tr.com.havelsan.birinci.entity;

import javax.persistence.*;

@Entity
@Table(name ="email")
public class Email {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name ="email")
    String email;
    @Column(name="user_id")
    long userId;

    public long getId() {
        return id;
    }

    public void setId(long email_id) {
        this.id = email_id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }
}
