package tr.com.havelsan.birinci.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tr.com.havelsan.birinci.entity.Person;
import tr.com.havelsan.birinci.models.PersonDTO;
import tr.com.havelsan.birinci.repository.PersonRepository;

import java.util.List;


@Service

public class PersonImpl implements PersonService{

    @Autowired
    PersonRepository personRepository;

    @Override
    public Person savePerson(PersonDTO personDTO) {
       Person person = new Person();
        person.setName(personDTO.getName());
        person.setSurname(personDTO.getSurname());
        person.setGender(personDTO.getGender());
        person.setAge(personDTO.getAge());
        person.setTc(personDTO.getTc());
        person.setAbout(personDTO.getAbout());
        person.setInterest(personDTO.getInterest());
        person.setTip(personDTO.getTip());
        person.setUserId(personDTO.getUserId());

       return personRepository.save(person);
    }

    @Override
    public Person fetchPersonList(long id) {
        Person person = personRepository.findById(id);
        return person;
    }

    @Override
    public List<Person> fetchPersonFriendList(long id){
        List<Person> friendList = personRepository.getByUserIdAndTip(id, "friend");
          return friendList;
    }


    @Override
    public Person updatePerson(PersonDTO personDTO) {
        Person person = personRepository.findById(personDTO.getId());
        person.setName(personDTO.getName());
        person.setSurname(personDTO.getSurname());
        person.setTc(personDTO.getTc());
        person.setGender(personDTO.getGender());
        person.setAge(personDTO.getAge());

        return personRepository.save(person);
    }

    @Override
    public void deletePersonById(long personId) {
        Person person = personRepository.findById(personId);
        personRepository.delete(person);
    }
}
