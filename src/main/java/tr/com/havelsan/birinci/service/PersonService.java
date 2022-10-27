package tr.com.havelsan.birinci.service;

import org.springframework.context.annotation.Bean;
import tr.com.havelsan.birinci.entity.Person;
import tr.com.havelsan.birinci.models.PersonDTO;

import java.util.List;

public interface PersonService {


    //Save operation
    Person savePerson(PersonDTO personDTO);


    //Read operation
    Person fetchPersonList(long id);

    //Read operation
    List<Person> fetchPersonFriendList(long id);


    //Update operation
    Person updatePerson(PersonDTO personDTO);

    //Delete operation
    void deletePersonById(long personId);

}
