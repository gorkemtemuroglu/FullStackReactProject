package tr.com.havelsan.birinci.Contorller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tr.com.havelsan.birinci.entity.Hobi;
import tr.com.havelsan.birinci.models.HobiDTO;
import tr.com.havelsan.birinci.service.HobiService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class HobiController {

    @Autowired
    HobiService hobiService;

    @PostMapping("/hobi")
    public Hobi createHobi(@RequestBody HobiDTO hobiDTO){
        return hobiService.saveHobi(hobiDTO);
    }

    @GetMapping("/hobi/{id}")
    public Hobi getHobi(@PathVariable long id ){
        return hobiService.fetchHobiList(id);
    }

    @GetMapping("/hobis/{user_id}")
    public String getHobiList(@PathVariable Long user_id ){
        return "You acces the Person list which user id's is : "+user_id;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/hobi/person/{id}")
    public List<Hobi> getAllHobis(@PathVariable long id) {
        return hobiService.fetchAllHobiList(id);
    }

    @PutMapping("/hobi")
    public Hobi updateHobi(@RequestBody HobiDTO hobiDTO){
        return hobiService.updateHobi(hobiDTO);
    }

    @DeleteMapping("/hobi/{id}")
    public String deleteHobi(@PathVariable long id) {
       hobiService.deleteHobiById(id);
        return "You deleted the hobi which id is : " +id;
    }
}
