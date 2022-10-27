package tr.com.havelsan.birinci.Contorller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tr.com.havelsan.birinci.entity.Bank;
import tr.com.havelsan.birinci.models.BankDTO;
import tr.com.havelsan.birinci.service.BankService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class BankController {


    @Autowired
    BankService bankService;

    @PostMapping("/bank")
    public Bank createBank(@RequestBody BankDTO bankDTO){
          return bankService.saveBank(bankDTO);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/bank/person/{id}")
    public List<Bank> getAllBanks(@PathVariable long id) {
        return bankService.fetchAllBankList(id);
    }



    @GetMapping("/bank/{id}")
    public Bank getBank(@PathVariable long id ){
        return bankService.fetchBankList(id);
    }


    @PutMapping("/bank")
    public Bank updateBank(@RequestBody BankDTO bankDTO){

        return bankService.updateBank(bankDTO);
    }

    @DeleteMapping("/bank/{id}")
    public String deleteBank(@PathVariable long id) {
        bankService.deleteBankById(id);
        return "You deleted the bank which id is : " +id;
    }
}
