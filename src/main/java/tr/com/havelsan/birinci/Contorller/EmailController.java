package tr.com.havelsan.birinci.Contorller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tr.com.havelsan.birinci.entity.Email;
import tr.com.havelsan.birinci.models.EmailDTO;
import tr.com.havelsan.birinci.service.EmailService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class EmailController {


    @Autowired
    EmailService emailService;

    @GetMapping("/emails/{user_id}")
    public String getEmailList(@PathVariable Long user_id ){
        return "You acces the email list which user id's is : "+user_id;
    }

    @PostMapping("/email")
    public Email createEmail(@RequestBody EmailDTO emailDTO){
        return emailService.saveEmail(emailDTO);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/email/person/{id}")
    public List<Email> getAllEducation(@PathVariable long id) {
        return emailService.fetchAllEmailList(id);
    }

    @GetMapping("/email/{id}")
    public Email getEmail(@PathVariable long id ){
        return emailService.fetchEmailList(id);
    }

    @PutMapping("/email")
    public Email updateEmail(@RequestBody EmailDTO emailDTO){
        return emailService.updateEmail(emailDTO);
    }

    @DeleteMapping("/email/{id}")
    public String deleteEmail(@PathVariable long id) {
        emailService.deleteEmailById(id);
        return "You deleted the email which id is : " +id;
    }
}
