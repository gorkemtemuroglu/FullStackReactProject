package tr.com.havelsan.birinci.Contorller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tr.com.havelsan.birinci.entity.Adress;
import tr.com.havelsan.birinci.models.AdressDTO;
import tr.com.havelsan.birinci.service.AdressService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AdressController {

    @Autowired
    AdressService adressService;

    @PostMapping("/adress")
    public Adress createAdress(@RequestBody AdressDTO adressDTO){
        return adressService.saveAdress(adressDTO);
    }


    @GetMapping("/adress/person/{id}")
    public List<Adress> getAllAdress(@PathVariable long id) {
        return adressService.fetchAllAdressList(id);
    }

    @GetMapping("/adress/{id}")
    public Adress getTheAdress(@PathVariable long id){
        return adressService.fetchAdressList(id);
    }


    @PutMapping("/adress")
    public Adress updateAdress(@RequestBody AdressDTO AdressDTO){
        return adressService.updateAdress(AdressDTO) ;
    }

    //Delete the person
    @DeleteMapping("/adress/{id}")
    public String deleteAdress(@PathVariable long id) {
        adressService.deleteAdressById(id);
        return "You deleted the adress which id is : " +id;
    }
}
