package tr.com.havelsan.birinci.entity;


import javax.persistence.*;

@Entity
@Table(name="work")
public class Work {

    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private long id;
    @Column (name ="salary")
    int salary;
    @Column(name="user_id")
    long userId;
    @Column(name="work_name")
    String work_name;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getSalary() {
        return salary;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getWork_name() {
        return work_name;
    }

    public void setWork_name(String work_name) {
        this.work_name = work_name;
    }
}
