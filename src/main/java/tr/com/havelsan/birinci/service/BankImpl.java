package tr.com.havelsan.birinci.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tr.com.havelsan.birinci.entity.Adress;
import tr.com.havelsan.birinci.entity.Bank;
import tr.com.havelsan.birinci.models.BankDTO;
import tr.com.havelsan.birinci.repository.BankRepository;

import java.util.List;

@Service

public class BankImpl implements BankService {

    @Autowired
    BankRepository bankRepository;

    @Override
    public Bank saveBank(BankDTO bankDTO) {
        Bank bank = new Bank();
        bank.setBank(bankDTO.getBank());
        bank.setKart(bankDTO.getKart());
        bank.setUserId(bankDTO.getUserId());

        return bankRepository.save(bank);
    }

    @Override
    public List<Bank> fetchAllBankList(long id) {
        List<Bank> bankList = bankRepository.findByUserId(id);
        return bankList;
    }

    @Override
    public Bank fetchBankList(long id) {
        return bankRepository.findById(id);
    }

    @Override
    public Bank updateBank(BankDTO bankDTO) {
        Bank bank = bankRepository.findById(bankDTO.getId());
        bank.setBank(bankDTO.getBank());
        bank.setKart(bankDTO.getKart());

        return bankRepository.save(bank);
    }

    @Override
    public void deleteBankById(long personId) {
        Bank bank = bankRepository.findById(personId);
        bankRepository.delete(bank);
    }
}
