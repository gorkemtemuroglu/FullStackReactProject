package tr.com.havelsan.birinci.Contorller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.*;
import tr.com.havelsan.birinci.entity.Person;
import tr.com.havelsan.birinci.models.PersonDTO;
import tr.com.havelsan.birinci.repository.PersonRepository;
import tr.com.havelsan.birinci.service.PersonService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@EnableAutoConfiguration
@RestController
public class PersonController {

    @Autowired
    private PersonService personService;

    @Autowired
    PersonRepository personRepository;

    //
        @GetMapping("/users")
        public List<Person> getPersons(){
            return personRepository.findAll();
        }

    //

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/person/friends/{id}")
    public List<Person> getFriends(@PathVariable long id) {
        return personService.fetchPersonFriendList(id);
    }

    @PostMapping("/person")
    public Person createPerson(@RequestBody PersonDTO personDTO){
        return personService.savePerson(personDTO);
    }

    @GetMapping("/person/{id}")
    public Person getThePerson(@PathVariable long id){
        return personService.fetchPersonList(id);
    }

    @DeleteMapping("/person/{id}")
    public String deletePerson(@PathVariable long id) {
        personService.deletePersonById(id);
        return "You deleted the person which id is : " +id;
    }


    @PutMapping("/person")
    public Person updatePerson(@RequestBody PersonDTO personDTO){
        return  personService.updatePerson(personDTO);
    }




}
