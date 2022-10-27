package tr.com.havelsan.birinci.Contorller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import tr.com.havelsan.birinci.entity.Person;
import tr.com.havelsan.birinci.service.PersonService;

@RestController
public class TestController {

    @GetMapping("/")
    String test() {
        return "Hello World ! ! ! ! !";
    }

    @GetMapping("/deneme")
    String returnDeneme(){
        String helloworld ="Proje denemesi";
        return helloworld;
    }
}
