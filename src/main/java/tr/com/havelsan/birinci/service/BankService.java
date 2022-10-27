package tr.com.havelsan.birinci.service;

import tr.com.havelsan.birinci.entity.Adress;
import tr.com.havelsan.birinci.entity.Bank;
import tr.com.havelsan.birinci.models.AdressDTO;
import tr.com.havelsan.birinci.models.BankDTO;

import java.util.List;

public interface BankService {

    //Save operation
    Bank saveBank(BankDTO bankDTO);


    //Read operation
    Bank fetchBankList(long id);

    //Bank Main person
    List<Bank> fetchAllBankList(long id);


    //Update operation
    Bank updateBank(BankDTO bankDTO);

    //Delete operation
    void deleteBankById(long personId);



}
