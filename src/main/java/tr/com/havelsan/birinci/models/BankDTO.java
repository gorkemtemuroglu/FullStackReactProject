package tr.com.havelsan.birinci.models;

public class BankDTO {
    private long id;
    private String bank;
    private String kart;
    private long userId;

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
