package tr.com.havelsan.birinci.Contorller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tr.com.havelsan.birinci.entity.Person;
import tr.com.havelsan.birinci.entity.Tel;
import tr.com.havelsan.birinci.models.TelDTO;
import tr.com.havelsan.birinci.service.TelService;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TelController {

    @Autowired
    TelService telService;

    @GetMapping("/tels/{user_id}")
    public String getTelList(@PathVariable Long user_id ){
        return "You acces the tel list which user id's is : "+user_id;
    }

    @PostMapping("/tell")
    public Tel createTell(@RequestBody TelDTO telDTO){
        return telService.saveTel(telDTO);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/tel/person/{id}")
    public List<Tel> getTells(@PathVariable long id) {
        return telService.fetchPersonTelList(id);
    }

    @GetMapping("/tell/{id}")
    public Tel getTell(@PathVariable long id ){
       return telService.fetchTelList(id);

    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/tell")
    public Tel updateTell(@RequestBody TelDTO telDTO){
            return telService.updateTel(telDTO);
    }

    @DeleteMapping("/tel/{id}")
    public String deleteTel(@PathVariable long id) {
        telService.deleteTelById(id);
        return "You deleted the tel which id is : " +id;
    }
}
